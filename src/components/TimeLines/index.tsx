import React, { useMemo } from 'react';
import styles from './index.module.scss';
import { findPeriodByDate, getMonthCountFromStartAndEnd } from '../../utils/date';
import MonthRect from './MonthRect';
import DataModel from '../../models/types';

interface PeriodData {
    start: Date;
    end?: Date;
    id: string;
    job: {
        level: DataModel.JobPositionLevel;
        position: DataModel.JobPosition;
    };
}
interface TimeLinesProps {
    width: number;
    periods: PeriodData[];
    periodColors: { [key: string]: string };
    barPosition?: 'top' | 'bottom';
}
const RECT_GAP = 1;
const TimeLines = ({ barPosition = 'top', width, periods, periodColors }: TimeLinesProps) => {
    const { timeLinesStart, totalRects, rects } = useMemo(() => {
        const firstPeriod = periods?.[0];
        const endPeriod = periods?.[periods?.length - 1];
        const timeLinesStart = firstPeriod?.start;
        const timeLinesEnd = endPeriod?.end;
        const totalRects = getMonthCountFromStartAndEnd(timeLinesStart, timeLinesEnd ?? new Date()) + 1;
        let rects = new Array(totalRects).fill(0)?.map((_, index) => {
            const year = timeLinesStart.getFullYear() + Math.floor((timeLinesStart.getMonth() + index) / 12);
            const month = (timeLinesStart.getMonth() + index) % 12;
            const period = findPeriodByDate<PeriodData>(new Date(Number(year), month, 1), periods);
            return {
                index: index,
                period: period,
                color: period ? periodColors[period?.id] : ''
            };
        });
        return {
            timeLinesStart,
            totalRects,
            rects
        };
    }, [periods, periodColors]);

    const { rectFullWidth, rectWidth } = useMemo(() => {
        const rectFullWidth = width / totalRects;
        const rectWidth = rectFullWidth - RECT_GAP;
        return {
            rectFullWidth,
            rectWidth
        };
    }, [width, totalRects]);

    const Chart = (
        <div>
            <svg width={width} height="20" style={{ backgroundColor: 'E0E0E0' }}>
                <g>
                    {rects?.map((e, index) => (
                        <MonthRect key={e.index} width={rectWidth} gap={RECT_GAP} color={e?.color} index={e?.index} />
                    ))}
                </g>
            </svg>
        </div>
    );

    return (
        <div
            className={styles.timelineContainer}
            style={{
                width: `${width}px`
            }}
        >
            {barPosition === 'top' && Chart}
            <div
                style={{
                    height: 48
                }}
            >
                {periods?.map(p => {
                    const translateX = (getMonthCountFromStartAndEnd(timeLinesStart, p?.start) + 1) * rectFullWidth;
                    return (
                        <span
                            key={p.id}
                            style={{
                                position: 'absolute',
                                transform: `translateX(${translateX}px)`
                            }}
                            className={styles.jobName}
                        >
                            {p?.job.level} {p?.job.position}
                        </span>
                    );
                })}
            </div>
            {barPosition === 'bottom' && Chart}
        </div>
    );
};

export default TimeLines;
