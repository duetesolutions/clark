import { useI18n } from 'vue-i18n';
const useLang = () => {
    const { locale } = useI18n();
    const lang = locale;
    const setLang = (l) => {
        locale.value = l;
    };
    return { lang, setLang };
};
export default useLang;
