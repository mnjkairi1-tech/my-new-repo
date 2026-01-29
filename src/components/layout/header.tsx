import { AiAtlasIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Gift, Wand2 } from "lucide-react";

export function AppHeader() {
  return (
    <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AiAtlasIcon className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">AI Atlas</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#" className="text-primary border-b-2 border-primary pb-1">
            Home
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Tools
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Trending
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Settings
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-sm font-medium">
            <Gift className="mr-2 h-4 w-4" />
            Ultra Free
          </Button>
          <Button variant="ghost" className="text-sm font-medium">
            <Wand2 className="mr-2 h-4 w-4" />
            Modes
          </Button>
        </div>
      </div>
    </header>
  );
}
