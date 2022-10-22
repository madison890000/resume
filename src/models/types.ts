import StringWithID from './StringWithID';

namespace DataModel {
    export enum Degree {
        Bachelor = 'Bachelor',
        Master = 'Master',
        PhD = 'PhD'
    }

    export type Gender = 'male' | 'female';

    export interface IAchievement {
        text: string;
        categories: string[];
    }
    export type Achievement = {
        id: string;
        text: string;
        categories: StringWithID[];
    };
    export type SolutionsOfHowToImplement = string;

    export enum JobPositionLevel {
        Staff = 'Staff',
        Senior = 'Senior',
        Middle = '',
        Junior = 'Junior'
    }

    export type JobPosition = 'Software Engineer' | 'Front-End Engineer' | 'Back-End Engineer' | 'Full-Stack Engineer';

    export enum SkillLevel {
        understand = 'understand',
        familiar = 'familiar',
        proficient = 'proficient'
    }

    export enum Importance {
        important,
        normal,
        less
    }

    export enum CompanyType {
        Enterprise,
        Startup
    }
}
export default DataModel;
