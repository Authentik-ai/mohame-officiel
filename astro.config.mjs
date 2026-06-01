import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://mohame-ci.vercel.app',
    integrations: [sitemap()],
    compressHTML: true,
    build: {
        assets: 'assets'
    },
    vite: {
        build: {
            cssCodeSplit: true,
            rollupOptions: {
                output: {
                    manualChunks: undefined,
                }
            }
        },
        ssr: {
            noExternal: []
        }
    }
});