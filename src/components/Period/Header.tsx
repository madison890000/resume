import Tag from '../Tag';
import React from 'react';
import DataModel from '../../Model/types';
import styles from './Header.module.scss';
import CompanyType from './CompanyType';

interface HeaderProps {
    keywords: string[];
    jobPositionLevel: DataModel.JobPositionLevel;
    jobPosition: DataModel.JobPosition;
    companyName: string;
    companyType?: DataModel.CompanyType;
}

const Header = ({ keywords, companyType, companyName, jobPosition, jobPositionLevel }: HeaderProps) => (
    <div className={styles.header}>
        <span className={styles.job}>
            {jobPositionLevel && <span>{jobPositionLevel}</span>}
            <span>{jobPosition}</span>
        </span>
        <span className={styles.companyName}>
            <span>
                {companyName}
                {companyType && <CompanyType companyType={companyType} />}
            </span>
        </span>
        <span>
            {keywords?.map(keyword => (
                <Tag type="filled">{keyword}</Tag>
            ))}
        </span>
    </div>
);

export default Header;
