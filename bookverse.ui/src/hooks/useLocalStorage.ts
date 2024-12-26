import {
  getLocalStorageItem,
  removeLocalStorageItem,
  setLocalStorageItem,
} from "../utils/localStorageUtils.ts";

export const useLocalStorage = () => {
  const setItem = <T>(key: string, value: T): void => {
    setLocalStorageItem(key, value);
  };

  const getItem = <T>(key: string): T | undefined => {
    return getLocalStorageItem<T>(key);
  };

  const removeItem = (key: string): void => {
    removeLocalStorageItem(key);
  };

  return { setItem, getItem, removeItem };
};
