import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IntlProvider } from 'react-intl';
import { generatedTranslations } from './i18n/translations';
import { APP_LOCALES } from './i18n/languages';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


const I18nProvider = () => {
    const [locale, setLocale] = useState(navigator.language ?? 'en-US');
    const languages = Object.entries(APP_LOCALES)
        .map(([lKey, lValue]) => {
            return {
                label: lValue,
                value: lKey,
            }
        })
    return (
        <IntlProvider
            locale={locale}
            key={locale}
            messages={generatedTranslations()[locale]}
        >
            <select
                onChange={(e) => {
                    setLocale(e?.target?.value)
                }}
                value={locale}
                className="change-language">
                {languages?.map((l) => (
                    <option key={l.value} value={l.value}>{l?.label}</option>
                ))}
            </select>
            <App />
        </IntlProvider>
    )
}
root.render(
    <React.StrictMode>
        <I18nProvider />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
