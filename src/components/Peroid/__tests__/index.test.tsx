import React from 'react';
import Period from '../index';
import renderer from 'react-test-renderer';
import { Achievement, JobPositionLevel, Keyword } from '../../../lib/types';

test('renders Period', () => {
    const testCompanyName = 'test company name'
    const start = new Date('2012-01-01');
    const end = new Date('2013-01-01');
    const keywords = ['React'] as Keyword[];
    const jobPositionLevel = JobPositionLevel.Senior;
    const jobPosition = 'Software Engineer';
    const achievements = [] as Achievement[];
    const jobSummaries = [] as string[];
    const PeriodDom = renderer.create(
        <Period
            start={start}
            end={end}
            keywords={keywords}
            jobPositionLevel={jobPositionLevel}
            jobPosition={jobPosition}
            achievements={achievements}
            jobSummaries={jobSummaries}
            companyName={testCompanyName}
        />
    )
        .toJSON();
    expect(PeriodDom)
        .toMatchSnapshot();
});
