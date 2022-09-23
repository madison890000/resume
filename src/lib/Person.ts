import Education from './Education';
import Period from './Period';
import { Gender } from './types';
import Skill from './Skill';


interface IPerson {
    firstName: string;
    lastName: string;
    email: string;
    birthDay: Date;
    gender: Gender;
    cellphone: string;
    country: string;
    description: string[];
    educations?: Education[];
    periods?: Period[];
}


export default class Person {
    public firstName: string;
    public lastName: string;
    public email: string;
    public gender: Gender;
    public cellphone: string;
    public country: string;
    public birthDay: Date;
    public educations: Education[];
    public periods: Period[];
    public skills: Skill[];
    public description: string[];

    constructor({ firstName,description, birthDay, lastName, email, cellphone, country, gender }: IPerson) {
        this.educations = [];
        this.periods = [];
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.cellphone = cellphone;
        this.birthDay = birthDay;
        this.country = country;
        this.gender = gender;
        this.skills = [];
        this.description = description;
    }

    addEducations(educations: Education[]) {
        this.educations = this.educations.concat(educations);
    }

    addPeriods(periods: Period[]) {
        this.periods = this.periods.concat(periods);
    }

    addSkills(skills: Skill[]) {
        this.skills = this.skills.concat(skills);
    }

    get reversedPeriods() {
        return [...this.periods].reverse()
    }
}
