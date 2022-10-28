import Person from '../Person';
import DataModel from '../types';
import Company from '../Company';
import Education from '../Education';
import Period from '../Period';
import Skill from '../Skill';

const birthDay = new Date('1989-10-25T00:00:00Z');
const madison = new Person({
    firstName: 'Madison',
    lastName: 'Ma',
    birthDay,
    email: 'madison.sss.ma@gmail.com',
    cellphone: '+8618510163161',
    country: 'China',
    gender: 'MALE',
    description: [
        'I have 7 years of working experience in IT with solid technical background, proficient in modern JavaScript/TypeScript programming frameworks, tools, and libraries. ',
        'I Have rich experience in Front-End and Back-End development including Admin Portal and Customer Portal in Online Sale Web\n' +
            'Application, Internet finance Web System, education application, Data Reporting Web Page, etc.',
        'I am both a good team leader and team member. ' +
            'I am a person who is passionate about life, friendly to people, willing to share, and like to work with colleagues to make the world to be a better place.'
    ]
});

const masterEducation = new Education({
    major: 'Geographical Information System',
    college: 'China Agricultural University',
    degree: DataModel.Degree.Master,
    start: new Date('2012-09-01T00:00:00Z'),
    end: new Date('2015-07-01T00:00:00Z')
});

madison.addEducations([masterEducation]);

const taijiCompany = new Company({
    name: 'Taiji Computer Corporation Limited',
    location: 'Beijing, China',
    type: DataModel.CompanyType.Startup
});
const periodOne = new Period({
    start: new Date('2015-07-01T00:00:00Z'),
    end: new Date('2016-07-01T00:00:00Z'),
    company: taijiCompany,
    keywords: ['Java', 'jQuery'],
    jobPosition: 'Software Engineer',
    jobPositionLevel: DataModel.JobPositionLevel.Junior,
    solutionsOfHowToImplement: [],
    jobSummaries: ['use Java to develop system on schedule', 'participate in the design and development of one economic-data-report project.'],
    achievements: [
        {
            text: 'abstract 10+ components to unify UI style of most company projects, including table, form input, file upload, etc',
            categories: ['UI']
        }
    ] as DataModel.IAchievement[]
});
const periodTwo = new Period({
    start: new Date('2016-07-01T00:00:00Z'),
    end: new Date('2017-07-01T00:00:00Z'),
    company: taijiCompany,
    keywords: ['Java', 'jQuery'],
    jobPosition: 'Software Engineer',
    jobPositionLevel: DataModel.JobPositionLevel.Junior,
    solutionsOfHowToImplement: [],
    jobSummaries: ['use Java to develop system on schedule', 'participate in the design and development of one economic-data-report project.'],
    achievements: [
        {
            text: 'abstract 10+ components to unify UI style of most company projects, including table, form input, file upload, etc',
            categories: ['UI']
        }
    ] as DataModel.IAchievement[]
});
madison.addPeriods([periodOne, periodTwo]);

const skills = [new Skill('JavaScript', DataModel.SkillLevel.proficient, 7, DataModel.Importance.important), new Skill('React', DataModel.SkillLevel.proficient, 5, DataModel.Importance.important)];
madison.addSkills(skills);

describe('Person class', () => {
    test('Person should have basic properties', () => {
        expect(madison.firstName).toEqual('Madison');
        expect(madison.lastName).toEqual('Ma');
        expect(madison.birthDay).toEqual(birthDay);
        expect(madison.email).toEqual('madison.sss.ma@gmail.com');
        expect(madison.cellphone).toEqual('+8618510163161');
        expect(madison.country).toEqual('China');
        expect(madison.gender).toEqual('male');
        expect(madison.description.map(e => e.toString())).toEqual([
            'I have 7 years of working experience in IT with solid technical background, proficient in modern JavaScript/TypeScript programming frameworks, tools, and libraries. ',
            'I Have rich experience in Front-End and Back-End development including Admin Portal and Customer Portal in Online Sale Web\n' +
                'Application, Internet finance Web System, education application, Data Reporting Web Page, etc.',
            'I am both a good team leader and team member. ' +
                'I am a person who is passionate about life, friendly to people, willing to share, and like to work with colleagues to make the world to be a better place.'
        ]);
    });
    test('Person should have educations', () => {
        expect(madison.educations).toEqual([masterEducation]);
    });
    test('Person should have skills', () => {
        expect(madison.skills).toEqual(skills);
    });
    test('Person should have periods', () => {
        expect(madison.periods).toEqual([periodOne, periodTwo]);
    });
    test('Person should reverse periods by index when getting reversedPeriods', () => {
        expect(madison.reversedPeriods).toEqual([periodTwo, periodOne]);
    });
});
