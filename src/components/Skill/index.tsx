import React from 'react';
import styles from './index.module.scss';
import { Importance, SkillLevel } from '../../lib/types';
import Name from './Name';
import Level from './Level';

interface SkillProps {
    name: string;
    level: SkillLevel;
    ages: number;
    importance: Importance;
}

const Skill = ({ level, name, ages, importance }: SkillProps) => {
    return (
        <div className={styles.skill}>
            <div>
                <Name level={importance}>{name}</Name>
                <div className={styles.subTitle}>{ages} years</div>
            </div>
            {level === SkillLevel.familiar && <Level.Familiar />}
            {level === SkillLevel.proficient && <Level.Proficient />}
            {level === SkillLevel.understand && <Level.Understand />}
        </div>
    );
}

export default Skill;
