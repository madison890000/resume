import Company from './Company';
import DataModel from './types';
import Base from './Base';
import StringWithID from './StringWithID';
import { v4 } from 'uuid';

interface IPeriod {
    start: Date;
    end?: Date;
    keywords: string[];
    company: Company;
    jobPositionLevel: DataModel.JobPositionLevel;
    jobPosition: DataModel.JobPosition;
    achievements: DataModel.IAchievement[];
    jobSummaries: string[];
    solutionsOfHowToImplement: DataModel.SolutionsOfHowToImplement[];
}

export default class Period extends Base {
    public start: Date;
    public end?: Date;
    public keywords: StringWithID[];
    public achievements: DataModel.Achievement[];
    public jobSummaries: StringWithID[];
    public company: Company;
    /**
     * @deprecated please use Job.level
     */
    public jobPositionLevel: DataModel.JobPositionLevel;
    /**
     * @deprecated please use Job.position
     */
    public jobPosition: DataModel.JobPosition;
    public job: DataModel.Job;
    public solutionsOfHowToImplement: DataModel.SolutionsOfHowToImplement[];

    constructor({
        solutionsOfHowToImplement,
        company,
        jobSummaries,
        jobPosition,
        jobPositionLevel,
        achievements,
        keywords,
        start,
        end
    }: IPeriod) {
        super();
        this.company = company;
        this.start = start;
        this.end = end;
        this.achievements = achievements.map(achievement => ({
            id: v4(),
            text: achievement.text,
            categories: achievement.categories.map(e => new StringWithID(e))
        }));
        this.jobSummaries = jobSummaries.map(e => new StringWithID(e));
        this.keywords = keywords.map(e => new StringWithID(e));
        this.jobPositionLevel = jobPositionLevel;
        this.jobPosition = jobPosition;
        this.job = {
            position: jobPosition,
            level: jobPositionLevel
        };
        this.solutionsOfHowToImplement = solutionsOfHowToImplement;
    }
}
