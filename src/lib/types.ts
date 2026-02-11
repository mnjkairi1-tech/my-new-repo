
export interface Tool {
  name: string;
  category?: string;
  url: string;
  image: string;
  dataAiHint: string;
  description: string;
  isTrending?: boolean;
  icon?: string;
  isNew?: boolean;
  pricing?: 'Free' | 'Paid' | 'Freemium';
  features?: string[];
}
