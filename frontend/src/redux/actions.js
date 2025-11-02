import { request_get } from "./requests";

export const action_get = (url) => async () => await request_get(url);
