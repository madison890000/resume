import Period from '../Period'
import { Achievement, JobPositionLevel, Keyword } from '../types';
import Company from '../Company';

describe('Period class', () => {
    test('period should have basic properties', () => {
        const testCompanyName = 'test company name'
        const testCompany = new Company({
            name: testCompanyName,
        })
        const start = new Date('2012-01-01');
        const end = new Date('2013-01-01');
        const keywords = ['React'] as Keyword[];
        const jobPositionLevel = JobPositionLevel.Senior;
        const jobPosition = 'Software Engineer';
        const achievements = [] as Achievement[];
        const jobSummaries = [] as string[];
        const testPeriod = new Period({
            solutionsOfHowToImplement: [],
            company: testCompany,
            jobSummaries,
            jobPositionLevel,
            jobPosition,
            achievements,
            start,
            end,
            keywords
        });
        expect(testPeriod.company)
            .toEqual(testCompany);
        expect(testPeriod.start)
            .toEqual(start);
        expect(testPeriod.end)
            .toEqual(end);
        expect(testPeriod.keywords)
            .toEqual(keywords);
        expect(testPeriod.achievements)
            .toEqual(achievements);
        expect(testPeriod.jobPosition)
            .toEqual(jobPosition);
        expect(testPeriod.jobPositionLevel)
            .toEqual(jobPositionLevel);
        expect(testPeriod.jobSummaries)
            .toEqual(jobSummaries);

    })
})
