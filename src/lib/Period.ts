import Company from './Company';
import { v4 } from 'uuid';
import {
    Achievement,
    JobPosition,
    JobPositionLevel,
    Keyword,
    SolutionsOfHowToImplement
} from './types';

interface IPeriod {
    start: Date;
    end: Date;
    keywords: Keyword[];
    company: Company;
    jobPositionLevel: JobPositionLevel;
    jobPosition: JobPosition;
    achievements: Achievement[];
    jobSummaries: string[];
    solutionsOfHowToImplement: SolutionsOfHowToImplement[];
}

export default class Period {
    readonly id: string;
    public start: Date;
    public end: Date;
    public keywords: Keyword[];
    public achievements: Achievement[];
    public jobSummaries: string[];
    public company: Company;
    public jobPositionLevel: JobPositionLevel;
    public jobPosition: JobPosition;
    public solutionsOfHowToImplement: SolutionsOfHowToImplement[];

    constructor({solutionsOfHowToImplement, company, jobSummaries, jobPosition, jobPositionLevel, achievements, keywords, start, end }: IPeriod) {
        this.id = v4();
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
