import DataModel from './types';
import Base from './Base';

interface IEducation {
    college: string;
    major: string;
    degree: DataModel.Degree;
    start: Date;
    end: Date;
}

export default class Education extends Base {
    public college: string;
    public major: string;
    public degree: DataModel.Degree;
    public start: Date;
    public end: Date;

    constructor({ college, major, degree, start, end }: IEducation) {
        super();
        this.major = major;
        this.college = college;
        this.degree = degree;
        this.start = start;
        this.end = end;
    }
}
