import StringWithID from '../StringWithID';

describe('StringWithID class', () => {
    test('StringWithID should have id', () => {
        const testBase = new StringWithID('test string');
        expect(typeof testBase.id).toBe('string');
    });
    test('StringWithID should have id with length 36', () => {
        const testBase = new StringWithID('test string');
        expect(testBase.id.length).toEqual(36);
    });
    test('StringWithID should have toString function', () => {
        const testBase = new StringWithID('test string');
        expect(testBase.toString()).toEqual('test string');
    });
});
