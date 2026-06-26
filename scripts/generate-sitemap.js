/**
 * generate-sitemap.js
 * Gera automaticamente o sitemap.xml com todas as rotas públicas do site.
 * Execute antes do build ou integre no script de build do package.json.
 *
 * Uso: node scripts/generate-sitemap.js
 */

import { writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const BASE_URL = "https://nexusespacosaude.com.br";
const TODAY = new Date().toISOString().split("T")[0];

// ─── LISTA DE ROTAS PÚBLICAS ────────────────────────────────────────────────
// Adicione novas rotas aqui sempre que criar uma nova página.
const routes = [
  // Páginas principais
  { path: "/",                                  changefreq: "weekly",  priority: "1.0" },
  { path: "/espaco",                            changefreq: "monthly", priority: "0.9" },
  { path: "/equipe",                            changefreq: "monthly", priority: "0.8" },
  { path: "/servicos",                          changefreq: "monthly", priority: "0.9" },
  { path: "/coworking",                         changefreq: "monthly", priority: "0.9" },
  { path: "/contato",                           changefreq: "monthly", priority: "0.8" },
  // Profissionais
  { path: "/dr-airton",                         changefreq: "monthly", priority: "0.7" },
  { path: "/mariana",                           changefreq: "monthly", priority: "0.7" },
  // Páginas SEO Premium
  { path: "/coworking-medico",                  changefreq: "monthly", priority: "1.0" },
  { path: "/consultorio-por-hora",              changefreq: "monthly", priority: "1.0" },
  { path: "/aluguel-consultorio-sao-paulo",     changefreq: "monthly", priority: "1.0" },
  { path: "/coworking-vila-clementino",         changefreq: "monthly", priority: "1.0" },
  { path: "/coworking-vila-mariana",            changefreq: "monthly", priority: "1.0" },
];

// ─── GERAÇÃO DO XML ─────────────────────────────────────────────────────────
const urlEntries = routes
  .map(
    ({ path, changefreq, priority }) => `
  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join("");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlEntries}
</urlset>
`;

// ─── ESCRITA DO ARQUIVO ──────────────────────────────────────────────────────
const outputPath = resolve(__dirname, "../client/public/sitemap.xml");
mkdirSync(resolve(__dirname, "../client/public"), { recursive: true });
writeFileSync(outputPath, sitemap, "utf-8");

console.log(`✅ sitemap.xml gerado com ${routes.length} URLs em: ${outputPath}`);
console.log(`📅 lastmod: ${TODAY}`);
routes.forEach((r) => console.log(`   ${BASE_URL}${r.path}`));
