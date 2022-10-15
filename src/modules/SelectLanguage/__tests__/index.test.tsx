import React from 'react';
import SelectLanguage from '../index';
import renderer from 'react-test-renderer';
import { LANGUAGE_OPTIONS } from '../../../i18n/languages';

test('renders SelectLanguage', () => {
    const SelectLanguageDom = renderer.create(<SelectLanguage options={LANGUAGE_OPTIONS} />)
        .toJSON();
    expect(SelectLanguageDom)
        .toMatchSnapshot();
});

