import React, { Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';
import { LANGUAGE_OPTIONS } from '../i18n/languages';

interface ILocaleContext {
    locale: string;
    updateLocale: Dispatch<SetStateAction<string>>;
    languages: { label: string; value: string }[];
}

export const LocaleContext = React.createContext({} as ILocaleContext);

export const LocaleContextContainer = ({ children }: PropsWithChildren) => {
    const [locale, updateLocale] = useState<string>('en-US');
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
