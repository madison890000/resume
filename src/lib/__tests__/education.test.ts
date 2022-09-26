import Education from '../Education'
import { Degree } from '../types';

describe('Education class', () => {
    test('education should have basic properties', () => {
        const college = 'test college'
        const major = 'Computer Science'
        const degree = Degree.Bachelor;
        const start = new Date('2010-01-01');
        const end = new Date('2014-01-01');
        const testEducation = new Education({
            college,
            major,
            degree,
            start,
            end
        })
        expect(testEducation.college)
            .toEqual(college);
        expect(testEducation.major)
            .toEqual(major);
        expect(testEducation.degree)
            .toEqual(degree);
        expect(testEducation.start)
            .toEqual(start);
        expect(testEducation.end)
            .toEqual(end);
    })
})
