import React from 'react';
import styles from './index.module.scss';
import { Degree } from '../../lib/types';
import { formatDate } from '../../utils/date';

interface EducationProps {
    college: string;
    degree: Degree;
    major: string;
    start: Date;
    end: Date;
}

const Education = ({
                       start,
                       end,
                       college,
                       degree,
                       major,
                   }: EducationProps) => {
    return (
        <div className={styles.education}>
            <div>
                <span>{college}</span>
            </div>
            <div>
                <span>{major}</span>
                <span className={styles.major}>({degree})</span>
            </div>
            <div className={styles.times}>
                <span>{formatDate(start)}</span>
                -
                <span>{formatDate(end)}</span>
            </div>
        </div>
    );
}

export default Education;
