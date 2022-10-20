import React from 'react';
import Menus from '../index';
import renderer from 'react-test-renderer';

test('renders Menus', () => {
    const MenusDom = renderer.create(<Menus />).toJSON();
    expect(MenusDom).toMatchSnapshot();
});
