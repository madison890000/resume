import React, { PropsWithChildren } from 'react';
import styles from './Name.module.scss';
import DataModel from '../../models/types';

const Name: React.FC<PropsWithChildren<{ level: DataModel.Importance }>> = ({ level, children }) => {
    switch (level) {
        case DataModel.Importance.Essential:
            return <div className={styles.important}>{children}</div>;
        case DataModel.Importance.Advanced:
            return <div className={styles.normal}>{children}</div>;
        default:
            return null;
    }
};

export default Name;
