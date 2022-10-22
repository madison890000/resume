import React from 'react';
import Education from '../index';
import renderer from 'react-test-renderer';
import DataModel from '../../../models/types';

test('renders Education Bachelor', () => {
    const start = new Date('2012-01-01');
    const end = new Date('2013-01-01');
    const EducationDom = renderer.create(<Education start={start} end={end} college="test college" degree={DataModel.Degree.Bachelor} major="test major" />).toJSON();
    expect(EducationDom).toMatchSnapshot();
});
test('renders Education Master', () => {
    const start = new Date('2012-01-01');
    const end = new Date('2013-01-01');
    const EducationDom = renderer.create(<Education start={start} end={end} college="test college" degree={DataModel.Degree.Master} major="test major" />).toJSON();
    expect(EducationDom).toMatchSnapshot();
});
test('renders Education PhD', () => {
    const start = new Date('2012-01-01');
    const end = new Date('2013-01-01');
    const EducationDom = renderer.create(<Education start={start} end={end} college="test college" degree={DataModel.Degree.PhD} major="test major" />).toJSON();
    expect(EducationDom).toMatchSnapshot();
});
