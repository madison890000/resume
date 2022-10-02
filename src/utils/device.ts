const isMobilePhone = () => window.innerWidth < 500
const isA4 = () => window.innerWidth > 500 && window.innerWidth < 1150


export enum ScreenDevice {
    Mobile,
    A4,
    PC
}

export const getScreenDevice = () => {
    if (isMobilePhone()) {
        return ScreenDevice.Mobile
    } else if (isA4()) {
        return ScreenDevice.A4
    }
    return ScreenDevice.PC
}

const PAGE_PADDING = 12;

export const getPageContentWidth = () => {
    return Math.min(window.outerWidth, window.innerWidth) - PAGE_PADDING * 2
}
