import { format } from 'date-fns';

export function getExpiryText(date: Date | string): { label: string, date: string } {
    const inputDate = typeof date === 'string' ? new Date(date) : date;
    const now = new Date();
    const formattedDateTime = format(inputDate, 'dd MMMM yyyy, HH:mm a');
    let label = ''
    if (inputDate.getTime() > now.getTime()) {
        label = "Expire";
    } else {
        label = "Expired"
    }

    return { label, date: formattedDateTime }
}
