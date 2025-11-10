import type { NextRequest } from "next/server";

export const dynamic = "force-static";

export function GET(_req: NextRequest) {
  const body = `
User-agent: *
Allow: /

Sitemap: https://rkmattorneys.co.za/sitemap.xml
  `.trim();

  return new Response(body, {
    headers: { "Content-Type": "text/plain" },
  });
}
