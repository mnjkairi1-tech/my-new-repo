export const runtime = 'edge';
import { NextResponse } from 'next/server';
import { allToolsServer } from '@/lib/all-tools-server';
import type { Tool } from '@/lib/types';

// The server-side tool type, without the JSX icon
type ServerTool = Omit<Tool, 'icon'>;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const searchTerm = searchParams.get('q')?.toLowerCase() || '';
  const priceFilter = searchParams.get('price') || 'All';

  let tools: (ServerTool & { category?: string })[] = allToolsServer;

  // Apply search filter
  if (searchTerm) {
    tools = tools.filter(tool =>
      tool.name.toLowerCase().includes(searchTerm) ||
      tool.description.toLowerCase().includes(searchTerm) ||
      tool.category?.toLowerCase().includes(searchTerm)
    );
  }

  // Apply price filter
  if (priceFilter === 'Free') {
    tools = tools.filter(tool => tool.pricing === 'Free' || tool.pricing === 'Freemium');
  }

  return NextResponse.json(tools);
}
