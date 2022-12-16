import React, { useMemo } from 'react';
import { getMonthCountFromStartAndEnd } from '../../utils/date';
import MonthRect from './MonthRect';
import { getScreenDevice, ScreenDevice } from '../../utils/device';
import { BASE_MONTH_SVG_HEIGHT, BASE_RECT_WIDTH, RECT_GAP } from '../../constants/widths';

export const getBaseRectFull = (device: ScreenDevice) => {
    switch (device) {
        case ScreenDevice.A4:
            return BASE_RECT_WIDTH - 2;
        case ScreenDevice.Mobile:
            return BASE_RECT_WIDTH - 4;
        case ScreenDevice.PC:
            return BASE_RECT_WIDTH;
        default:
            return BASE_RECT_WIDTH;
    }
};

const TimeLineItem = ({ start, end, periodColor }: { start: Date; end?: Date; periodColor: string }) => {
    const { rectFullWidth, totalRects, rects, rectWidth } = useMemo(() => {
        const totalRects = getMonthCountFromStartAndEnd(start, end ?? new Date()) + 1;
        const rectFullWidth = getBaseRectFull(getScreenDevice());
        const rectWidth = rectFullWidth - RECT_GAP;
        let rects = new Array(totalRects).fill(0);
        return {
            rectFullWidth,
            totalRects,
            rects,
            rectWidth
        };
    }, [start, end]);
    return (
        <svg width={rectFullWidth * totalRects} height={BASE_MONTH_SVG_HEIGHT}>
            <g>
                {rects?.map((e, index) => (
                    <MonthRect key={index} width={rectWidth} gap={RECT_GAP} color={periodColor} index={index} />
                ))}
            </g>
        </svg>
    );
};

export default TimeLineItem;
