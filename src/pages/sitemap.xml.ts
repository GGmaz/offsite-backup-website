import { absolute, localePath } from '../config/site';
export function GET() {
  const sr = absolute(localePath('sr'));
  const en = absolute(localePath('en'));
  const alternatives = `<xhtml:link rel="alternate" hreflang="sr-Latn" href="${sr}"/><xhtml:link rel="alternate" hreflang="en" href="${en}"/><xhtml:link rel="alternate" hreflang="x-default" href="${sr}"/>`;
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml"><url><loc>${sr}</loc>${alternatives}</url><url><loc>${en}</loc>${alternatives}</url></urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
