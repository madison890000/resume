import pipe from '../pipe';

describe('utils -----> pipe ', () => {
    test('pipe: make pipe functions', () => {
        const add = (a: number) => a + 4;
        const sub = (a: number) => a - 2;
        expect(pipe(add, sub)(2)).toBe(4);
        expect(pipe(add, sub)(3)).toBe(5);
        expect(pipe(add, add, sub)(2)).toBe(8);
        expect(pipe(add, sub, sub)(2)).toBe(2);
    });
});
