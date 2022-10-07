import React from 'react';
import Name from '../Name';
import renderer from 'react-test-renderer';
import { Importance } from '../../../lib/types';

describe('renders Name ', () => {

    test('Name --->level = important', () => {
        const nameImportant = renderer.create(
            <Name
                level={Importance.important}
            >understand normal Skill</Name>
        )
            .toJSON();
        expect(nameImportant)
            .toMatchSnapshot();
    });

    test('Name --->level = normal', () => {
        const nameNormal = renderer.create(
            <Name
                level={Importance.normal}
            >understand normal Skill</Name>
        )
            .toJSON();
        expect(nameNormal)
            .toMatchSnapshot();
    });

    test('Name --->level = less', () => {
        const nameLess = renderer.create(
            <Name
                level={Importance.less}
            >understand normal Skill</Name>
        )
            .toJSON();
        expect(nameLess)
            .toMatchSnapshot();
    });

})
