
export type Tool = {
    name: string;
    description: string;
    url: string;
    image: string;
    dataAiHint: string;
    pricing: 'Free' | 'Paid' | 'Freemium';
};

export type ToolCategory = {
    title: string;
    icon: string;
    tools: Tool[];
};

export const advertisingToolData: ToolCategory[] = [
    {
        title: "PPC & SEM Platforms",
        icon: "Search",
        tools: [
            { name: 'Google Ads', description: 'Online advertising platform by Google.', url: 'https://ads.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'ppc ads', pricing: 'Paid' },
            { name: 'Microsoft Advertising', description: 'Advertise on Bing, AOL, and Yahoo.', url: 'https://ads.microsoft.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=microsoft.com', dataAiHint: 'bing ads', pricing: 'Paid' },
            { name: 'WordStream', description: 'Online advertising tools and resources.', url: 'https://www.wordstream.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=wordstream.com', dataAiHint: 'sem tools', pricing: 'Paid' },
            { name: 'Optmyzr', description: 'PPC management software for advertisers.', url: 'https://www.optmyzr.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=optmyzr.com', dataAiHint: 'ppc automation', pricing: 'Paid' },
            { name: 'AdEspresso', description: 'Facebook, Instagram, and Google Ads management.', url: 'https://adespresso.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=adespresso.com', dataAiHint: 'social ads', pricing: 'Paid' },
        ]
    },
    {
        title: "Social Media Advertising",
        icon: "Users",
        tools: [
            { name: 'Facebook Ads Manager', description: 'Create and manage ads on Facebook and Instagram.', url: 'https://www.facebook.com/business/tools/ads-manager', image: 'https://www.google.com/s2/favicons?sz=128&domain=facebook.com', dataAiHint: 'facebook ads', pricing: 'Paid' },
            { name: 'LinkedIn Ads', description: 'Reach a professional audience with targeted ads.', url: 'https://www.linkedin.com/business/marketing/ads', image: 'https://www.google.com/s2/favicons?sz=128&domain=linkedin.com', dataAiHint: 'b2b advertising', pricing: 'Paid' },
            { name: 'Twitter Ads', description: 'Promote your brand and products on Twitter/X.', url: 'https://ads.twitter.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=twitter.com', dataAiHint: 'twitter marketing', pricing: 'Paid' },
            { name: 'Pinterest Ads', description: 'Reach people looking for inspiration.', url: 'https://ads.pinterest.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pinterest.com', dataAiHint: 'visual discovery', pricing: 'Paid' },
            { name: 'TikTok Ads Manager', description: 'Advertise to a global audience on TikTok.', url: 'https://www.tiktok.com/business/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tiktok.com', dataAiHint: 'tiktok ads', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Ad Creative Generation",
        icon: "Palette",
        tools: [
            { name: 'AdCreative.ai', description: 'Generate conversion-focused ad creatives.', url: 'https://www.adcreative.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=adcreative.ai', dataAiHint: 'ad creatives', pricing: 'Paid' },
            { name: 'Jasper', description: 'AI writer for ad copy and creative.', url: 'https://www.jasper.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=jasper.ai', dataAiHint: 'ad copy', pricing: 'Paid' },
            { name: 'Pencil', description: 'Generative AI for advertising.', url: 'https://www.trypencil.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=trypencil.com', dataAiHint: 'creative ai', pricing: 'Paid' },
            { name: 'Vexels', description: 'Create stunning ad visuals.', url: 'https://vexels.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=vexels.com', dataAiHint: 'ad visuals', pricing: 'Paid' },
        ]
    },
    {
        title: "Programmatic Advertising",
        icon: "Bot",
        tools: [
            { name: 'Google Display & Video 360', description: 'Integrated tool for ad campaigns.', url: 'https://marketingplatform.google.com/about/display-video-360/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'programmatic ads', pricing: 'Paid' },
            { name: 'The Trade Desk', description: 'A global technology platform for buyers of advertising.', url: 'https://www.thetradedesk.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=thetradedesk.com', dataAiHint: 'ad buying', pricing: 'Paid' },
            { name: 'Criteo', description: 'Commerce media platform for retargeting.', url: 'https://www.criteo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=criteo.com', dataAiHint: 'retargeting', pricing: 'Paid' },
            { name: 'MediaMath', description: 'Demand-side platform (DSP) for programmatic advertising.', url: 'https://www.mediamath.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mediamath.com', dataAiHint: 'dsp', pricing: 'Paid' },
        ]
    },
    {
        title: "Ad Analytics & Tracking",
        icon: "BarChart",
        tools: [
            { name: 'Google Analytics', description: 'Track ad campaign performance and conversions.', url: 'https://analytics.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'campaign tracking', pricing: 'Free' },
            { name: 'Triple Whale', description: 'E-commerce analytics platform.', url: 'https://www.triplewhale.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=triplewhale.com', dataAiHint: 'ecommerce analytics', pricing: 'Paid' },
            { name: 'Hyros', description: 'Ad tracking and attribution software.', url: 'https://hyros.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=hyros.com', dataAiHint: 'ad tracking', pricing: 'Paid' },
            { name: 'Voluum', description: 'Ad tracker for performance marketers.', url: 'https://voluum.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=voluum.com', dataAiHint: 'performance marketing', pricing: 'Paid' },
        ]
    },
];
