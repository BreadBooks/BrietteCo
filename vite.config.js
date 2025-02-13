// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/', // Change this if needed (see explanation below)
    build: {
        outDir: 'dist', // Ensure the build goes into `dist/`
    },
});
