import { renderHook } from '@testing-library/react';
import useTimelineWidth from '../useTimelineWidth';
import ResizeObserver from '../../__mocks__/ResizeObserver';

let originWindow: any;

beforeEach(() => {
    window.ResizeObserver = ResizeObserver;
    originWindow = {
        innerWidth: window.innerWidth,
        outerWidth: window.outerWidth
    };
    // noinspection JSConstantReassignment
    window.innerWidth = 1800;
    // noinspection JSConstantReassignment
    window.outerWidth = 1800;
});

afterEach(() => {
    // noinspection JSConstantReassignment
    window.innerWidth = originWindow.innerWidth;
    // noinspection JSConstantReassignment
    window.outerWidth = originWindow.outerWidth;
});

describe('useTimeLineWidth', () => {
    test('returns correct width', () => {
        window.ResizeObserver = ResizeObserver;
        const { result } = renderHook(() => useTimelineWidth());
        expect(result.current.timelineWidth).toEqual(1776);
    });
});
