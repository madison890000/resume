import { Importance, SkillLevel } from './types';


export default class Skill {
    public name: string;
    public level: SkillLevel;
    public importance: Importance;
    public ages: number;

    constructor(name: string, level: SkillLevel, ages: number, importance: Importance) {
        this.name = name;
        this.level = level;
        this.ages = ages;
        this.importance = importance;
    }

}
