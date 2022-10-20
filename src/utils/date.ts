import Period from '../Model/Period';

const READABLE_MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const translateToReadableMonth = (month: number) => READABLE_MONTHS[month]?.slice(0, 3)

export const formatDate = (time: Date) => {
    return `${translateToReadableMonth(time.getMonth())}, ${time.getFullYear()}`
}

const getFullMonth = (time: Date) => {
    return time.getFullYear() * 12 + time.getMonth()
}
export const findPeriodByDate = (time: Date, periods: Period[]) =>
    periods?.find(p => {
        const notBefore = getFullMonth(p?.start) <= getFullMonth(time)
        const notAfter = getFullMonth(p?.end ?? new Date()) >= getFullMonth(time)
        return notBefore && notAfter
    })
export const getMonthCountFromStartAndEnd = (start: Date, end: Date) => {
    const years = end.getFullYear() - start.getFullYear();
    if (years) {
        return 12 - start.getMonth() + (years - 1) * 12 + end.getMonth();
    }
    return end.getMonth() - start.getMonth();
}
