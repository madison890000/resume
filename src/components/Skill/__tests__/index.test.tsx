import React from 'react';
import Skill from '../index';
import renderer from 'react-test-renderer';
import DataModel from '../../../Model/types';

describe('renders Skill ', () => {
    test('Skill --->level = understand', () => {
        const SkillUnderstandNormal = renderer.create(<Skill name="understand normal Skill" ages={5} level={DataModel.SkillLevel.understand} importance={DataModel.Importance.normal} />).toJSON();
        expect(SkillUnderstandNormal).toMatchSnapshot();
        const SkillUnderstandLess = renderer.create(<Skill name="understand less Skill" ages={5} level={DataModel.SkillLevel.understand} importance={DataModel.Importance.less} />).toJSON();
        expect(SkillUnderstandLess).toMatchSnapshot();
        const SkillUnderstandImportant = renderer
            .create(<Skill name="understand important Skill" ages={5} level={DataModel.SkillLevel.understand} importance={DataModel.Importance.important} />)
            .toJSON();
        expect(SkillUnderstandImportant).toMatchSnapshot();
    });

    test('Skill --->level = familiar', () => {
        const SkillFamiliarNormal = renderer.create(<Skill name="familiar normal Skill" ages={5} level={DataModel.SkillLevel.familiar} importance={DataModel.Importance.normal} />).toJSON();
        expect(SkillFamiliarNormal).toMatchSnapshot();
        const SkillFamiliarLess = renderer.create(<Skill name="familiar less Skill" ages={5} level={DataModel.SkillLevel.familiar} importance={DataModel.Importance.less} />).toJSON();
        expect(SkillFamiliarLess).toMatchSnapshot();
        const SkillFamiliarImportant = renderer.create(<Skill name="familiar important Skill" ages={5} level={DataModel.SkillLevel.familiar} importance={DataModel.Importance.important} />).toJSON();
        expect(SkillFamiliarImportant).toMatchSnapshot();
    });

    test('Skill --->level = proficient', () => {
        const SkillProficientNormal = renderer.create(<Skill name="proficient normal Skill" ages={5} level={DataModel.SkillLevel.proficient} importance={DataModel.Importance.normal} />).toJSON();
        expect(SkillProficientNormal).toMatchSnapshot();
        const SkillProficientLess = renderer.create(<Skill name="proficient less Skill" ages={5} level={DataModel.SkillLevel.understand} importance={DataModel.Importance.less} />).toJSON();
        expect(SkillProficientLess).toMatchSnapshot();
        const SkillProficientImportant = renderer
            .create(<Skill name="proficient important Skill" ages={5} level={DataModel.SkillLevel.understand} importance={DataModel.Importance.important} />)
            .toJSON();
        expect(SkillProficientImportant).toMatchSnapshot();
    });
});
