import React from 'react';
import { getMonthCountFromStartAndEnd } from '../../utils/date';
import MonthRect from './MonthRect';
import { getScreenDevice, ScreenDevice } from '../../utils/device';


const BASE_RECT_WIDTH = 8;

export const getBaseRectFull = (device: ScreenDevice) => {
    switch (device) {
        case ScreenDevice.A4:
            return BASE_RECT_WIDTH - 2
        case ScreenDevice.Mobile:
            return BASE_RECT_WIDTH - 4
        case ScreenDevice.PC:
            return BASE_RECT_WIDTH
        default:
            return BASE_RECT_WIDTH
    }
}
const TimeLineItem = ({ start, end, periodColor }: { start: Date; end?: Date; periodColor: string }) => {
    const rectGap = 1;
    const totalRects = getMonthCountFromStartAndEnd(start, end ?? new Date()) + 1;
    const rectFullWidth = getBaseRectFull(getScreenDevice());
    const rectWidth = rectFullWidth - rectGap;
    let rectArray = new Array(totalRects).fill(0)
        ?.map((_, index) => ({
            index: index,
            color: periodColor,
        }));
    return (
        <svg width={rectFullWidth * totalRects} height="20"
             style={{ backgroundColor: getScreenDevice() !== ScreenDevice.PC ? '' : 'E0E0E0' }}>
            <g>
                {rectArray?.map((e, index) => (
                    <MonthRect
                        key={index}
                        width={rectWidth}
                        gap={rectGap}
                        color={e?.color}
                        index={e?.index}
                    />
                ))}
            </g>
        </svg>
    )
}

export default TimeLineItem
