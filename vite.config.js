import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ui: resolve(__dirname, 'src/features/ui'),
      core: resolve(__dirname, 'src/core'),
      features: resolve(__dirname, 'src/features'),
    },
  },
});
