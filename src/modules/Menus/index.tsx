import * as React from 'react';
import { useContext } from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import LocaleContext from '../../contexts/LocaleContext';
import SelectLanguage from '../SelectLanguage';

const Menus = () => {
    const { locale, updateLocale, languages } = useContext(LocaleContext);
    return (
        <MenuList
            style={{
                display: 'flex',
                flexWrap: 'wrap'
            }}
        >
            <MenuItem>
                <SelectLanguage value={locale} onChange={updateLocale} options={languages} />
            </MenuItem>
            <MenuItem disabled>Download PDF</MenuItem>
            <MenuItem disabled>Import From LinkedIn</MenuItem>
            <MenuItem disabled>Themes</MenuItem>
        </MenuList>
    )
}
export default Menus
