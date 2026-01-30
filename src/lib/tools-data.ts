
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

// Client-side tools data is now minimal and only contains popular tools for the home page.
// The main list is fetched from the server.

export const allTools: Tool[] = [
    ...homePopularTools,
].filter((tool, index, self) => 
    tool && tool.name && index === self.findIndex((t) => t && t.name === tool.name)
);
