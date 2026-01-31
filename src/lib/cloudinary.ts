export function getCloudinaryUrl(imageUrl: string) {
  // Using Cloudinary's public 'demo' account for fetching and optimization.
  // For production, replace 'demo' with your own Cloudinary cloud name.
  const CLOUD_NAME = 'demo';

  if (!imageUrl || typeof imageUrl !== 'string') {
    return '';
  }
  
  if (imageUrl.includes('res.cloudinary.com')) {
    return imageUrl;
  }

  const optimizationParams = 'f_auto,q_auto';

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/fetch/${optimizationParams}/${imageUrl}`;
}
