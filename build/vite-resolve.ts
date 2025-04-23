// build/vite-resolve.ts
import { fileURLToPath, URL } from 'url';

export default {
  alias: {
    // поднимаемся на одну папку вверх от build/
    '@': fileURLToPath(new URL('../src', import.meta.url)),
    '@store': fileURLToPath(new URL('../src/store', import.meta.url))
  },
  extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
};
