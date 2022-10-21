import React from 'react';
import Name from '../Name';
import renderer from 'react-test-renderer';
import DataModel from '../../../models/types';

describe('renders Name ', () => {
    test('Name --->level = important', () => {
        const nameImportant = renderer.create(<Name level={DataModel.Importance.important}>understand normal Skill</Name>).toJSON();
        expect(nameImportant).toMatchSnapshot();
    });

    test('Name --->level = normal', () => {
        const nameNormal = renderer.create(<Name level={DataModel.Importance.normal}>understand normal Skill</Name>).toJSON();
        expect(nameNormal).toMatchSnapshot();
    });

    test('Name --->level = less', () => {
        const nameLess = renderer.create(<Name level={DataModel.Importance.less}>understand normal Skill</Name>).toJSON();
        expect(nameLess).toMatchSnapshot();
    });
});
