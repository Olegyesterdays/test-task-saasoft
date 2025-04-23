import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import tsconfigPaths from 'vite-tsconfig-paths';
import vuetify from 'vite-plugin-vuetify';

export default [
  vue({
    template: { transformAssetUrls: true }
  }),
  vuetify({ autoImport: true }),
  vueDevTools(),
  tsconfigPaths()
];
