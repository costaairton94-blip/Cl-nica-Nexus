/**
 * OptimizedImage — Componente de imagem otimizado para performance.
 *
 * Funcionalidades:
 * - lazy loading nativo (loading="lazy") para imagens abaixo da dobra
 * - eager loading para imagens acima da dobra (LCP)
 * - width e height obrigatórios para evitar CLS (Cumulative Layout Shift)
 * - decoding="async" para não bloquear a thread principal
 * - fetchpriority="high" para imagens LCP
 * - srcset responsivo quando fornecido
 * - alt text obrigatório para acessibilidade
 */

import React from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  /** true = acima da dobra (LCP candidate) — usa loading="eager" + fetchpriority="high" */
  priority?: boolean;
  /** srcset para imagens responsivas, ex: "img-400.jpg 400w, img-800.jpg 800w" */
  srcSet?: string;
  /** sizes para srcset, ex: "(max-width: 768px) 100vw, 50vw" */
  sizes?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  role?: string;
  "aria-label"?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  srcSet,
  sizes,
  style,
  onClick,
  role,
  "aria-label": ariaLabel,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      // @ts-ignore — fetchpriority é suportado em browsers modernos
      fetchpriority={priority ? "high" : "auto"}
      srcSet={srcSet}
      sizes={sizes}
      className={className}
      style={style}
      onClick={onClick}
      role={role}
      aria-label={ariaLabel}
    />
  );
};

export default OptimizedImage;
