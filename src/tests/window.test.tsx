import React from 'react';
import ResizeObserver from '../__mocks__/ResizeObserver';
import { act } from '@testing-library/react';

function sleep(time: number) {
    return new Promise(resolve => setTimeout(() => resolve(''), time));
}

beforeEach(() => {
    windowSpy = jest.spyOn(window, 'window', 'get');
});
afterEach(() => {
    windowSpy.mockRestore();
});
it('test ResizeObserver', async () => {
    const resizeObserverCallback = jest.fn();
    const resizeObserver = new ResizeObserver(resizeObserverCallback);
    expect(typeof resizeObserver.observe).toBe('function');
    expect(typeof resizeObserver.disconnect).toBe('function');
    expect(typeof resizeObserver.unobserve).toBe('function');
    await act(() => {
        sleep(1000);
    });
    expect(resizeObserverCallback).toBeCalled();
});

let windowSpy: any;

test('returns correct window with innerWidth and outerWidth', () => {
    windowSpy.mockImplementation(() => ({
        innerWidth: 1800,
        outerWidth: 1800
    }));
    expect(window.innerWidth).toEqual(1800);
    expect(window.outerWidth).toEqual(1800);
});
