export default {
    site: "https://www.mohame-officiel.ci",
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
    },
    compressHTML: true,
    integrations: [],
    build: {
        assets: 'assets'
    }
};
