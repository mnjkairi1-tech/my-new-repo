
import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;

export const getImage = (id: string): string => {
    const imageData = PlaceHolderImages.find(img => img.id === id);
    if (imageData) {
        return imageData.imageUrl;
    }
    // Fallback to a seeded picsum photo if no mapping is found
    return `https://picsum.photos/seed/${id}/600/400`;
};

export const getHint = (id: string): string => {
    const imageData = PlaceHolderImages.find(img => img.id === id);
    if (imageData) {
        return imageData.imageHint;
    }
    return id.replace(/-/g, ' ');
};
