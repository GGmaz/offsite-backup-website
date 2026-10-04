import { absolute, path } from '../config/site';
export function GET() {
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${absolute(path('sitemap.xml'))}\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
