
import {
  LayoutGrid,
  ImageDown,
  Type,
  Mic,
  Voicemail,
  UserSquare,
  ImageIcon,
  TrendingUp,
  Sparkles,
} from 'lucide-react';
import { popularTools as homePopularTools } from './home-page-data';
import type { Tool } from './types';
import { allToolsServer } from './all-tools-server';

// Client-side tools data is now minimal and only contains popular tools for the home page.
// The main list is fetched from the server.

export const allTools: Tool[] = allToolsServer.filter(t => t).map(tool => {
  const { icon, ...rest } = tool as any; // Cast to any to ignore the fact that icon might not be there
  return rest as Tool;
});

