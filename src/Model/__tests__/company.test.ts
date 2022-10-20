import Base from '../Base'

describe('Base class', () => {
    test('Base should have id', () => {
        const testBase = new Base()
        expect(typeof testBase.id)
            .toBe('string');
    });
    test('Base should have id', () => {
        const testBase = new Base();
        expect(testBase.id.length)
            .toEqual(36);
    })
})
