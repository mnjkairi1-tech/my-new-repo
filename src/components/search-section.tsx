import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function SearchSection() {
  return (
    <div className="text-center py-12 md:py-20 px-4">
      <h2 className="text-sm font-medium text-muted-foreground mb-2">
        Ask what AI you want
      </h2>
      <div className="relative w-full max-w-2xl mx-auto">
        <Input
          type="search"
          placeholder="Search for any AI tool..."
          className="w-full rounded-full h-14 pl-6 pr-16 text-base shadow-md"
        />
        <Button
          type="submit"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-primary hover:bg-primary/90"
        >
          <ArrowRight className="h-5 w-5 text-primary-foreground" />
          <span className="sr-only">Search</span>
        </Button>
      </div>
    </div>
  );
}
