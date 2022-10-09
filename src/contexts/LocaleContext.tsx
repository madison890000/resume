import React, { Dispatch, PropsWithChildren, SetStateAction, useMemo, useState } from 'react';
import { APP_LOCALES } from '../i18n/languages';

interface ILocaleContext {
    locale: string;
    updateLocale: Dispatch<SetStateAction<string>>;
    languages: { label: string; value: string }[];
}

export const LocaleContext = React.createContext({} as ILocaleContext);


export const LocaleContextContainer = ({ children }: PropsWithChildren) => {
    const [locale, updateLocale] = useState<string>('en-US');
    const languages = useMemo(() => {
        return Object.entries(APP_LOCALES)
            .map(([lKey, lValue]) => {
                return {
                    label: lValue,
                    value: lKey,
                }
            })
    }, []);
    return (
        <LocaleContext.Provider
            value={{
                locale,
                updateLocale,
                languages,
            }}
        >
            {children}
        </LocaleContext.Provider>
    )
}

export default LocaleContext
