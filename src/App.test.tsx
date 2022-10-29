import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import Capability from './components/Capability';

jest.mock('./components/Capability'); // Capability is now a mock constructor
let windowSpy: any;

beforeEach(() => {
    windowSpy = jest.spyOn(window, 'window', 'get');
    // @ts-ignore
    Capability.mockClear();
});

afterEach(() => {
    windowSpy.mockRestore();
});

it('renders App', () => {
    windowSpy.mockImplementation(() => ({
        innerWidth: 1024,
        outerWidth: 1024
    }));
    const AppDom = renderer.create(<App />).toJSON();
    expect(AppDom).toMatchSnapshot();
});
