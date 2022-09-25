import React, { PropsWithChildren } from 'react';
import styles from './Name.module.scss';
import { Importance } from '../../lib/types';

const Name: React.FC<PropsWithChildren<{ level: Importance }>> = ({ level, children }) => {
    switch (level) {
        case Importance.important:
            return (
                <div className={styles.important}>{children}</div>
            );
        case Importance.normal:
            return (
                <div className={styles.normal}>{children}</div>
            );
        case Importance.less:
            return (
                <div className={styles.less}>{children}</div>
            );
        default:
            return null
    }
}

export default Name;
