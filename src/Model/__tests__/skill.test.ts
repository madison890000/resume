import Skill from '../Skill'
import { Importance, SkillLevel } from '../types';

describe('Skill class', () => {
    test('skill should have basic properties', () => {
        const skillName = 'React';
        const skillLevel = SkillLevel.understand;
        const importance = Importance.normal;
        const ages = 5;
        const testSkill = new Skill(skillName, skillLevel, ages, importance);
        expect(testSkill.name)
            .toEqual(skillName);
        expect(testSkill.level)
            .toEqual(skillLevel);
        expect(testSkill.importance)
            .toEqual(importance);
        expect(testSkill.ages)
            .toEqual(ages);
    })
})
