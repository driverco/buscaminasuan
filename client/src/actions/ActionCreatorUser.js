import { SET_AUTH_MESSAGE, SET_USER } from "./ActionsTypeUser";

export const setAuthMessage = (authMessage) => ({
    type: SET_AUTH_MESSAGE,
    authMessage
});

export const setUser = (user) => ({
    type: SET_USER,
    user
});
