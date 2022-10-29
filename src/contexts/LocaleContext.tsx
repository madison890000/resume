import React, { Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';
import { LANGUAGE_OPTIONS, LocalesKey } from '../i18n/languages';

interface ILocaleContext {
    locale: LocalesKey;
    updateLocale: Dispatch<SetStateAction<LocalesKey>>;
    languages: { label: string; value: LocalesKey }[];
}

export const LocaleContext = React.createContext({} as ILocaleContext);

export const LocaleContextContainer = ({ children }: PropsWithChildren) => {
    const [locale, updateLocale] = useState<LocalesKey>('en-US');
    return (
        <LocaleContext.Provider
            value={{
                locale,
                updateLocale,
                languages: LANGUAGE_OPTIONS
            }}
        >
            {children}
        </LocaleContext.Provider>
    );
};

export default LocaleContext;
