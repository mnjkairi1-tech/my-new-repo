
import {
  Video,
  Clapperboard,
  Mic,
  UserSquare,
  ImageIcon,
  Type,
  Voicemail,
  Text,
  BrainCircuit,
  Presentation,
  Feather,
  GraduationCap,
  Scissors,
  Youtube,
  BookOpen,
  LayoutGrid,
  TrendingUp,
  Sparkles,
  Star,
  Paintbrush,
  MessageSquare,
  ImageDown,
  LucideProps,
  Icon as LucideIcon,
} from 'lucide-react';

const icons: { [key: string]: LucideIcon } = {
  Video,
  Clapperboard,
  Mic,
  UserSquare,
  ImageIcon,
  Type,
  Voicemail,
  Text,
  BrainCircuit,
  Presentation,
  Feather,
  GraduationCap,
  Scissors,
  Youtube,
  BookOpen,
  LayoutGrid,
  TrendingUp,
  Sparkles,
  Star,
  Paintbrush,
  MessageSquare,
  ImageDown,
};

export const ToolIcon = ({ name, ...props }: { name: string } & LucideProps) => {
  const Icon = icons[name];
  if (!Icon) {
    return null; // Or a default icon
  }
  return <Icon {...props} />;
};

    