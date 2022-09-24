import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import Period from '../../lib/Period';
import { findPeriodByDate, getMonthCountInStartAndEnd } from '../../utils/date';


const colors = [
    '#FF6666',
    '#FFFF66',
    '#66FFFF',
    '#6666FF',
    '#B266FF',
    '#FF66B2',
]
const MonthRect = ({
                       gap = 2,
                       color,
                       index,
                       width = 20,
                   }: {
    index: number;
    width?: number
    color?: string;
    gap?: number;
}) => {
    return (
        <rect width={width} height="10" x={index * (width + gap)} y="5"
              fill={color}></rect>
    )
}

const pagePadding = 24;
const TimeLine = ({ periods }: { periods: Period[] }) => {
    const start = periods?.[0]?.start;
    const end = periods?.[periods?.length - 1]?.end;
    const [width, setWidth] = useState<number>(0);
    useEffect(() => {
        const { innerWidth } = window;
        setWidth(innerWidth - pagePadding - 40)
    }, [])
    const rectGap = 1;
    const totalRects = getMonthCountInStartAndEnd(start, end) + 1;
    const rectFullWidth = width / totalRects;
    const rectWidth = rectFullWidth - rectGap;
    const periodColors: { [key: string]: string } = {};
    periods?.forEach((p, index) => {
        periodColors[p.id] = colors[index];
    })
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
        <div className={styles.timelineContainer}>
            <div>
                <svg width={width} height="20" style={{ backgroundColor: 'E0E0E0' }}>
                    <g>
                        {rectArray?.map((e, index) => {

                            return (
                                <MonthRect
                                    width={rectWidth}
                                    gap={rectGap}
                                    color={e?.color}
                                    index={e?.index}
                                />
                            )
                        })}
                    </g>
                </svg>
            </div>
            <div style={{
                height: 48
            }}>
                {periods?.map((p, index) => {
                    const translateX = (getMonthCountInStartAndEnd(start, p?.start) + 1) * rectFullWidth;
                    return (
                        <span
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
        </div>
    )
}

export default TimeLine
