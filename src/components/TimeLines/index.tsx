import React from 'react';
import styles from './index.module.scss';
import Period from '../../Model/Period';
import { findPeriodByDate, getMonthCountInStartAndEnd } from '../../utils/date';
import MonthRect from './MonthRect';

interface TimeLinesProps {
    width: number;
    periods: Period[];
    periodColors: { [key: string]: string };
    barPosition?: 'top' | 'bottom';
};

const TimeLines = ({
                       barPosition = 'top',
                       width,
                       periods,
                       periodColors
                   }: TimeLinesProps) => {
    const start = periods?.[0]?.start;
    const end = periods?.[periods?.length - 1]?.end;
    const rectGap = 1;
    const totalRects = getMonthCountInStartAndEnd(start, end ?? new Date()) + 1;
    const rectFullWidth = width / totalRects;
    const rectWidth = rectFullWidth - rectGap;
    let rectArray = new Array(totalRects).fill(0)
        ?.map((_, index) => {
            const year = start.getFullYear() + Math.floor((start.getMonth() + index) / 12);
            const month = (start.getMonth() + index) % 12;
            const period = findPeriodByDate(new Date(Number(year), month, 1), periods)
            return {
                index: index,
                period: period,
                color: period ? periodColors[period?.id] : '',
            }
        })
    return (
        <div
            className={styles.timelineContainer}
            style={{
                width: `${width}px`
            }}
        >
            {
                barPosition === 'top' && (
                    <div>
                        <svg width={width} height="20" style={{ backgroundColor: 'E0E0E0' }}>
                            <g>
                                {rectArray?.map((e, index) => (
                                    <MonthRect
                                        key={e.index}
                                        width={rectWidth}
                                        gap={rectGap}
                                        color={e?.color}
                                        index={e?.index}
                                    />
                                ))}
                            </g>
                        </svg>
                    </div>
                )
            }
            <div style={{
                height: 48
            }}>
                {periods?.map((p, index) => {
                    const translateX = (getMonthCountInStartAndEnd(start, p?.start) + 1) * rectFullWidth;
                    return (
                        <span
                            key={p.id}
                            style={{
                                position: 'absolute',
                                transform: `translateX(${translateX}px)`
                            }}
                            className={styles.jobName}
                        >
                        {p?.jobPositionLevel} {p?.jobPosition}
                    </span>
                    )
                })}
            </div>
            {
                barPosition === 'bottom' && (
                    <div>
                        <svg width={width} height="20" style={{ backgroundColor: 'E0E0E0' }}>
                            <g>
                                {rectArray?.map((e, index) => (
                                    <MonthRect
                                        key={e.index}
                                        width={rectWidth}
                                        gap={rectGap}
                                        color={e?.color}
                                        index={e?.index}
                                    />
                                ))}
                            </g>
                        </svg>
                    </div>
                )
            }
        </div>
    )
}

export default TimeLines
