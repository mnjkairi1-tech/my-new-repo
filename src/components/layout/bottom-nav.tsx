import { Home, AppWindow, Users, CircleUserRound } from 'lucide-react';

export function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t z-50">
      <div className="flex justify-around items-center h-16">
        <a href="#" className="flex flex-col items-center gap-1 text-primary">
          <Home className="h-6 w-6" />
          <span className="text-xs font-medium">Home</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
          <AppWindow className="h-6 w-6" />
          <span className="text-xs">Tools</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
          <Users className="h-6 w-6" />
          <span className="text-xs">Community</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
          <CircleUserRound className="h-6 w-6" />
          <span className="text-xs">Profile</span>
        </a>
      </div>
    </nav>
  );
}
