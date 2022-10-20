import React from 'react';
import styles from './index.module.scss';

interface DividerProps {
    title?: string;
    extra?: React.ReactNode;
}

const Divider = ({ title, extra }: DividerProps) => {
    return (
        <div className={styles.divider}>
            <div className={styles.title}>
                <div>
                    <h3>{title}</h3>
                </div>
                <div>{extra}</div>
            </div>
            <div className={styles.section} />
        </div>
    );
};

export default Divider;
