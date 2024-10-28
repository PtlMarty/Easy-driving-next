import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Configure le prefixe des assets pour le déploiement sur GitHub Pages
  assetPrefix: isProd ? "/Easy-driving-next/" : "",
  images: {
    // Désactive l'optimisation des images pour éviter les problèmes sur GitHub Pages
    unoptimized: true,
  },
  // Autres options de configuration ici
};

export default nextConfig;
