import DataModel from './types';
import { v4 } from 'uuid';

export default class Skill {
    public name: string;
    public level: DataModel.SkillLevel;
    public importance: DataModel.Importance;
    public ages: number;
    id: string;

    constructor(name: string, level: DataModel.SkillLevel, ages: number, importance: DataModel.Importance) {
        this.id = v4();
        this.name = name;
        this.level = level;
        this.ages = ages;
        this.importance = importance;
    }

}
