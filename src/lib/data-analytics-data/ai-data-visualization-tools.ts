
import type { Tool } from '@/lib/types';

export const aiDataVisualizationTools: Tool[] = [
    { name: 'DALL·E 3 for Charts', description: 'Generate charts and graphs from text descriptions.', url: 'https://openai.com/dall-e-3', image: 'https://picsum.photos/seed/dalle-charts/600/400', dataAiHint: 'ai chart', pricing: 'Freemium' },
    { name: 'Google Charts', description: 'Free, rich gallery of interactive charts.', url: 'https://developers.google.com/chart', image: 'https://picsum.photos/seed/google-charts/600/400', dataAiHint: 'interactive charts', pricing: 'Free' },
    { name: 'Flourish', description: 'Create stunning data visualizations and stories.', url: 'https://flourish.studio/', image: 'https://picsum.photos/seed/flourish/600/400', dataAiHint: 'data storytelling', pricing: 'Freemium' },
    { name: 'Datawrapper', description: 'Create charts, maps, and tables.', url: 'https://www.datawrapper.de/', image: 'https://picsum.photos/seed/datawrapper/600/400', dataAiHint: 'chart maker', pricing: 'Freemium' },
    { name: 'Infogram', description: 'Create engaging infographics and reports.', url: 'https://infogram.com/', image: 'https://picsum.photos/seed/infogram-viz/600/400', dataAiHint: 'infographics', pricing: 'Freemium' },
    { name: 'Tableau', description: 'Leading data visualization software.', url: 'https://www.tableau.com/', image: 'https://picsum.photos/seed/tableau-viz/600/400', dataAiHint: 'bi tool', pricing: 'Paid' },
    { name: 'Power BI', description: 'Microsoft\'s data visualization and business intelligence tool.', url: 'https://powerbi.microsoft.com/', image: 'https://picsum.photos/seed/powerbi-viz/600/400', dataAiHint: 'microsoft bi', pricing: 'Freemium' },
    { name: 'D3.js', description: 'A JavaScript library for manipulating documents based on data.', url: 'https://d3js.org/', image: 'https://picsum.photos/seed/d3js-viz/600/400', dataAiHint: 'javascript charts', pricing: 'Free' },
    { name: 'Highcharts', description: 'A JavaScript charting library.', url: 'https://www.highcharts.com/', image: 'https://picsum.photos/seed/highcharts-viz/600/400', dataAiHint: 'charting library', pricing: 'Freemium' },
    { name: 'Plotly', description: 'Interactive data visualization libraries for Python, R, and JavaScript.', url: 'https://plotly.com/', image: 'https://picsum.photos/seed/plotly-viz/600/400', dataAiHint: 'python data viz', pricing: 'Freemium' },
];
