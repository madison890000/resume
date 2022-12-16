import Tag from '../Tag';
import React from 'react';
import DataModel from '../../models/types';
import styles from './Header.module.scss';
import StringWithID from '../../models/StringWithID';
import capitalize from '../../utils/capitalize';

interface HeaderProps {
    keywords: StringWithID[];
    jobPositionLevel: DataModel.JobPositionLevel;
    jobPosition: DataModel.JobPosition;
    companyName: string;
    companyType: DataModel.CompanyType;
}

const Header = ({ keywords, companyName, jobPosition, jobPositionLevel }: HeaderProps) => (
    <div className={styles.header}>
        <span className={styles.job}>
            {jobPositionLevel && <span>{capitalize(jobPositionLevel.toLowerCase())}</span>}
            <span>{jobPosition}</span>
        </span>
        <span>
            {keywords?.map(keyword => (
                <Tag type="filled" key={keyword.id}>
                    {keyword.toString()}
                </Tag>
            ))}
        </span>
        <span className={styles.companyName}>
            <span>{companyName}</span>
        </span>
    </div>
);

export default Header;
