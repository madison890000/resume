import Skill from '../Skill';
import DataModel from '../types';

describe('Skill class', () => {
    test('skill should have basic properties', () => {
        const skillName = 'React';
        const skillLevel = DataModel.SkillLevel.understand;
        const importance = DataModel.Importance.normal;
        const ages = 5;
        const testSkill = new Skill(skillName, skillLevel, ages, importance);
        expect(testSkill.name).toEqual(skillName);
        expect(testSkill.level).toEqual(skillLevel);
        expect(testSkill.importance).toEqual(importance);
        expect(testSkill.ages).toEqual(ages);
    });
});
