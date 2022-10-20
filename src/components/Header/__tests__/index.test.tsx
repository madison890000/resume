import React from 'react';
import Header from '../index';
import renderer from 'react-test-renderer';

test('renders Header', () => {
    const HeaderDom = renderer.create(<Header firstName="test firstName" lastName="test lastName" email="test@gmail.com" cellphone="101101101" />).toJSON();
    expect(HeaderDom).toMatchSnapshot();
});
