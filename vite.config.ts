import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

const repoName = 'dolf';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  return {
    base: isProduction ? `/${repoName}/` : '/', // 배포 경로
    plugins: [react(), tsconfigPaths()],
  };
});
