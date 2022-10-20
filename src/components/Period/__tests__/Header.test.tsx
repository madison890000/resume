import React from 'react';
import Header from '../Header';
import renderer from 'react-test-renderer';
import DataModel from '../../../Model/types';

test('renders Period Header', () => {
    const testCompanyName = 'test company name'
    const keywords = ['React'] as DataModel.Keyword[];
    const jobPositionLevel = DataModel.JobPositionLevel.Senior;
    const jobPosition = 'Software Engineer';
    const HeaderDom = renderer.create(
        <Header
            jobPosition={jobPosition}
            jobPositionLevel={jobPositionLevel}
            companyName={testCompanyName}
            keywords={keywords}
        />
    )
        .toJSON();
    expect(HeaderDom)
        .toMatchSnapshot();
});
