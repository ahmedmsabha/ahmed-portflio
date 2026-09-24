import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type UserConfig } from "vite";
import { siteUrl } from "./src/data/site.ts";

const root = path.dirname(fileURLToPath(import.meta.url));

const config: UserConfig & { ssgOptions: { dirStyle: "nested" } } = {
  ssgOptions: {
    dirStyle: "nested",
  },
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "site-seo-files",
      transformIndexHtml(html) {
        return html.replaceAll("%SITE_URL%", siteUrl);
      },
      generateBundle() {
        this.emitFile({
          type: "asset",
          fileName: "robots.txt",
          source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
        });
        const urls = ["/", "/ar"];
        const alternates = urls
          .map(
            (path) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/"/>
    <xhtml:link rel="alternate" hreflang="ar" href="${siteUrl}/ar"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/"/>
  </url>`,
          )
          .join("\n");
        this.emitFile({
          type: "asset",
          fileName: "sitemap.xml",
          source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${alternates}
</urlset>
`,
        });
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(root, "./src"),
    },
  },
};

export default defineConfig(config);
