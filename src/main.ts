import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import vuetify from './plugins/vuetify';
import '@/styles/style.scss';

const app = createApp(App);

app.use(createPinia()).use(vuetify).mount('#app');
