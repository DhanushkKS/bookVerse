export const setLocalStorageItem = <T>(key: string, value: T): void => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("Error saving to localStorage:", e);
  }
};

export const getLocalStorageItem = <T>(key: string): T | undefined => {
  try {
    const item = window.localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : undefined;
  } catch (e) {
    console.error("Error reading from localStorage:", e);
    return undefined;
  }
};

export const removeLocalStorageItem = (key: string): void => {
  try {
    window.localStorage.removeItem(key);
  } catch (e) {
    console.error("Error removing from localStorage:", e);
  }
};
