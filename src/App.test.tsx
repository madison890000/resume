import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import Capability from './components/Capability';

jest.mock('./components/Capability'); // Capability is now a mock constructor

beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    // @ts-ignore
    Capability.mockClear();
});
it('renders App', () => {
    const AppDom = renderer.create(<App />)
        .toJSON();
    expect(AppDom)
        .toMatchSnapshot();
});
