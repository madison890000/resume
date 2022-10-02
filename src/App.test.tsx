import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

xit('renders App', () => {
    const AppDom = renderer.create(<App />)
        .toJSON();
    expect(AppDom)
        .toMatchSnapshot();
});
