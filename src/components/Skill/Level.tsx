import React from 'react';
import styles from './Level.module.scss';
import classNames from 'classnames';

namespace Level {
    export const Understand = () =>
        <div className={classNames(styles.level)}>
            <span />
            <span className={styles.empty} />
            <span className={styles.empty} />
            <span className={styles.empty} />
            <span className={styles.empty} />
            <div className={styles.levelName}>Understand</div>
        </div>

    export const Familiar = () =>
        <div className={classNames(styles.level)}>
            <span />
            <span />
            <span className={styles.empty} />
            <span className={styles.empty} />
            <span className={styles.empty} />
            <div className={styles.levelName}>Familiar</div>
        </div>

    export const Proficient = () =>
        <div className={classNames(styles.level)}>
            <span />
            <span />
            <span />
            <span />
            <span className={styles.empty} />
            <div className={styles.levelName}>Proficient</div>
        </div>

}
export default Level
