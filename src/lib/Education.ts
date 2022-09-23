import { Degree } from './types';


interface IEducation {
    college: string;
    major: string;
    degree: Degree;
    start: Date;
    end: Date;
}

export default class Education {
    public college: string;
    public major: string;
    public degree: Degree;
    public start: Date;
    public end: Date;

    constructor({ college,major, degree, start, end }: IEducation) {
        this.major = major;
        this.college = college;
        this.degree = degree;
        this.start = start;
        this.end = end;
    }
}
