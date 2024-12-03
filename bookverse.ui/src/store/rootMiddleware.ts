import { authenticationApi } from "../redux/auth/api.ts";

export const rootMiddleware = [authenticationApi.middleware];
