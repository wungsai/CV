import React from "react";

export const BRAND_ICON_SOURCES = {
  Claude: "/icons/brands/claude.svg",
  Gemini: "/icons/brands/gemini.svg",
  Antigravity: "/icons/brands/google-antigravity.svg",
  Codex: "/icons/brands/codex.svg",
  ChatGPT: "/icons/brands/openai-chatgpt.svg",
  GitHubCopilot: "/icons/brands/github-copilot.svg",
  Nextjs: "/icons/brands/nextdotjs.svg",
  Nuxt: "/icons/brands/nuxt.svg",
  Flutter: "/icons/brands/flutter.svg",
  TypeScript: "/icons/brands/typescript.svg",
  AdonisJS: "/icons/brands/adonisjs.svg",
  Rust: "/icons/brands/rust.svg",
  Golang: "/icons/brands/go.svg",
  JavaSpring: "/icons/brands/spring.svg",
  Express: "/icons/brands/express.svg",
  PHP: "/icons/brands/php.svg",
  PostgreSQL: "/icons/brands/postgresql.svg",
  MariaDB: "/icons/brands/mariadb.svg",
  Oracle: "/icons/brands/oracle.svg",
  Firebase: "/icons/brands/firebase.svg",
  Git: "/icons/brands/git.svg",
  GitHub: "/icons/brands/github.svg",
  GitLab: "/icons/brands/gitlab.svg",
  LinkedIn: "/icons/brands/linkedin.svg",
  Photoshop: "/icons/brands/photoshop.svg",
  Excel: "/icons/brands/microsoft-excel.svg",
  Network: "/icons/brands/network.svg",
} as const;

export type BrandIconKey = keyof typeof BRAND_ICON_SOURCES;

type IconProps = {
  brand: string;
  label: string;
  className?: string;
};


// const basePath = process.env.__NEXT_ROUTER_BASEPATH || '';
export const BrandIconImage = ({ brand, label, className }: IconProps) => {
  const basePath = process.env.__NEXT_ROUTER_BASEPATH || '';
  const src = BRAND_ICON_SOURCES[brand as BrandIconKey];

  if (!src) {
    return <FallbackIcon label={label} className={className} />;
  }

  return <img src={`${basePath}/CV/${src}`} alt={label} className={className} loading="lazy" />;
};

export const MaskedBrandIcon = ({ brand, label, className }: IconProps) => {
  const src = BRAND_ICON_SOURCES[brand as BrandIconKey];

  if (!src) {
    return <FallbackIcon label={label} className={className} />;
  }

  return (
    <span
      aria-label={label}
      role="img"
      className={className}
      style={{
        backgroundColor: "currentColor",
        display: "inline-block",
        mask: `url(${src}) center / contain no-repeat`,
        WebkitMask: `url(${src}) center / contain no-repeat`,
      }}
    />
  );
};

const FallbackIcon = ({ label, className }: { label: string; className?: string }) => (
  <span
    aria-label={label}
    role="img"
    className={`inline-flex items-center justify-center rounded-full border border-current text-[10px] font-bold ${className ?? ""}`}
  >
    {label.slice(0, 2).toUpperCase()}
  </span>
);