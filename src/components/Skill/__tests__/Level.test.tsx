import React from 'react';
import Level from '../Level';
import renderer from 'react-test-renderer';

describe('renders Level ', () => {
    test('Level --->level = Understand', () => {
        const levelUnderstand = renderer.create(<Level.Understand />).toJSON();
        expect(levelUnderstand).toMatchSnapshot();
    });

    test('Level --->level = Familiar', () => {
        const levelUnderstand = renderer.create(<Level.Familiar />).toJSON();
        expect(levelUnderstand).toMatchSnapshot();
    });

    test('Level --->level = Proficient', () => {
        const levelUnderstand = renderer.create(<Level.Proficient />).toJSON();
        expect(levelUnderstand).toMatchSnapshot();
    });
});
