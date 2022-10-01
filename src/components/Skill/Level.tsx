import React from 'react';
import styles from './Level.module.scss';
import classNames from 'classnames';

const LevelUnderstand = () =>
    <div className={classNames(styles.level)}>
        <span />
        <span className={styles.empty} />
        <span className={styles.empty} />
        <span className={styles.empty} />
        <span className={styles.empty} />
        <div className={styles.levelName}>Understand</div>
    </div>
const LevelFamiliar = () =>
    <div className={classNames(styles.level)}>
        <span />
        <span />
        <span className={styles.empty} />
        <span className={styles.empty} />
        <span className={styles.empty} />
        <div className={styles.levelName}>Familiar</div>
    </div>
const LevelProficient = () =>
    <div className={classNames(styles.level)}>
        <span />
        <span />
        <span />
        <span />
        <span className={styles.empty} />
        <div className={styles.levelName}>Proficient</div>
    </div>

const Level = () => null

Level.Understand = LevelUnderstand;
Level.Familiar = LevelFamiliar;
Level.Proficient = LevelProficient;

export default Level
