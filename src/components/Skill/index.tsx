import React from 'react';
import styles from './index.module.scss';
import { Importance, SkillLevel } from '../../lib/types';
import classNames from 'classnames';

interface SkillProps {
    name: string;
    level: SkillLevel;
    ages: number;
    importance: Importance;
}

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
const Name: React.FC<{ level: Importance; children: any }> = ({ level, children }) => {
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
const Skill = ({ level, name, ages, importance }: SkillProps) => {
    return (
        <div className={styles.skill}>
            <div>
                <Name level={importance}>{name}</Name>
                <div className={styles.subTitle}>{ages} years</div>
            </div>
            {level === SkillLevel.familiar && <LevelFamiliar />}
            {level === SkillLevel.proficient && <LevelProficient />}
            {level === SkillLevel.understand && <LevelUnderstand />}
        </div>
    );
}

export default Skill;
