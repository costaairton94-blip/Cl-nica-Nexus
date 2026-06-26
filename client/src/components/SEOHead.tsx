/**
 * SEOHead.tsx
 * Componente reutilizável para injetar meta tags SEO em cada página.
 * Usa react-helmet-async para gerenciar <head> de forma segura em SPA.
 *
 * Uso:
 *   <SEOHead
 *     title="Título da Página | Nexus Espaço Saúde"
 *     description="Descrição única da página..."
 *     canonical="https://nexusespacosaude.com.br/slug"
 *     ogImage="https://..."  // opcional
 *   />
 */

import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  structuredData?: object | object[];
}

const DEFAULT_IMAGE =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663441484870/oPxUKNpLAdSSGXes.jpeg";

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage = DEFAULT_IMAGE,
  ogType = "website",
  noIndex = false,
  structuredData,
}: SEOHeadProps) {
  const robotsContent = noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

  const jsonLdArray = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];

  return (
    <Helmet>
      {/* ── Primary ── */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonical} />

      {/* ── Open Graph ── */}
      <meta property="og:type"        content={ogType} />
      <meta property="og:site_name"   content="Nexus Espaço Saúde" />
      <meta property="og:title"       content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url"         content={canonical} />
      <meta property="og:image"       content={ogImage} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale"      content="pt_BR" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={ogImage} />

      {/* ── Structured Data ── */}
      {jsonLdArray.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
