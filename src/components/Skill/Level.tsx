import React from 'react';
import styles from './Level.module.scss';
import classNames from 'classnames';

const LevelUnderstand = () =>
    <div className={classNames(styles.level, styles.understand)}>
        <span />
        <span />
        <span />
        <div className={styles.levelName}>Understand</div>
    </div>
const LevelFamiliar = () =>
    <div className={classNames(styles.level, styles.familiar)}>
        <span />
        <span />
        <span />
        <div className={styles.levelName}>Familiar</div>
    </div>
const LevelProficient = () =>
    <div className={classNames(styles.level, styles.proficient)}>
        <span />
        <span />
        <span />
        <div className={styles.levelName}>Proficient</div>
    </div>

export default {
    Understand: LevelUnderstand,
    Familiar: LevelFamiliar,
    Proficient: LevelProficient,
}
