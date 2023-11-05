import { defineConfig } from "vite";

export default defineConfig({
    build: {
        outDir: "assets",
        emptyOutDir: false,
        minify: false,
        rollupOptions: {
            input: "main.css",
            output: {
                dir: "assets",
                assetFileNames: "style.css"
            }
        }
    }
})