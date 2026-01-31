export function getCloudinaryUrl(imageUrl: string) {
  // IMPORTANT: This is a placeholder cloud name.
  const CLOUD_NAME = 'dprpncwrc';

  if (!imageUrl || typeof imageUrl !== 'string') {
    return '';
  }
  
  if (imageUrl.includes('res.cloudinary.com')) {
    return imageUrl;
  }

  const optimizationParams = 'f_auto,q_auto';

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/fetch/${optimizationParams}/${imageUrl}`;
}
