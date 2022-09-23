import React from 'react';
import styles from './index.module.scss';

interface DividerProps {
    title?: string;
}

const Divider = ({
                     title,
                 }: DividerProps) => {
    return (
        <div className={styles.divider}>
            <h3>{title}</h3>
            <div className={styles.section} />
        </div>
    );
}

export default Divider;
