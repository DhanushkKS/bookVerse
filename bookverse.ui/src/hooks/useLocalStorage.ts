export const useLocalStorage = () => {
  const setItem = <T>(key: string, value: T): void => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error("Error saving to localStorage:", e);
    }
  };

  const getItem = <T>(key: string): T | undefined => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : undefined;
    } catch (e) {
      console.error("Error reading from localStorage:", e);
      return undefined;
    }
  };

  const removeItem = (key: string): void => {
    try {
      window.localStorage.removeItem(key);
    } catch (e) {
      console.error("Error removing from localStorage:", e);
    }
  };

  return { setItem, getItem, removeItem };
};
