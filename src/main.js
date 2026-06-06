import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import { MotionPlugin } from '@vueuse/motion';
import App from './App.vue';
import './assets/main.css';
import pt from './locales/pt-br.json';
import en from './locales/en.json';
const i18n = createI18n({
    legacy: false,
    locale: 'pt',
    fallbackLocale: 'en',
    messages: { pt, en },
});
createApp(App).use(i18n).use(MotionPlugin).mount('#app');
