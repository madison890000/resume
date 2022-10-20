import { formatDate } from '../../utils/date';
import React from 'react';
import styles from './index.module.scss';

interface TimesProps {
    start: Date;
    end?: Date;
}

const Times = ({ start, end }: TimesProps) => (
    <div className={styles.times}>
        <span>{formatDate(start)}</span>
        <span>-</span>
        <span>{end ? formatDate(end) : 'Present'}</span>
    </div>
);

export default Times;
