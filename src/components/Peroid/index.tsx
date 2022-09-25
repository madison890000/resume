import React from 'react';
import styles from './index.module.scss';
import { Achievement, JobPosition, JobPositionLevel } from '../../lib/types';
import Times from '../Times';

interface PeriodProps {
    start: Date;
    end: Date;
    keywords: string[];
    companyName: string;
    jobPositionLevel: JobPositionLevel;
    jobPosition: JobPosition;
    achievements: Achievement[];
    jobSummaries: string[];
}

const Period = ({
                    start,
                    end,
                    companyName,
                    keywords,
                    jobPositionLevel,
                    jobPosition,
                    achievements,
                    jobSummaries,
                }: PeriodProps) => {
    return (
        <>
            <div className={styles.period}>
                <div>
                    <div className={styles.header}>
                        <span className={styles.job}>
                            {jobPositionLevel && <span>{jobPositionLevel}</span>}
                            <span>{jobPosition}</span>
                        </span>
                        <span className={styles.companyName}>
                            <span>({companyName})</span>
                        </span>
                        <span>
                            {keywords?.map(keyword => (
                                <span className={styles.keyword}>{keyword}</span>
                            ))}
                        </span>
                    </div>

                </div>
                <Times start={start} end={end} />
            </div>

            <div>
                <h5>Job summaries:</h5>
                <ul>
                    {jobSummaries?.map((summary) => (
                        <li>{summary}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h5>Achievements:</h5>
                <ul className={styles.achievements}>
                    {achievements?.map((achievement) => (
                        <li>

                            <span>
                                {achievement?.categories?.map((c) => (
                                    <span className={styles.category}>{c}</span>
                                ))}
                            </span>
                            {achievement?.text}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Period;
