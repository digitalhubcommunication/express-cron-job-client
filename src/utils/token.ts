type TTokenType = "accessToken" | "refreshToken";

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

export function getToken(name:TTokenType): string | null {
  if (!isLocalStorageAvailable()) return null;

  try {
    return window.localStorage.getItem(name);
  } catch (error) {
    console.error('Error getting token from localStorage:', error);
    return null;
  }
}

export function setToken(name:TTokenType, token: string): void {
  if (!isLocalStorageAvailable()) return;

  try {
    window.localStorage.setItem(name, token);
  } catch (error) {
    console.error('Error setting token in localStorage:', error);
  }
}

export function deleteToken(name:TTokenType): void {
  if (!isLocalStorageAvailable()) return;

  try {
    window.localStorage.removeItem(name);
  } catch (error) {
    console.error('Error deleting token from localStorage:', error);
  }
}
