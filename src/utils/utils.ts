import { TUserFilter } from '@/types/types';
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



export function getUserFilterInputPlaceholderText(filterType:TUserFilter):string{
    switch (filterType) {
        case "name":
            return "Enter name";
        case "email":
            return "Enter email";
        case "domain":
            return "Enter domain URL";
        case "subscription":
            return "Ex: silver/gold/diamond/trial";
        case "status":
            return "Ex: pending / enabled / disabled/ deleted / blocked";
        default:
            return "Enter name"
    }
}