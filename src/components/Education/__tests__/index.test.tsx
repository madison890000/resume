import React from 'react';
import Education from '../index';
import renderer from 'react-test-renderer';
import { Degree } from '../../../lib/types';

test('renders Education Bachelor', () => {
    const start = new Date('2012-01-01');
    const end = new Date('2013-01-01');
    const EducationDom = renderer.create(
        <Education
            start={start}
            end={end}
            college="test college"
            degree={Degree.Bachelor}
            major="test major"
        />
    )
        .toJSON();
    expect(EducationDom)
        .toMatchSnapshot();
});
test('renders Education Master', () => {
    const start = new Date('2012-01-01');
    const end = new Date('2013-01-01');
    const EducationDom = renderer.create(
        <Education
            start={start}
            end={end}
            college="test college"
            degree={Degree.Master}
            major="test major"
        />
    )
        .toJSON();
    expect(EducationDom)
        .toMatchSnapshot();
});
test('renders Education PhD', () => {
    const start = new Date('2012-01-01');
    const end = new Date('2013-01-01');
    const EducationDom = renderer.create(
        <Education
            start={start}
            end={end}
            college="test college"
            degree={Degree.PhD}
            major="test major"
        />
    )
        .toJSON();
    expect(EducationDom)
        .toMatchSnapshot();
});
