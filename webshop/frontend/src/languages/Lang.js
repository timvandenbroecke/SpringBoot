import { useTranslation } from 'react-i18next';

export function LangComponent()
{
    const [t, i18n] = useTranslation('common');
    return <div>
        <h1>{t('HEADER_WATCH', {framework:'React'})}</h1>
        <button onClick={() => i18n.changeLanguage('en')}>de</button>
        <button onClick={() => i18n.changeLanguage('nl')}>nl</button>
        <button onClick={() => i18n.changeLanguage('fr')}>fr</button>
        <button onClick={() => i18n.changeLanguage('ch')}>ch</button>
    </div>
}
