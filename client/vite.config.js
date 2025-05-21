import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    proxy: {
      '/generate': 'http://localhost:5000'
    },
    allowedHosts: 'all'
  }
});
