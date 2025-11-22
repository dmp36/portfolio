import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        minify: false, // Disable minification to see if it helps
        sourcemap: true,
    }
});
