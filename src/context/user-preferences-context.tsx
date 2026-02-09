

'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Tool } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';

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
};

const UserPreferencesContext = createContext<UserPreferencesContextType | undefined>(undefined);

export const UserPreferencesProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('default');
  const [fontSize, setFontSize] = useState('font-size-medium');
  const [heartedTools, setHeartedTools] = useState<Tool[]>([]);
  const [starredTools, setStarredTools] = useState<Tool[]>([]);
  const [pinnedTools, setPinnedTools] = useState<Set<string>>(new Set());
  const [recentTools, setRecentTools] = useState<Tool[]>([]);
  const [comparisonList, setComparisonList] = useState<Tool[]>([]);
  const { toast } = useToast();
  const [pinnedGroups, setPinnedGroups] = useState<Set<string>>(new Set());
  const { user } = useUser();
  const router = useRouter();


  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'default';
    const storedFontSize = localStorage.getItem('fontSize') || 'font-size-medium';
    const storedHeartedTools = localStorage.getItem('heartedTools');
    const storedStarredTools = localStorage.getItem('starredTools');
    const storedPinnedTools = localStorage.getItem('pinnedTools');
    const storedRecentTools = localStorage.getItem('recentTools');
    const storedPinnedGroups = localStorage.getItem('pinnedGroups');

    setTheme(storedTheme);
    setFontSize(storedFontSize);
    document.documentElement.className = storedFontSize;
    document.documentElement.setAttribute('data-theme', storedTheme);

    if (storedHeartedTools) {
      setHeartedTools(JSON.parse(storedHeartedTools));
    }
    if (storedStarredTools) {
      setStarredTools(JSON.parse(storedStarredTools));
    }
    if (storedPinnedTools) {
      setPinnedTools(new Set(JSON.parse(storedPinnedTools)));
    }
    if (storedRecentTools) {
      setRecentTools(JSON.parse(storedRecentTools));
    }
    if (storedPinnedGroups) {
      setPinnedGroups(new Set(JSON.parse(storedPinnedGroups)));
    }
  }, []);

  const requireAuth = (action: string): boolean => {
    if (!user) {
      toast({
        variant: 'destructive',
        title: 'Please sign in',
        description: `You need to be logged in to ${action}.`,
      });
      router.push('/?tab=settings');
      return false;
    }
    return true;
  };

  const handleSetTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const handleSetFontSize = (newSize: string) => {
    setFontSize(newSize);
    localStorage.setItem('fontSize', newSize);
    document.documentElement.className = newSize;
  };

  const handleHeartToggle = (tool: Tool) => {
    if (!requireAuth('save tools')) return;
    setHeartedTools(prev => {
      const isHearted = prev.some(t => t.name === tool.name);
      const newHeartedTools = isHearted
        ? prev.filter(t => t.name !== tool.name)
        : [tool, ...prev];
      localStorage.setItem('heartedTools', JSON.stringify(newHeartedTools));
      return newHeartedTools;
    });
  };

  const handleStarToggle = (tool: Tool) => {
    if (!requireAuth('star tools')) return;
    setStarredTools(prev => {
      const isStarred = prev.some(t => t.name === tool.name);
      const newStarredTools = isStarred
        ? prev.filter(t => t.name !== tool.name)
        : [tool, ...prev];
      localStorage.setItem('starredTools', JSON.stringify(newStarredTools));
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
  };

  const addRecentTool = (tool: Tool) => {
    setRecentTools(prev => {
      const newRecents = [tool, ...prev.filter(t => t.name !== tool.name)];
      const slicedRecents = newRecents.slice(0, 5); 
      localStorage.setItem('recentTools', JSON.stringify(slicedRecents));
      return slicedRecents;
    });
  };
  
  const selectForCompare = (tool: Tool) => {
    setComparisonList(prev => {
      const isInList = prev.find(t => t.name === tool.name);
      if (isInList) {
        return prev.filter(t => t.name !== tool.name);
      }
      if (prev.length < 2) {
        return [...prev, tool];
      }
      toast({
        variant: 'destructive',
        title: 'Comparison Full',
        description: 'You can only compare two tools at a time. Please remove one first.',
      });
      return prev;
    });
  };

  const clearComparison = () => {
    setComparisonList([]);
  };

  const handlePinGroupToggle = (groupId: string) => {
    if (!requireAuth('pin groups')) return;
    setPinnedGroups(prev => {
      const newPinned = new Set(prev);
      if (newPinned.has(groupId)) {
        newPinned.delete(groupId);
      } else {
        newPinned.add(groupId);
      }
      localStorage.setItem('pinnedGroups', JSON.stringify(Array.from(newPinned)));
      return newPinned;
    });
  };

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
    }}>
      {children}
    </UserPreferencesContext.Provider>
  );
};

export const useUserPreferences = () => {
  const context = useContext(UserPreferencesContext);
  if (context === undefined) {
    throw new Error('useUserPreferences must be used within a UserPreferencesProvider');
  }
  return context;
};
