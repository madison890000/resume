import React from 'react';
import styles from './index.module.scss';
import { Achievement, CompanyType, JobPosition, JobPositionLevel } from '../../lib/types';
import Times from '../Times';
import Tag from '../Tag';
import TimeLineItem from '../TimeLines/TimeLineItem';

interface PeriodProps {
    start: Date;
    periodColor: string;
    end?: Date;
    keywords: string[];
    companyName: string;
    companyType?: CompanyType;
    jobPositionLevel: JobPositionLevel;
    jobPosition: JobPosition;
    achievements: Achievement[];
    jobSummaries: string[];
}

const Period = ({
                    start,
                    periodColor,
                    end,
                    companyName,
                    companyType,
                    keywords,
                    jobPositionLevel,
                    jobPosition,
                    achievements,
                    jobSummaries,
                }: PeriodProps) => {
    return (
        <div className={styles.periodContainer}>
            <div className={styles.period}>
                <div>
                    <div className={styles.header}>
                        <span className={styles.job}>
                            {jobPositionLevel && <span>{jobPositionLevel}</span>}
                            <span>{jobPosition}</span>
                        </span>
                        <span className={styles.companyName}>
                            <span>
                                {companyName}
                                <span>
                                    {companyType === CompanyType.Enterprise &&
                                    <Tag type="less">Enterprise</Tag>}
                                    {companyType === CompanyType.Startup &&
                                    <Tag type="less">Startup</Tag>}
                                </span>
                            </span>
                        </span>
                        <span>
                            {keywords?.map(keyword => (
                                <Tag type="filled">{keyword}</Tag>
                            ))}
                        </span>
                    </div>

                </div>
                <div className={styles.timeline}>
                    <TimeLineItem start={start} end={end} periodColor={periodColor} />
                    <Times start={start} end={end} />
                </div>

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
                            {achievement?.text}
                            <span>
                                {achievement?.categories?.map((c) => (
                                    <Tag>{c}</Tag>
                                ))}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Period;