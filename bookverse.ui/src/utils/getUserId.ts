import { getLocalStorageItem } from "./localStorageUtils.ts";

type UserInfo = {
  token: string;
  userInfo: {
    email: string;
    id: string;
  };
};
export const getUserId = (): string => {
  const userData = getLocalStorageItem<UserInfo>("user");
  return userData?.userInfo.id.toString() || "";
};
