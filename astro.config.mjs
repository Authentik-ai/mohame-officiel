import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://mohame-ci.vercel.app',
    integrations: [sitemap()],
    compressHTML: true,
    build: {
        assets: 'assets'
    }
    // Suppression de la configuration manuelle des chunks de Vite qui causait l'erreur de build
});
