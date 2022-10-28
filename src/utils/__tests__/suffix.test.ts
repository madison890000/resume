import { addPeriodSuffix } from '../suffix';

describe('utils -----> capitalize ', () => {
    test('capitalize: make first letter to be uppercase', () => {
        expect(addPeriodSuffix('test')).toBe('test.');
        expect(addPeriodSuffix('')).toBe('.');
        expect(addPeriodSuffix('abcs')).toBe('abcs.');
        expect(addPeriodSuffix('abcs def')).toBe('abcs def.');
    });
});
