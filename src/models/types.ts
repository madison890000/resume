import StringWithID from './StringWithID';

namespace DataModel {
    export enum Degree {
        Bachelor = 'BACHELOR',
        Master = 'MASTER',
        PhD = 'PHD'
    }

    export type Gender = 'MALE' | 'FEMALE';

    export type IAchievement = {
        text: string;
        categories: string[];
    };
    export type Achievement = {
        id: string;
        text: string;
        categories: StringWithID[];
    };
    export type SolutionsOfHowToImplement = string;

    export enum JobPositionLevel {
        Staff = 'STAFF',
        Senior = 'SENIOR',
        Middle = '',
        Junior = 'JUNIOR'
    }

    export type JobPosition = 'Software Engineer' | 'Front-End Engineer' | 'Back-End Engineer' | 'Full-Stack Engineer';

    export type Job = {
        position: JobPosition;
        level: JobPositionLevel;
    };
    export enum SkillLevel {
        understand = 'UNDERSTAND',
        familiar = 'FAMILIAR',
        proficient = 'PROFICIENT'
    }

    export enum Importance {
        Essential,
        Advanced
    }

    export enum CompanyType {
        Enterprise,
        Startup
    }
}
export default DataModel;
