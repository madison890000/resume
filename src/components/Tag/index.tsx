import React, { PropsWithChildren } from 'react';
import styles from './index.module.scss';

type TagType = 'filled' | 'normal' | 'less';

interface TagProps {
    type?: TagType;
}

const Tag: React.FC<PropsWithChildren<TagProps>> = ({ type = 'normal', children }) => {
    switch (type) {
        case 'filled':
            return <span className={styles.filled}>{children}</span>;
        case 'normal':
            return <span className={styles.normal}>{children}</span>;
        case 'less':
            return <span className={styles.less}>{children}</span>;
        default:
            return <span>{children}</span>;
    }
};

export default Tag;
