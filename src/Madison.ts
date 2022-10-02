import Person from './lib/Person';
import Education from './lib/Education';
import {
    Achievement,
    CompanyType,
    Degree,
    Importance,
    JobPositionLevel,
    Keyword,
    SkillLevel
} from './lib/types';
import Period from './lib/Period';
import Company from './lib/Company';
import Skill from './lib/Skill';
import Capability from './lib/Capability';

const madison = new Person({
    firstName: 'Madison',
    lastName: 'Ma',
    birthDay: new Date('1989-10-25T00:00:00Z'),
    email: 'madison.sss.ma@gmail.com',
    cellphone: '+8618510163161',
    country: 'China',
    gender: 'male',
    description: [
        'I have 7 years of working experience in IT with solid technical background, proficient in modern JavaScript/TypeScript programming frameworks, tools, and libraries. ',
        'I Have rich experience in Front-End and Back-End development including Admin Portal and Customer Portal in Online Sale Web\n' +
        'Application, Internet finance Web System, education application, Data Reporting Web Page, etc.',
        'I am both a good team leader and team member. ' +
        'I am a person who is passionate about life, friendly to people, willing to share, and like to work with colleagues to make the world to be a better place.'
    ]
})

const masterEducation = new Education({
    major: 'Geographical Information System',
    college: 'China Agricultural University',
    degree: Degree.Master,
    start: new Date('2012-09-01T00:00:00Z'),
    end: new Date('2015-07-01T00:00:00Z')
})
const bachelorEducation = new Education({
    major: 'Resources and Environment',
    college: 'China Agricultural University',
    degree: Degree.Bachelor,
    start: new Date('2008-09-01T00:00:00Z'),
    end: new Date('2012-07-01T00:00:00Z')
})

madison.addEducations([bachelorEducation, masterEducation])

const taijiCompany = new Company({
    name: 'Taiji Computer Corporation. Ltd',
    type: CompanyType.Enterprise,
    location: 'Beijing, China'
})
const periodOne = new Period({
    start: new Date('2015-07-01T00:00:00Z'),
    end: new Date('2016-07-01T00:00:00Z'),
    company: taijiCompany,
    keywords: ['Java', 'jQuery', 'Waterfall'] as Keyword[],
    jobPosition: 'Software Engineer',
    jobPositionLevel: JobPositionLevel.Junior,
    solutionsOfHowToImplement: [],
    jobSummaries: [
        'use Java to develop system on schedule',
        'participate in the design and development of one economic-data-report project.',
    ],
    achievements: [
        {
            text: 'abstract 10+ components to unify UI style of most company projects, including table, form input, file upload, etc',
            categories: ['UI']
        }
    ] as Achievement[],
})
const yinyuanCompany = new Company({
    name: 'Yinyuan Asia-pacific Technology Co. Ltd ',
    type: CompanyType.Startup,
    location: 'Beijing, China'
})
const periodTwo = new Period({
    start: new Date('2016-07-01T00:00:00Z'),
    end: new Date('2018-03-01T00:00:00Z'),
    company: yinyuanCompany,
    keywords: ['Java', 'jQuery', 'React', 'Waterfall'] as Keyword[],
    jobPosition: 'Software Engineer',
    jobPositionLevel: JobPositionLevel.Middle,
    solutionsOfHowToImplement: [],
    jobSummaries: [
        'participate in the design and development of all projects ',
        'responsible for the release quality of all system. ',
        'responsible for team\'s recruitment, technical training(ES6), etc. ',
        'take charge of annual feature planning and appraise performance of each team member.'
    ],
    achievements: [
        {
            text: 'completed the design and development of the company\'s front-end UI component library',
            categories: ['UI']
        },
        {
            text: '\'implemented the rendering of list components and displaying data  in both horizontal and vertical',
            categories: ['UI']
        }
    ] as Achievement[],
})
const baixinCompany = new Company({
    name: 'Citic Baixin Bank Co. Ltd',
    type: CompanyType.Enterprise,
    location: 'Beijing, China'
})
const periodThree = new Period({
    start: new Date('2018-04-01T00:00:00Z'),
    end: new Date('2019-06-01T00:00:00Z'),
    company: baixinCompany,
    keywords: ['Vue', 'React', 'Waterfall'] as Keyword[],
    jobPosition: 'Front-End Engineer',
    jobPositionLevel: JobPositionLevel.Middle,
    solutionsOfHowToImplement: [],
    jobSummaries: [
        'communicate with product manager and UI designer partner through meeting to understand project requirements',
        'responsible for task assignment and project requirement explanation to 5 team members',
        'provide training and guidance on technical to junior engineer',
    ],
    achievements: [
        {
            text: 'completed the design and development of company\'s front-end UI component library',
            categories: ['UI']
        },
    ] as Achievement[],
})
const pccwCompany = new Company({
    name: 'PCCW GLOBAL',
    type: CompanyType.Enterprise,
    location: 'Beijing, China'
})
const periodFour = new Period({
    start: new Date('2019-09-01T00:00:00Z'),
    end: new Date('2022-05-01T00:00:00Z'),
    company: pccwCompany,
    keywords: ['React', 'NextJs', 'umi', 'TDD', 'Agile'] as Keyword[],
    jobPosition: 'Front-End Engineer',
    jobPositionLevel: JobPositionLevel.Senior,
    solutionsOfHowToImplement: [],
    jobSummaries: [
        'make the architecture design in Front-End project',
        'communicate with product manager and UI designer to understand project requirements every week (one sprint),',
        'conduct functional research and validation based on business requirements, evaluate requirements implementation feasibility and propose solutions.',
        'responsible for task assignment and project requirement explanation to 5 external team members',
        'provide training and guidance on technical to junior engineer',
    ],
    achievements: [
        {
            text: 'design and developed our company\'s front-end UI component library',
            categories: ['UI']
        },
        {
            text: 'setup the Front-End CI/CD with system Engineers, including the Docker building and the jest process',
            categories: ['CI/CD', 'Engineering']
        },
        {
            text: 'setup the utils library in FE',
            categories: ['Engineering']
        },
        {
            text: 'using Micro Front-End Service to split code and improve the performance in FE',
            categories: ['Performance', 'Engineering']
        },
        {
            text: 'define the Best practices in FE project with React and Typescript.',
            categories: ['Architecture']
        }
    ] as Achievement[],
})
const teslaCompany = new Company({
    name: 'Tesla',
    type: CompanyType.Enterprise,
    location: 'Beijing, China'
})
const periodFive = new Period({
    start: new Date('2022-05-23T00:00:00Z'),
    company: teslaCompany,
    keywords: ['React', 'Agile'] as Keyword[],
    jobPosition: 'Software Engineer',
    jobPositionLevel: JobPositionLevel.Senior,
    solutionsOfHowToImplement: [],
    jobSummaries: [
        'make the architecture design in Front-End project',
        'improve the code quality and performance in FE',
        'improve the FE team efficiency',
        'communicate with product manager and UI designer to understand project requirements every 2 week (one sprint),',
        'provide training and guidance on technical',
    ],
    achievements: [
        {
            text: 'completed the design and development of common utils and Hooks in React project',
            categories: ['Engineering']
        },
        {
            text: 'optimized the front-end code',
            categories: ['Performance']
        },
        {
            text: 'improve the code quality',
            categories: ['Quality']
        },
    ] as Achievement[],
})
madison.addPeriods([periodOne, periodTwo, periodThree, periodFour, periodFive])

const skills = [
    new Skill('JavaScript', SkillLevel.proficient, 7, Importance.important),
    new Skill('React', SkillLevel.proficient, 5, Importance.important),
    new Skill('TypeScript', SkillLevel.proficient, 3, Importance.important),
    new Skill('React hooks', SkillLevel.proficient, 3, Importance.important),
    new Skill('React-Redux', SkillLevel.proficient, 3, Importance.important),
    new Skill('HTML', SkillLevel.proficient, 6, Importance.important),
    new Skill('CSS', SkillLevel.proficient, 6, Importance.important),
    new Skill('MobX', SkillLevel.proficient, 1, Importance.normal),
    new Skill('Electron', SkillLevel.familiar, 1, Importance.normal),
    new Skill('Node', SkillLevel.familiar, 2, Importance.normal),
    new Skill('Vue', SkillLevel.proficient, 1.5, Importance.normal),
    new Skill('Java', SkillLevel.familiar, 3, Importance.normal),
    new Skill('Docker', SkillLevel.understand, 0.5, Importance.less),
    new Skill('C#', SkillLevel.understand, 0.5, Importance.less),
    new Skill('Database', SkillLevel.familiar, 2, Importance.normal),
    new Skill('Git', SkillLevel.proficient, 6, Importance.important),
]
madison.addSkills(skills)

const capabilities = new Capability({
    coding: 8.8,
    leaning: 9,
    algorithm: 6,
    communicate: 8,
    engineer: 7,
    passion: 9,
})
madison.addCapability(capabilities)
export default madison
