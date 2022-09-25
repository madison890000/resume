import React from 'react';
import Skill from '../index';
import renderer from 'react-test-renderer';
import { Importance, SkillLevel } from '../../../lib/types';

describe('renders Skill ', () => {

    test('Skill --->level = understand', () => {
        const SkillUnderstandNormal = renderer.create(
            <Skill
                name="understand normal Skill"
                ages={5}
                level={SkillLevel.understand}
                importance={Importance.normal}
            />
        )
            .toJSON();
        expect(SkillUnderstandNormal)
            .toMatchSnapshot();
        const SkillUnderstandLess = renderer.create(
            <Skill
                name="understand less Skill"
                ages={5}
                level={SkillLevel.understand}
                importance={Importance.less}
            />
        )
            .toJSON();
        expect(SkillUnderstandLess)
            .toMatchSnapshot();
        const SkillUnderstandImportant = renderer.create(
            <Skill
                name="understand important Skill"
                ages={5}
                level={SkillLevel.understand}
                importance={Importance.important}
            />
        )
            .toJSON();
        expect(SkillUnderstandImportant)
            .toMatchSnapshot();
    });

    test('Skill --->level = familiar', () => {
        const SkillFamiliarNormal = renderer.create(
            <Skill
                name="familiar normal Skill"
                ages={5}
                level={SkillLevel.familiar}
                importance={Importance.normal}
            />
        )
            .toJSON();
        expect(SkillFamiliarNormal)
            .toMatchSnapshot();
        const SkillFamiliarLess = renderer.create(
            <Skill
                name="familiar less Skill"
                ages={5}
                level={SkillLevel.familiar}
                importance={Importance.less}
            />
        )
            .toJSON();
        expect(SkillFamiliarLess)
            .toMatchSnapshot();
        const SkillFamiliarImportant = renderer.create(
            <Skill
                name="familiar important Skill"
                ages={5}
                level={SkillLevel.familiar}
                importance={Importance.important}
            />
        )
            .toJSON();
        expect(SkillFamiliarImportant)
            .toMatchSnapshot();
    });

    test('Skill --->level = proficient', () => {
        const SkillProficientNormal = renderer.create(
            <Skill
                name="proficient normal Skill"
                ages={5}
                level={SkillLevel.proficient}
                importance={Importance.normal}
            />
        )
            .toJSON();
        expect(SkillProficientNormal)
            .toMatchSnapshot();
        const SkillProficientLess = renderer.create(
            <Skill
                name="proficient less Skill"
                ages={5}
                level={SkillLevel.understand}
                importance={Importance.less}
            />
        )
            .toJSON();
        expect(SkillProficientLess)
            .toMatchSnapshot();
        const SkillProficientImportant = renderer.create(
            <Skill
                name="proficient important Skill"
                ages={5}
                level={SkillLevel.understand}
                importance={Importance.important}
            />
        )
            .toJSON();
        expect(SkillProficientImportant)
            .toMatchSnapshot();
    });

})
