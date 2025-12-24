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



export function getUserFilterInputPlaceholderText(filterType: TUserFilter): string {
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
import { jwtDecode } from "jwt-decode";
import { deleteToken, getToken } from './token';

export function decodeToken(jwttoken: string | null = null): TDecodedToken | null {
  try {
    const token = jwttoken || getToken("accessToken");

    if (!token) return null;

    const decoded = jwtDecode(token) as TDecodedToken;
    return decoded;
  } catch (err) {
    return null;
  }
}


export function getRole(token: string): TUserRole | null {
  const decoded = decodeToken(token);
  if (!decoded) return null;
  return decoded.role;
}

export function isTokenExpired(token?: string): boolean {
  const decoded = decodeToken(token);

  // no expiry? treat as expired
  if (!decoded || !decoded.exp) return true;

  if (decoded.exp < (Date.now() / 1000)) {
    deleteToken("accessToken")
    return true;
  }

  return false;
}


export const buildUserFilterQuery = (key: TUserFilter, value: string, currentPage: number) => {
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

export const buildExpiredUserFilterQuery = (key: TUserFilter, value: string, currentPage: number) => {
  const limit = 20;
  const params = new URLSearchParams({
    "expired": "true",
    [key]: value,
    page: currentPage.toString(),
    limit: `${limit}`,
  });

  // Build query for name,email,status,domain,subscription,page,
  const query = params.toString();
  return query;
};

export const removeProtocolRegex = (url: string) => {
  const protocolRegex = /^\w+:\/\//i;
  return url.replace(protocolRegex, '');
};


export function formatDateForDisplay(dateString: string): string {
  const date = new Date(dateString);

  // Format parts
  const formattedDate = format(date, "dd-MM-yy HH:mm:ss");

  // Get timezone offset in hours (e.g., +06)
  const offsetMinutes = date.getTimezoneOffset(); // in minutes
  const offsetHours = -offsetMinutes / 60;
  const sign = offsetHours >= 0 ? "+" : "-";
  const formattedOffset = `${sign}${String(Math.abs(offsetHours)).padStart(2, "0")}`;

  return `${formattedDate} GMT${formattedOffset}`;
}

export function isDateExpired(date: string | Date): boolean {
  const expiryDate = new Date(date);
  const now = new Date();
  return expiryDate.getTime() <= now.getTime();
}

export function msToTimeString(ms: number): string {
  if (ms < 0) {
    ms = 0;
  }

  let totalSeconds = Math.floor(ms / 1000);

  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;

  const minutes = Math.floor(totalSeconds / 60);

  const seconds = totalSeconds % 60;

  let timeString = '';

  // 1. Add Hours
  if (hours > 0) {
    timeString += `${hours}h `;
  }

  // 2. Add Minutes
  if (minutes > 0) {
    timeString += `${minutes}m `;
  }

  // 3. Add Seconds (Always included)
  timeString += `${seconds}s`;

  return timeString.trim();
}

export const splitUrlIntoSpans = (urlString: string) => {
  return urlString.split('');
};
