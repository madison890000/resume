import { MAX_A4_WIDTH, MAX_PHONE_WIDTH, PAGE_PADDING } from '../constants/widths';

const isMobilePhone = () => window.innerWidth < MAX_PHONE_WIDTH;
const isA4 = () => window.innerWidth > MAX_PHONE_WIDTH && window.innerWidth < MAX_A4_WIDTH;

export enum ScreenDevice {
    Mobile,
    A4,
    PC
}

export const getScreenDevice = () => {
    if (isMobilePhone()) {
        return ScreenDevice.Mobile;
    } else if (isA4()) {
        return ScreenDevice.A4;
    }
    return ScreenDevice.PC;
};

export const getPageContentWidth = () => {
    return Math.min(window?.outerWidth, window?.innerWidth) - PAGE_PADDING * 2;
};
