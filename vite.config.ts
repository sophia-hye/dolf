import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// Served from the root domain (Vercel), so base is '/'.
export default defineConfig({
  base: '/',
  plugins: [react(), tsconfigPaths()],
});
