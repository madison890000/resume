import enUS from './locales/en-US.json';
import enTE from './locales/en-TE.json';
import zhCN from './locales/zh-CN.json';
import zhTW from './locales/zh-TW.json';

export type LocalesKey = 'en-US' | 'zh-CN' | 'zh-TW' | 'en-TE';
export const locales: {
    [key in LocalesKey]: Record<string, string>;
} = {
    'en-US': enUS,
    'zh-CN': zhCN,
    'zh-TW': zhTW,
    'en-TE': enTE
};

export const APP_LOCALES: {
    [key in LocalesKey]: string;
} = {
    'en-US': 'English',
    'zh-CN': '中文简体',
    'zh-TW': '中文繁体',
    'en-TE': 'Māori'
};

export const LANGUAGE_OPTIONS = Object.entries<string>(APP_LOCALES).map(([lKey, lValue]) => {
    return {
        label: lValue,
        value: lKey
    } as { label: string; value: LocalesKey };
});
