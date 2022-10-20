import React from 'react';
import styles from './index.module.scss';
import DataModel from '../../Model/types';
import Times from '../Times';
import Tag from '../Tag';
import TimeLineItem from '../TimeLines/TimeLineItem';
import { defineMessages, useIntl } from 'react-intl';

interface PeriodProps {
    start: Date;
    periodColor: string;
    end?: Date;
    keywords: string[];
    companyName: string;
    companyType?: DataModel.CompanyType;
    jobPositionLevel: DataModel.JobPositionLevel;
    jobPosition: DataModel.JobPosition;
    achievements: DataModel.Achievement[];
    jobSummaries: string[];
}

const messages = defineMessages({
    jobSummaries: {
        id: 'component.period.jobSummaries',
        defaultMessage: 'Job summaries',
    },
    achievements: {
        id: 'component.period.achievements',
        defaultMessage: 'Achievements',
    },
});
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
    const intl = useIntl();
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
                                    {companyType === DataModel.CompanyType.Enterprise &&
                                    <Tag type="less">Enterprise</Tag>}
                                    {companyType === DataModel.CompanyType.Startup &&
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
                <h5>{intl.formatMessage(messages.jobSummaries)}:</h5>
                <ul>
                    {jobSummaries?.map((summary) => (
                        <li>{summary}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h5>{intl.formatMessage(messages.achievements)}:</h5>
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
