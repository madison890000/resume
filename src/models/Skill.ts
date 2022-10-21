import DataModel from './types';
import Base from './Base';

export default class Skill extends Base {
    public name: string;
    public level: DataModel.SkillLevel;
    public importance: DataModel.Importance;
    public ages: number;

    constructor(name: string, level: DataModel.SkillLevel, ages: number, importance: DataModel.Importance) {
        super();
        this.name = name;
        this.level = level;
        this.ages = ages;
        this.importance = importance;
    }
}
