export default {
    site: "https://mohame-ci.vercel.app",
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
