import { IUser } from "@/types/types";

const TOKEN_KEY = 'accessToken';

/**
 * Check if localStorage is available.
 */
function isLocalStorageAvailable(): boolean {
  try {
    const testKey = '__test__';
    window.localStorage.setItem(testKey, '1');
    window.localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    console.warn('localStorage is not available:', e);
    return false;
  }
}

/**
 * Get the access token from localStorage.
 * @returns The token string, or null if unavailable or not found.
 */
export function getToken(): string | null {
  if (!isLocalStorageAvailable()) return null;

  try {
    return window.localStorage.getItem('');
  } catch (error) {
    console.error('Error getting token from localStorage:', error);
    return null;
  }
}

/**
 * Store the access token in localStorage.
 * @param token – The JWT string to store.
 */
export function setToken(token: string): void {
  if (!isLocalStorageAvailable()) return;

  try {
    window.localStorage.setItem(TOKEN_KEY, token);
  } catch (error) {
    console.error('Error setting token in localStorage:', error);
  }
}

/**
 * Delete the access token from localStorage.
 */
export function deleteToken(): void {
  if (!isLocalStorageAvailable()) return;

  try {
    window.localStorage.removeItem(TOKEN_KEY);
  } catch (error) {
    console.error('Error deleting token from localStorage:', error);
  }
}

/**
 * Update the access token in localStorage only if it exists.
 * @param newToken – The new JWT string to replace the existing one.
 */
export function updateToken(newToken: string): void {
  if (!isLocalStorageAvailable()) return;

  try {
    const existing = window.localStorage.getItem(TOKEN_KEY);
    if (existing !== null) {
      setToken(newToken);
    } else {
      console.warn('No existing token found—nothing to update.');
    }
  } catch (error) {
    console.error('Error updating token in localStorage:', error);
  }
}


export function getUserInfo():IUser | null{
  try {
    if (!isLocalStorageAvailable()) return null;
   const raw = localStorage.getItem("user");
    if (!raw) return null;
    return JSON.parse(raw) as IUser;
  } catch (error) {
    console.error('Error updating token in localStorage:', error);
    return null;
  }
}

export function setUserInfo(user: IUser): boolean {
  try {
     if (!isLocalStorageAvailable()) return false;
    localStorage.setItem("user", JSON.stringify(user));
    return true;
  } catch (error) {
    console.error("Failed to save user to localStorage:", error);
    return false;
  }
}

export function deleteUserInfo(){
    try {
     if (!isLocalStorageAvailable()) return false;
    localStorage.removeItem("user");
    return true;
  } catch (error) {
    console.error("Failed to delete user from localStorage:", error);
    return false;
  }
}

