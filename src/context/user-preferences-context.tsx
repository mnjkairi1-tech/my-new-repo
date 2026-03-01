'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';
import type { Tool } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { useUser, useFirestore, useMemoFirebase } from '@/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { setDocumentNonBlocking } from '@/firebase/non-blocking-updates';

type UserPreferencesContextType = {
  theme: string;
  setTheme: (theme: string) => void;
  fontSize: string;
  setFontSize: (size: string) => void;
  heartedTools: Tool[];
  handleHeartToggle: (tool: Tool) => void;
  starredTools: Tool[];
  handleStarToggle: (tool: Tool) => void;
  pinnedTools: Set<string>;
  handlePinToggle: (toolName: string) => void;
  recentTools: Tool[];
  addRecentTool: (tool: Tool) => void;
  comparisonList: Tool[];
  selectForCompare: (tool: Tool) => void;
  clearComparison: () => void;
  pinnedGroups: Set<string>;
  handlePinGroupToggle: (groupId: string) => void;
  userPlan: string;
  isQuickAccessDefault: boolean;
  setIsQuickAccessDefault: (value: boolean) => void;
};

const UserPreferencesContext = createContext<UserPreferencesContextType | undefined>(undefined);

export const UserPreferencesProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('cute-mint-glass');
  const [fontSize, setFontSize] = useState('font-size-medium');
  const [heartedTools, setHeartedTools] = useState<Tool[]>([]);
  const [starredTools, setStarredTools] = useState<Tool[]>([]);
  const [pinnedTools, setPinnedTools] = useState<Set<string>>(new Set());
  const [recentTools, setRecentTools] = useState<Tool[]>([]);
  const [comparisonList, setComparisonList] = useState<Tool[]>([]);
  const [pinnedGroups, setPinnedGroups] = useState<Set<string>>(new Set());
  const [isQuickAccessDefault, setIsQuickAccessDefault] = useState(false);
  
  const { toast } = useToast();
  const { user } = useUser();
  const firestore = useFirestore();
  const router = useRouter();
  const isInitialSyncRef = useRef(true);

  // Helper to sync to cloud if user is logged in
  const syncToCloud = (updates: any) => {
    if (user && firestore) {
      const prefsRef = doc(firestore, 'users', user.uid, 'settings', 'preferences');
      setDocumentNonBlocking(prefsRef, updates, { merge: true });
    }
  };

  // Load from LocalStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'cute-mint-glass';
    const storedFontSize = localStorage.getItem('fontSize') || 'font-size-medium';
    const storedHeartedTools = localStorage.getItem('heartedTools');
    const storedStarredTools = localStorage.getItem('starredTools');
    const storedPinnedTools = localStorage.getItem('pinnedTools');
    const storedRecentTools = localStorage.getItem('recentTools');
    const storedPinnedGroups = localStorage.getItem('pinnedGroups');
    const storedQuickAccessDefault = localStorage.getItem('isQuickAccessDefault');

    if (storedTheme) handleSetTheme(storedTheme, false);
    if (storedFontSize) handleSetFontSize(storedFontSize, false);
    if (storedHeartedTools) setHeartedTools(JSON.parse(storedHeartedTools));
    if (storedStarredTools) setStarredTools(JSON.parse(storedStarredTools));
    if (storedPinnedTools) setPinnedTools(new Set(JSON.parse(storedPinnedTools)));
    if (storedRecentTools) setRecentTools(JSON.parse(storedRecentTools));
    if (storedPinnedGroups) setPinnedGroups(new Set(JSON.parse(storedPinnedGroups)));
    if (storedQuickAccessDefault) setIsQuickAccessDefault(JSON.parse(storedQuickAccessDefault));
  }, []);

  // Real-time Sync from Firestore
  useEffect(() => {
    if (!user || !firestore) return;

    const prefsRef = doc(firestore, 'users', user.uid, 'settings', 'preferences');
    
    const unsubscribe = onSnapshot(prefsRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        
        // Only update if it's different from current state to avoid infinite loops
        if (data.theme) handleSetTheme(data.theme, false);
        if (data.fontSize) handleSetFontSize(data.fontSize, false);
        if (data.heartedTools) setHeartedTools(data.heartedTools);
        if (data.starredTools) setStarredTools(data.starredTools);
        if (data.pinnedTools) setPinnedTools(new Set(data.pinnedTools));
        if (data.recentTools) setRecentTools(data.recentTools);
        if (data.pinnedGroups) setPinnedGroups(new Set(data.pinnedGroups));
        if (data.isQuickAccessDefault !== undefined) setIsQuickAccessDefault(data.isQuickAccessDefault);
      } else if (isInitialSyncRef.current) {
        // If no cloud data yet, upload local data as initial setup
        syncToCloud({
          theme,
          fontSize,
          heartedTools,
          starredTools,
          pinnedTools: Array.from(pinnedTools),
          recentTools,
          pinnedGroups: Array.from(pinnedGroups),
          isQuickAccessDefault
        });
      }
      isInitialSyncRef.current = false;
    });

    return () => unsubscribe();
  }, [user, firestore]);

  const requireAuth = (action: string): boolean => {
    if (!user) {
      toast({
        variant: 'destructive',
        title: 'Please sign in',
        description: `You need to be logged in to ${action} permanently.`,
      });
      router.push('/?tab=settings');
      return false;
    }
    return true;
  };

  const handleSetTheme = (newTheme: string, shouldSync = true) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    const root = document.documentElement;
    root.setAttribute('data-theme', newTheme);
    
    const darkThemes = ['dark', 'midnight-glass', 'emerald-night', 'cosmic-neon', 'neon-volt', 'velvet-sunset'];
    if (darkThemes.includes(newTheme)) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    if (shouldSync) syncToCloud({ theme: newTheme });
  };

  const handleSetFontSize = (newSize: string, shouldSync = true) => {
    setFontSize(newSize);
    localStorage.setItem('fontSize', newSize);
    const root = document.documentElement;
    root.classList.remove('font-size-small', 'font-size-medium', 'font-size-large');
    root.classList.add(newSize);

    if (shouldSync) syncToCloud({ fontSize: newSize });
  };

  const handleHeartToggle = (tool: Tool) => {
    if (!requireAuth('save tools')) return;
    
    setHeartedTools(prev => {
      const isHearted = prev.some(t => t.name === tool.name);
      const newHeartedTools = isHearted ? prev.filter(t => t.name !== tool.name) : [tool, ...prev];
      localStorage.setItem('heartedTools', JSON.stringify(newHeartedTools));
      syncToCloud({ heartedTools: newHeartedTools });
      return newHeartedTools;
    });
  };

  const handleStarToggle = (tool: Tool) => {
    if (!requireAuth('star tools')) return;
    setStarredTools(prev => {
      const isStarred = prev.some(t => t.name === tool.name);
      const newStarredTools = isStarred ? prev.filter(t => t.name !== tool.name) : [tool, ...prev];
      localStorage.setItem('starredTools', JSON.stringify(newStarredTools));
      syncToCloud({ starredTools: newStarredTools });
      return newStarredTools;
    });
  };

  const handlePinToggle = (toolName: string) => {
    if (!requireAuth('pin tools')) return;
    const newPinnedTools = new Set(pinnedTools);
    if (newPinnedTools.has(toolName)) {
      newPinnedTools.delete(toolName);
    } else {
      newPinnedTools.add(toolName);
    }
    setPinnedTools(newPinnedTools);
    localStorage.setItem('pinnedTools', JSON.stringify(Array.from(newPinnedTools)));
    syncToCloud({ pinnedTools: Array.from(newPinnedTools) });
  };

  const addRecentTool = (tool: Tool) => {
    setRecentTools(prev => {
      const newRecents = [tool, ...prev.filter(t => t.name !== tool.name)];
      const slicedRecents = newRecents.slice(0, 5); 
      localStorage.setItem('recentTools', JSON.stringify(slicedRecents));
      syncToCloud({ recentTools: slicedRecents });
      return slicedRecents;
    });
  };
  
  const selectForCompare = (tool: Tool) => {
    setComparisonList(prev => {
      const isInList = prev.find(t => t.name === tool.name);
      if (isInList) return prev.filter(t => t.name !== tool.name);
      if (prev.length < 2) return [...prev, tool];
      toast({ variant: 'destructive', title: 'Comparison Full', description: 'You can only compare two tools.' });
      return prev;
    });
  };

  const clearComparison = () => setComparisonList([]);

  const handlePinGroupToggle = (groupId: string) => {
    if (!requireAuth('pin groups')) return;
    setPinnedGroups(prev => {
      const newPinned = new Set(prev);
      if (newPinned.has(groupId)) newPinned.delete(groupId);
      else newPinned.add(groupId);
      localStorage.setItem('pinnedGroups', JSON.stringify(Array.from(newPinned)));
      syncToCloud({ pinnedGroups: Array.from(newPinned) });
      return newPinned;
    });
  };

  const handleSetQuickAccessDefault = (value: boolean) => {
    if (!requireAuth('set default view')) return;
    setIsQuickAccessDefault(value);
    localStorage.setItem('isQuickAccessDefault', JSON.stringify(value));
    syncToCloud({ isQuickAccessDefault: value });
    toast({
        title: value ? "Default Enabled" : "Default Disabled",
        description: value ? "Quick Access is now your start page." : "Standard Home page is now default."
    });
  };

  // Mock user plan for display purposes, can be extended with actual billing logic
  const userPlan = 'basic'; 

  return (
    <UserPreferencesContext.Provider value={{ 
      theme, 
      setTheme: handleSetTheme, 
      fontSize, 
      setFontSize: handleSetFontSize,
      heartedTools,
      handleHeartToggle,
      starredTools,
      handleStarToggle,
      pinnedTools,
      handlePinToggle,
      recentTools,
      addRecentTool,
      comparisonList,
      selectForCompare,
      clearComparison,
      pinnedGroups,
      handlePinGroupToggle,
      userPlan,
      isQuickAccessDefault,
      setIsQuickAccessDefault: handleSetQuickAccessDefault
    }}>
      {children}
    </UserPreferencesContext.Provider>
  );
};

export const useUserPreferences = () => {
  const context = useContext(UserPreferencesContext);
  if (context === undefined) throw new Error('useUserPreferences must be used within a UserPreferencesProvider');
  return context;
};
