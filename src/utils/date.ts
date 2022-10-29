import { MONTH_NUMBER_OF_ONE_YEAR, READABLE_MONTHS } from '../constants/date';

const translateToReadableMonth = (month: number) => READABLE_MONTHS[month]?.slice(0, 3);

export const formatDate = (time: Date) => {
    return `${translateToReadableMonth(time.getMonth())}, ${time.getFullYear()}`;
};

const getFullMonth = (time: Date) => {
    return time.getFullYear() * MONTH_NUMBER_OF_ONE_YEAR + time.getMonth();
};

export function findPeriodByDate<T>(time: Date, periods: (T & { start: Date; end?: Date })[]) {
    return periods?.find(p => {
        const notBefore = getFullMonth(p?.start) <= getFullMonth(time);
        const notAfter = getFullMonth(p?.end ?? new Date()) >= getFullMonth(time);
        return notBefore && notAfter;
    });
}

export const getMonthCountFromStartAndEnd = (start: Date, end: Date) => {
    const years = end.getFullYear() - start.getFullYear();
    if (years) {
        return MONTH_NUMBER_OF_ONE_YEAR - start.getMonth() + (years - 1) * MONTH_NUMBER_OF_ONE_YEAR + end.getMonth();
    }
    return end.getMonth() - start.getMonth();
};
