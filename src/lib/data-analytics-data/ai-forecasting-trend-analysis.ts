
import type { Tool } from '@/lib/types';

export const aiForecastingTrendAnalysisTools: Tool[] = [
    { name: 'Prophet', description: 'A forecasting procedure for time series data from Facebook.', url: 'https://facebook.github.io/prophet/', image: 'https://picsum.photos/seed/prophet-fb/600/400', dataAiHint: 'time series', pricing: 'Free' },
    { name: 'ARIMA models (in R/Python)', description: 'Statistical models for analyzing and forecasting time series data.', url: 'https://www.statsmodels.org/stable/tsa.html', image: 'https://picsum.photos/seed/arima/600/400', dataAiHint: 'statistical models', pricing: 'Free' },
    { name: 'Exploding Topics', description: 'Discover rapidly growing trends.', url: 'https://explodingtopics.com/', image: 'https://picsum.photos/seed/exploding-topics/600/400', dataAiHint: 'trend spotting', pricing: 'Freemium' },
    { name: 'Google Trends', description: 'Explore what the world is searching.', url: 'https://trends.google.com/', image: 'https://picsum.photos/seed/google-trends/600/400', dataAiHint: 'search trends', pricing: 'Free' },
    { name: 'Tableau Forecasting', description: 'Built-in forecasting capabilities.', url: 'https://www.tableau.com/', image: 'https://picsum.photos/seed/tableau-forecast/600/400', dataAiHint: 'data forecasting', pricing: 'Paid' },
    { name: 'RapidMiner', description: 'Data science platform with forecasting models.', url: 'https://rapidminer.com/', image: 'https://picsum.photos/seed/rapidminer-forecast/600/400', dataAiHint: 'data science', pricing: 'Paid' },
    { name: 'H2O.ai', description: 'AI Cloud with tools for time series forecasting.', url: 'https://h2o.ai/', image: 'https://picsum.photos/seed/h2oai-forecast/600/400', dataAiHint: 'time series ai', pricing: 'Freemium' },
    { name: 'DataRobot', description: 'Automated time series forecasting.', url: 'https://www.datarobot.com/', image: 'https://picsum.photos/seed/datarobot-forecast/600/400', dataAiHint: 'automated forecasting', pricing: 'Paid' },
    { name: 'GMDH Shell', description: 'Time series analysis and forecasting software.', url: 'https://gmdhshell.com/', image: 'https://picsum.photos/seed/gmdh-shell/600/400', dataAiHint: 'forecasting software', pricing: 'Freemium' },
    { name: 'TrendSpider', description: 'Smart technical analysis for financial markets.', url: 'https://trendspider.com/', image: 'https://picsum.photos/seed/trendspider-forecast/600/400', dataAiHint: 'market analysis', pricing: 'Paid' },
];
