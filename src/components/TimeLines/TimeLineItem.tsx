import React from 'react';
import { getMonthCountInStartAndEnd } from '../../utils/date';
import MonthRect from './MonthRect';
import { isMobilePhone } from '../../utils/device';


const BASE_RECT_WIDTH = 8;

const TimeLineItem = ({ start, end, periodColor }: { start: Date; end?: Date; periodColor: string }) => {
    const rectGap = 1;
    const totalRects = getMonthCountInStartAndEnd(start, end ?? new Date()) + 1;
    const isMobile = isMobilePhone();
    const rectFullWidth = isMobile ? BASE_RECT_WIDTH / 2 : BASE_RECT_WIDTH;
    const rectWidth = rectFullWidth - rectGap;
    let rectArray = new Array(totalRects).fill(0)
        ?.map((_, index) => ({
            index: index,
            color: periodColor,
        }));
    return (
        <svg width={rectFullWidth * totalRects} height="20"
             style={{ backgroundColor: isMobile ? '' : 'E0E0E0' }}>
            <g>
                {rectArray?.map((e, index) => (
                    <MonthRect
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
