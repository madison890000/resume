import Person from './models/Person';
import Education from './models/Education';
import DataModel from './models/types';
import Period from './models/Period';
import Company from './models/Company';
import Skill from './models/Skill';
import Capability from './models/Capability';

const madison = new Person({
    firstName: 'Madison(Zusheng)',
    lastName: 'Ma',
    birthDay: new Date('1989-10-25T00:00:00Z'),
    email: 'madison.sss.ma@gmail.com',
    cellphone: '+8618510163161',
    country: 'China',
    gender: 'MALE',
    links: [
        {
            name: 'Github',
            value: 'https://github.com/madison890000'
        },
        {
            name: 'LinkedIn',
            value: 'https://www.linkedin.com/in/madison-ma-800657237/'
        }
    ],
    descriptions: [
        'I have 7 years working experience in IT with solid technical background, proficient in modern JavaScript/TypeScript programming frameworks, tools, and libraries. ',
        'I Have rich development experience both in Front-End and Back-End, including Admin Portal and Customer Portal in E-commerce\n' +
            'System, Web Finance(Invoice) System, Supporting System, SPA, etc.',
        'I am both a good team leader and team member. ' +
            'I am passionate about life, friendly to people, willing to share, and wish to work with colleagues whom want to make the world to be a better place.'
    ]
});

const masterEducation = new Education({
    major: 'Land Utilization and Information Technology',
    college: 'China Agricultural University',
    degree: DataModel.Degree.Master,
    start: new Date('2012-09-01T00:00:00Z'),
    end: new Date('2015-07-01T00:00:00Z')
});
const bachelorEducation = new Education({
    major: 'Resources and Environment',
    college: 'China Agricultural University',
    degree: DataModel.Degree.Bachelor,
    start: new Date('2008-09-01T00:00:00Z'),
    end: new Date('2012-07-01T00:00:00Z')
});

madison.addEducations([bachelorEducation, masterEducation]);

const taijiCompany = new Company({
    name: 'Taiji Computer Corporation. Ltd',
    type: DataModel.CompanyType.Enterprise,
    location: 'Beijing, China'
});
const periodOne = new Period({
    start: new Date('2015-07-01T00:00:00Z'),
    end: new Date('2016-07-01T00:00:00Z'),
    company: taijiCompany,
    keywords: ['Java', 'jQuery', 'Waterfall'],
    jobPosition: 'Software Engineer',
    jobPositionLevel: DataModel.JobPositionLevel.Middle,
    solutionsOfHowToImplement: [],
    jobSummaries: [
        'use Java to develop system on schedule',
        'participate in the design and development of one economic-data-report project.'
    ],
    achievements: [
        {
            text: 'used Spring-boot and Kendo-UI to build the the basic configuration of common project',
            categories: ['Java']
        },
        {
            text: 'abstracted 10+ components to unify UI style, including table, form input, file upload, etc',
            categories: ['UI']
        }
    ]
});
const yinyuanCompany = new Company({
    name: 'Yinyuan Asia-pacific Technology Co. Ltd ',
    type: DataModel.CompanyType.Startup,
    location: 'Beijing, China'
});
const periodTwo = new Period({
    start: new Date('2016-07-01T00:00:00Z'),
    end: new Date('2018-03-01T00:00:00Z'),
    company: yinyuanCompany,
    keywords: ['Java', 'jQuery', 'React', 'Waterfall'],
    jobPosition: 'Software Engineer',
    jobPositionLevel: DataModel.JobPositionLevel.Middle,
    solutionsOfHowToImplement: [],
    jobSummaries: [
        'participate in the design and development of all projects ',
        'responsible for the release quality of all system',
        "responsible for team's recruitment, technical training(ES6), etc",
        'take charge of annual feature planning and appraise performance of each team member'
    ],
    achievements: [
        {
            text: 'Used different technologies to start new project, like React, React-Native, Vue',
            categories: ['FE']
        },
        {
            text: 'Used shell scripts to improve the development efficiency of CRUD classes',
            categories: ['Java']
        },
        {
            text: "completed the design and development of the company's Front-End UI component library",
            categories: ['UI']
        }
    ]
});
const baixinCompany = new Company({
    name: 'Citic Baixin Bank Co. Ltd',
    type: DataModel.CompanyType.Enterprise,
    location: 'Beijing, China'
});
const periodThree = new Period({
    start: new Date('2018-04-01T00:00:00Z'),
    end: new Date('2019-06-01T00:00:00Z'),
    company: baixinCompany,
    keywords: ['Vue', 'React', 'Waterfall'],
    jobPosition: 'Front-End Engineer',
    jobPositionLevel: DataModel.JobPositionLevel.Middle,
    solutionsOfHowToImplement: [],
    jobSummaries: [
        'become the core developer in Front-End team',
        'communicate with product manager and UI designer partner through meeting to understand project requirements',
        'responsible for task assignment and project requirement explanation to 5 team members',
        'provide training and guidance on technical to junior engineer'
    ],
    achievements: [
        {
            text: "completed the design and development of company's Front-End UI component library",
            categories: ['UI']
        }
    ]
});
const pccwCompany = new Company({
    name: 'PCCW GLOBAL',
    type: DataModel.CompanyType.Enterprise,
    location: 'Beijing, China'
});
const periodFour = new Period({
    start: new Date('2019-09-01T00:00:00Z'),
    end: new Date('2022-05-01T00:00:00Z'),
    company: pccwCompany,
    keywords: ['React', 'NextJs', 'umi', 'TDD', 'Agile'],
    jobPosition: 'Software Engineer',
    jobPositionLevel: DataModel.JobPositionLevel.Senior,
    solutionsOfHowToImplement: [],
    jobSummaries: [
        'become the core developer in Front-End team',
        'make the architecture design in Front-End project',
        'communicate with product manager and UI designer to understand project requirements every week (one sprint),',
        'conduct functional research and validation based on business requirements, evaluate requirements implementation feasibility and propose solutions.',
        'responsible for task assignment and project requirement explanation to 5 external team members',
        'provide training and guidance on technical to junior engineer'
    ],
    achievements: [
        {
            text: "Designed and developed low-code form modules to improve the company's efficiency in custom dynamic form releases",
            categories: ['low-code']
        },
        {
            text: 'defined the Best practices in FE project with React and Typescript.',
            categories: ['Architecture']
        },
        {
            text: 'used Micro Front-End Service to split code and improve the performance in FE',
            categories: ['Performance', 'Engineering']
        },
        {
            text: "designed and developed the company's Front-End UI component library",
            categories: ['UI']
        },
        {
            text: 'setup the Front-End CI/CD with system Engineers, including the Docker building and the jest process',
            categories: ['CI/CD', 'Engineering']
        },
        {
            text: 'setup the utils library in FE',
            categories: ['Engineering']
        }
    ]
});
const teslaCompany = new Company({
    name: 'Tesla',
    type: DataModel.CompanyType.Enterprise,
    location: 'Beijing, China'
});
const periodFive = new Period({
    start: new Date('2022-05-23T00:00:00Z'),
    company: teslaCompany,
    keywords: ['React', 'Agile'],
    jobPosition: 'Software Engineer',
    jobPositionLevel: DataModel.JobPositionLevel.Senior,
    solutionsOfHowToImplement: [],
    jobSummaries: [
        'become the core developer in Front-End team',
        'make the architecture design in Front-End project',
        'improve the code quality and performance',
        'improve the FE team efficiency',
        'communicate with product manager and UI designer to understand project requirements every 2 weeks (one sprint)',
        'provide training and guidance on technical'
    ],
    achievements: [
        {
            text: 'completed the design and development of common utils and Hooks in React project',
            categories: ['Engineering']
        },
        {
            text: 'optimized the Front-End code',
            categories: ['Performance']
        },
        {
            text: 'improved the code quality',
            categories: ['Quality']
        }
    ]
});
madison.addPeriods([periodOne, periodTwo, periodThree, periodFour, periodFive]);

const skills = [
    new Skill('React', DataModel.SkillLevel.proficient, 5, DataModel.Importance.Essential),
    new Skill('TypeScript', DataModel.SkillLevel.proficient, 3, DataModel.Importance.Essential),
    new Skill('JavaScript', DataModel.SkillLevel.proficient, 7, DataModel.Importance.Essential),
    new Skill('Redux/MobX', DataModel.SkillLevel.proficient, 3, DataModel.Importance.Essential),
    new Skill('HTML & CSS', DataModel.SkillLevel.proficient, 6, DataModel.Importance.Essential),
    new Skill('GIT', DataModel.SkillLevel.proficient, 6, DataModel.Importance.Essential),
    new Skill('Jest', DataModel.SkillLevel.familiar, 3, DataModel.Importance.Essential),
    new Skill('Node', DataModel.SkillLevel.familiar, 2, DataModel.Importance.Advanced),
    new Skill('Java', DataModel.SkillLevel.familiar, 3, DataModel.Importance.Advanced),
    new Skill('Vue', DataModel.SkillLevel.proficient, 1.5, DataModel.Importance.Advanced),
    new Skill('Database/SQL', DataModel.SkillLevel.familiar, 2, DataModel.Importance.Advanced),
    new Skill('Electron', DataModel.SkillLevel.familiar, 1, DataModel.Importance.Advanced),
    new Skill('Docker', DataModel.SkillLevel.understand, 0.5, DataModel.Importance.Advanced),
    new Skill('C#', DataModel.SkillLevel.understand, 0.5, DataModel.Importance.Advanced)
];
madison.addSkills(skills);

const capabilities = new Capability({
    problemSolving: 8.8,
    dataStructure: 9,
    algorithm: 8,
    communicate: 9.5,
    engineer: 8,
    passion: 9
});
madison.addCapability(capabilities);
export default madison;
