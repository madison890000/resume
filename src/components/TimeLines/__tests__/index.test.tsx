import React from 'react';
import TimeLines from '../index';
import renderer from 'react-test-renderer';
import DataModel from '../../../models/types';
import Company from '../../../models/Company';
import Period from '../../../models/Period';

let windowSpy: any;

beforeEach(() => {
    windowSpy = jest.spyOn(window, 'window', 'get');
});

afterEach(() => {
    windowSpy.mockRestore();
});
describe('renders TimeLine ', () => {
    const testCompanyName = 'test company name';
    const testCompany = new Company({
        name: testCompanyName,
        type: DataModel.CompanyType.Startup
    });
    const start = new Date('2012-01-01');
    const end = new Date('2013-01-01');
    const keywords = ['React'];
    const jobPositionLevel = DataModel.JobPositionLevel.Senior;
    const jobPosition = 'Software Engineer';
    const achievements = [] as DataModel.IAchievement[];
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
    test('TimeLine one period', () => {
        const TimeLineOne = renderer
            .create(
                <TimeLines
                    periods={[testPeriod]}
                    periodColors={{
                        [testPeriod.id]: '#FF6666'
                    }}
                    width={1000}
                />
            )
            .toJSON();
        expect(TimeLineOne).toMatchSnapshot();
    });
});
