namespace DataModel {
    export enum Degree {
        Bachelor = 'Bachelor',
        Master = 'Master',
        PhD = 'PhD',
    }

    export type Gender = 'male' | 'female';


    export type Achievement = {
        text: string;
        categories: string[];
    };
    export type SolutionsOfHowToImplement = string;

    export enum JobPositionLevel {
        Staff = 'Staff',
        Senior = 'Senior',
        Middle = '',
        Junior = 'Junior',
    }

    export type JobPosition =
        'Software Engineer'
        | 'Front-End Engineer'
        | 'Back-End Engineer'
        | 'Full-Stack Engineer';

    export type JobResponsibility = string;
    export type FEUILib = 'Material UI' | 'antd';
    export type ReactFramework = 'NextJs' | 'Create React App' | 'umi';
    export type Framework = 'React' | 'Vue' | 'Angular' | 'jQuery';
    export type CodeLanguage = 'JAVA' | 'C#' | 'JavaScript';
    export type OtherSkillLabels = 'NodeJs' | 'HTML5' | 'CSS3' | 'Webpack';
    export type WayOfDevelopment = 'Agile' | 'Waterfall';

    export type Keyword =
        Framework
        & CodeLanguage
        & OtherSkillLabels
        & FEUILib
        & ReactFramework
        & WayOfDevelopment;

    export enum SkillLevel {
        understand = 'understand',
        familiar = 'familiar',
        proficient = 'proficient',
    }

    export enum Importance {
        important,
        normal,
        less,
    }

    export enum CompanyType {
        Enterprise,
        Startup,
    }

}
export default DataModel
