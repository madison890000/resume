import { Importance, SkillLevel } from './types';
import { v4 } from 'uuid';

export default class Skill {
    public name: string;
    public level: SkillLevel;
    public importance: Importance;
    public ages: number;
    id: string;

    constructor(name: string, level: SkillLevel, ages: number, importance: Importance) {
        this.id = v4();
        this.name = name;
        this.level = level;
        this.ages = ages;
        this.importance = importance;
    }

}
