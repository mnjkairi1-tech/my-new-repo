
import type { Tool } from '@/lib/types';

export const aiForecastingTrendAnalysisTools: Tool[] = [
    { name: 'Prophet', description: 'A forecasting procedure for time series data from Facebook.', url: 'https://facebook.github.io/prophet/', image: 'https://www.google.com/s2/favicons?sz=128&domain=facebook.github.io', dataAiHint: 'time series', pricing: 'Free' },
    { name: 'ARIMA models (in R/Python)', description: 'Statistical models for analyzing and forecasting time series data.', url: 'https://www.statsmodels.org/stable/tsa.html', image: 'https://www.google.com/s2/favicons?sz=128&domain=statsmodels.org', dataAiHint: 'statistical models', pricing: 'Free' },
    { name: 'Exploding Topics', description: 'Discover rapidly growing trends.', url: 'https://explodingtopics.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=explodingtopics.com', dataAiHint: 'trend spotting', pricing: 'Freemium' },
    { name: 'Google Trends', description: 'Explore what the world is searching.', url: 'https://trends.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'search trends', pricing: 'Free' },
    { name: 'Tableau Forecasting', description: 'Built-in forecasting capabilities.', url: 'https://www.tableau.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tableau.com', dataAiHint: 'data forecasting', pricing: 'Paid' },
    { name: 'RapidMiner', description: 'Data science platform with forecasting models.', url: 'https://rapidminer.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=rapidminer.com', dataAiHint: 'data science', pricing: 'Paid' },
    { name: 'H2O.ai', description: 'AI Cloud with tools for time series forecasting.', url: 'https://h2o.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=h2o.ai', dataAiHint: 'time series ai', pricing: 'Freemium' },
    { name: 'DataRobot', description: 'Automated time series forecasting.', url: 'https://www.datarobot.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=datarobot.com', dataAiHint: 'automated forecasting', pricing: 'Paid' },
    { name: 'GMDH Shell', description: 'Time series analysis and forecasting software.', url: 'https://gmdhshell.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=gmdhshell.com', dataAiHint: 'forecasting software', pricing: 'Freemium' },
    { name: 'TrendSpider', description: 'Smart technical analysis for financial markets.', url: 'https://trendspider.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=trendspider.com', dataAiHint: 'market analysis', pricing: 'Paid' },
];
