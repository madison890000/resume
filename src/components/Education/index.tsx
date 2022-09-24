import React from 'react';
import styles from './index.module.scss';
import { Degree } from '../../lib/types';
import Times from '../Times';

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
            <Times start={start} end={end} />
        </div>
    );
}

export default Education;
