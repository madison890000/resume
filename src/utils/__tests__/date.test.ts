import { findPeriodByDate, formatDate, getMonthCountFromStartAndEnd } from '../date';
import Period from '../../models/Period';
import DataModel from '../../models/types';
import Company from '../../models/Company';

describe('utils -----> date ', () => {
    test('formatDate: show format date correctly', () => {
        expect(formatDate(new Date('2022-09-01T00:00:00'))).toBe('Sep, 2022');
        expect(formatDate(new Date('2022-09-01'))).toBe('Sep, 2022');
        expect(formatDate(new Date('2022-09-01 00:00:00'))).toBe('Sep, 2022');
        expect(formatDate(new Date('2022-09-01T00:00:00.000'))).toBe('Sep, 2022');
        expect(formatDate(new Date('2022-09-01T00:00:00.000Z'))).toBe('Sep, 2022');
    });

    test('getMonthCountInStartAndEnd : show return correct month count', () => {
        expect(getMonthCountFromStartAndEnd(new Date('2022-09-01T00:00:00'), new Date('2022-09-11T00:00:00'))).toBe(0);
        expect(getMonthCountFromStartAndEnd(new Date('2022-09-01T00:00:00'), new Date('2022-10-11T00:00:00'))).toBe(1);
        expect(getMonthCountFromStartAndEnd(new Date('2022-09-01T00:00:00'), new Date('2023-10-01T00:00:00'))).toBe(13);
    });

    test('findPeriodByDate : show return correct period', () => {
        const testCompany = new Company({
            name: 'Test Computer Corporation Limited',
            location: 'Beijing, China',
            type: DataModel.CompanyType.Startup
        });
        const testPeriod = new Period({
            start: new Date('2015-07-01T00:00:00Z'),
            end: new Date('2016-07-01T00:00:00Z'),
            company: testCompany,
            keywords: ['Java', 'jQuery'],
            jobPosition: 'Software Engineer',
            jobPositionLevel: DataModel.JobPositionLevel.Junior,
            solutionsOfHowToImplement: [],
            jobSummaries: [
                'use Java to develop system on schedule',
                'participate in the design and development of one economic-data-report project.'
            ],
            achievements: [
                {
                    text: 'abstract 10+ components to unify UI style of most company projects, including table, form input, file upload, etc',
                    categories: ['UI']
                }
            ] as DataModel.IAchievement[]
        });
        expect(findPeriodByDate(new Date('2022-09-01T00:00:00'), [testPeriod])).toBe(undefined);
        expect(findPeriodByDate(new Date('2015-09-01T00:00:00'), [testPeriod])).toBe(testPeriod);
    });
});
