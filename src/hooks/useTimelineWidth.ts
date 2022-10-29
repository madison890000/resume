import { useEffect, useState } from 'react';
import { getPageContentWidth } from '../utils/device';
import { DEFAULT_TIMELINE_WIDTH } from '../constants/widths';

const useTimelineWidth = () => {
    const [timelineWidth, setTimelineWidth] = useState<number>(DEFAULT_TIMELINE_WIDTH);
    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            setTimelineWidth(getPageContentWidth());
        });
        resizeObserver.observe(document.body);
        return () => resizeObserver.disconnect();
    }, []);
    return {
        timelineWidth: timelineWidth
    };
};

export default useTimelineWidth;
