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
