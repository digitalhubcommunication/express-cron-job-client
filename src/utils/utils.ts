import { TDecodedToken, TUserFilter, TUserRole } from '@/types/types';
import { format } from 'date-fns';

export function getExpiryText(date: Date | string): { label: string, date: string } {
    const inputDate = typeof date === 'string' ? new Date(date) : date;
    const now = new Date();
    const formattedDateTime = format(inputDate, 'dd MMMM yyyy, hh:mm a');
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


export function generateMongoId(): string {
  const chars = 'abcdef0123456789';
  let str = '';
  for (let i = 0; i < 24; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
}


// get the user role from token
import {jwtDecode} from "jwt-decode";
import { deleteToken, getToken } from './token';

export function decodeToken(jwttoken:string | null = null):TDecodedToken | null {
  try {
    const token = jwttoken || getToken();

    if(!token) return null;

    const decoded = jwtDecode(token) as TDecodedToken;
    return decoded;
  } catch (err) {
    return null;
  }
}


export function getRole(token:string):TUserRole | null {
    const decoded = decodeToken(token);
    if(!decoded) return null;
    return decoded.role;
}

export function isTokenExpired(token?:string):boolean{
     const decoded = decodeToken(token);

    // no expiry? treat as expired
     if(!decoded || !decoded.exp) return true;

     if(decoded.exp < (Date.now() / 1000)){
        deleteToken()
        return true;
     }
     
    return false;
}



  export const buildUserFilterQuery = (key: TUserFilter, value: string, currentPage:number) => {
    const limit = 20;
    const params = new URLSearchParams({
      [key]: value,
      page: currentPage.toString(),
      limit: `${limit}`,
    });

    // Build query for name,email,status,domain,subscription,page,
    const query = params.toString();
    return query;
  };