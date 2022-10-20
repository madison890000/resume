import React, { PropsWithChildren } from 'react';
import styles from './Name.module.scss';
import DataModel from '../../Model/types';

const Name: React.FC<PropsWithChildren<{ level: DataModel.Importance }>> = ({ level, children }) => {
    switch (level) {
        case DataModel.Importance.important:
            return <div className={styles.important}>{children}</div>;
        case DataModel.Importance.normal:
            return <div className={styles.normal}>{children}</div>;
        case DataModel.Importance.less:
            return <div className={styles.less}>{children}</div>;
        default:
            return null;
    }
};

export default Name;
