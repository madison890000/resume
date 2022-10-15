import React from 'react';
import SelectLanguage from '../index';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { LANGUAGE_OPTIONS } from '../../../i18n/languages';

test('renders SelectLanguage', () => {
    const SelectLanguageDom = renderer.create(<SelectLanguage options={LANGUAGE_OPTIONS} />)
        .toJSON();
    expect(SelectLanguageDom)
        .toMatchSnapshot();
});


test('open SelectLanguage', async () => {
    render(<SelectLanguage options={LANGUAGE_OPTIONS} />);
    const selectBtn = screen.getByTestId('select-language-btn');
    const notShowMenuPops = await screen.queryByTestId('select-language-menu-pop');
    expect(notShowMenuPops)
        .toEqual(null);
    fireEvent.click(selectBtn)
    const menuPops = screen.getByTestId('select-language-menu-pop');
    expect(menuPops)
        .toBeVisible();
})
test('SelectLanguage contain English 中文 中文繁体 中文简体', async () => {
    render(<SelectLanguage options={LANGUAGE_OPTIONS} />);
    const selectBtn = screen.getByTestId('select-language-btn');
    fireEvent.click(selectBtn)
    const menuPops = screen.getByTestId('select-language-menu-pop');
    expect(menuPops)
        .toBeVisible();
    expect(menuPops.innerHTML)
        .toContain('中文简体');
    expect(menuPops.innerHTML)
        .toContain('中文繁体');
    expect(menuPops.innerHTML)
        .toContain('中文');
    expect(menuPops.innerHTML)
        .toContain('English');
})
test('open SelectLanguage snapshot', async () => {
    render(<SelectLanguage options={LANGUAGE_OPTIONS} />);
    const selectBtn = screen.getByTestId('select-language-btn');
    fireEvent.click(selectBtn)
    const menuPops = screen.getByTestId('select-language-menu-pop');
    expect(menuPops)
        .toBeVisible();
    expect(document.body)
        .toMatchSnapshot();
})
test('close SelectLanguage snapshot', async () => {
    render(<SelectLanguage options={LANGUAGE_OPTIONS} />);
    const selectBtn = screen.getByTestId('select-language-btn');
    fireEvent.click(selectBtn)
    const menuPops = screen.queryByTestId('select-language-menu-pop');
    expect(menuPops)
        .toBeVisible();
    fireEvent.click(selectBtn);
    await waitFor(() => {
        expect(screen.queryByTestId('select-language-menu-pop'))
            .toBe(null);
        expect(document.body)
            .toMatchSnapshot();
    })

})
