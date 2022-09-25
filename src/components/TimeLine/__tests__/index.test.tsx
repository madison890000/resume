import React from 'react';
import TimeLine from '../index';
import renderer from 'react-test-renderer';
import { Achievement, JobPositionLevel, Keyword } from '../../../lib/types';
import Company from '../../../lib/Company';
import Period from '../../../lib/Period';

describe('renders TimeLine ', () => {
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
    test('TimeLine one period', () => {
        const TimeLineOne = renderer.create(
            <TimeLine
                periods={[testPeriod]}
            />
        )
            .toJSON();
        expect(TimeLineOne)
            .toMatchSnapshot();
    })
});
