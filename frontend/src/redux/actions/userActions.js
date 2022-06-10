import {
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER


} from "./types";

export const LoginAction = (data) => (dispatch) => {
    dispatch({
        type: LOGIN_USER,
        payload: data,
    });
};

export const RegisterUserAction = (data) => (dispatch) => {
    dispatch({
        type: REGISTER_USER,
        payload: data,
    });
};
export const LogoutAction = (data) => (dispatch) => {
    dispatch({
        type: LOGOUT_USER,
        payload: data,
    });
};
