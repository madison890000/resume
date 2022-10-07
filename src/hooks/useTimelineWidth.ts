import { useEffect, useState } from 'react';
import { getPageContentWidth } from '../utils/device';


const useTimelineWidth = ()=>{
    const [timelineWidth, setTimelineWidth] = useState<number>();
    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            setTimelineWidth(getPageContentWidth())
        })
        resizeObserver.observe(document.body);
        return () => resizeObserver.disconnect()
    }, []);
    return {
        timelineWidth:timelineWidth,
    }
}

export default useTimelineWidth
