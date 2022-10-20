import Company from './Company';
import DataModel from './types';
import Base from './Base';

interface IPeriod {
    start: Date;
    end?: Date;
    keywords: DataModel.Keyword[];
    company: Company;
    jobPositionLevel: DataModel.JobPositionLevel;
    jobPosition: DataModel.JobPosition;
    achievements: DataModel.Achievement[];
    jobSummaries: string[];
    solutionsOfHowToImplement: DataModel.SolutionsOfHowToImplement[];
}

export default class Period extends Base {
    public start: Date;
    public end?: Date;
    public keywords: DataModel.Keyword[];
    public achievements: DataModel.Achievement[];
    public jobSummaries: string[];
    public company: Company;
    public jobPositionLevel: DataModel.JobPositionLevel;
    public jobPosition: DataModel.JobPosition;
    public solutionsOfHowToImplement: DataModel.SolutionsOfHowToImplement[];

    constructor({ solutionsOfHowToImplement, company, jobSummaries, jobPosition, jobPositionLevel, achievements, keywords, start, end }: IPeriod) {
        super();
        this.company = company;
        this.start = start;
        this.end = end;
        this.achievements = achievements;
        this.jobSummaries = jobSummaries;
        this.keywords = keywords;
        this.jobPositionLevel = jobPositionLevel;
        this.jobPosition = jobPosition;
        this.solutionsOfHowToImplement = solutionsOfHowToImplement;
    }
}
