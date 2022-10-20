import { getPageContentWidth, getScreenDevice, ScreenDevice } from '../device';

let windowSpy: any;

beforeEach(() => {
    windowSpy = jest.spyOn(window, 'window', 'get');
});

afterEach(() => {
    windowSpy.mockRestore();
});
describe('utils -----> device ', () => {
    test('getScreenDevice: return ScreenDevice.A4', () => {
        windowSpy.mockImplementation(() => ({
            innerWidth: 1123
        }));
        expect(getScreenDevice()).toBe(ScreenDevice.A4);
    });
    test('getScreenDevice: return ScreenDevice.Mobile', () => {
        windowSpy.mockImplementation(() => ({
            innerWidth: 375
        }));
        expect(getScreenDevice()).toBe(ScreenDevice.Mobile);
    });
    test('getScreenDevice: return ScreenDevice.PC', () => {
        windowSpy.mockImplementation(() => ({
            innerWidth: 1800
        }));
        expect(getScreenDevice()).toBe(ScreenDevice.PC);
    });
});

describe('getPageContentWidth ', () => {
    test('getPageContentWidth correctly', () => {
        windowSpy.mockImplementation(() => ({
            innerWidth: 1800,
            outerWidth: 1800
        }));
        expect(getPageContentWidth()).toEqual(1800 - 24);
    });
});
