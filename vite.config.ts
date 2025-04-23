import { defineConfig } from 'vite';

import plugins from './build/vite-plugins';
import resolve from './build/vite-resolve';
import server from './build/vite-server';

// https://vite.dev/config/
export default defineConfig({
  plugins,
  resolve,
  server
});
