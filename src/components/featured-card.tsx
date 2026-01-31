
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export function FeaturedCard() {
  const featuredImage = PlaceHolderImages.find(img => img.id === 'featured-movie-app');

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <Card className="relative w-full aspect-[9/16] sm:aspect-[16/9] overflow-hidden rounded-2xl border-4 border-accent/80 shadow-xl shadow-accent/20">
        {featuredImage && (
            <Image
                src={featuredImage.imageUrl}
                alt={featuredImage.description}
                fill
                style={{objectFit: "cover"}}
                data-ai-hint={featuredImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <CardContent className="relative flex flex-col justify-end h-full p-6 md:p-10 text-white">
          <h3 className="text-3xl md:text-5xl font-black tracking-tight">FREE MOVIE APP</h3>
          <p className="text-lg md:text-2xl font-medium">Manga Reader</p>
        </CardContent>
      </Card>
    </div>
  );
}
