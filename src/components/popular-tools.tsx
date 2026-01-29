
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Video, Clapperboard, Mic, User } from "lucide-react";
import { popularTools } from "@/lib/tools-data";
import { ToolIcon } from "@/lib/tool-icons";

export function PopularTools() {
  return (
    <div className="w-full max-w-7xl mx-auto py-8 md:py-12">
      <div className="flex justify-between items-center mb-6 px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold">Free popular tools</h3>
        <Button variant="link" className="text-sm text-primary">See all</Button>
      </div>
      <div className="relative">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex w-max space-x-4 px-4 sm:px-6 lg:px-8">
            {popularTools.map((tool) => (
              <Card key={tool.name} className="flex-shrink-0 flex flex-col items-center justify-center p-6 gap-3 rounded-2xl w-32 h-32">
                <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center">
                  {tool.icon && <ToolIcon name={tool.icon} className="w-8 h-8 text-primary" />}
                </div>
                <span className="font-medium text-sm">{tool.name}</span>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="h-2" />
        </ScrollArea>
      </div>
    </div>
  );
}

    