import { LoginFields } from "../constants/redux-constants";

export const setLoginUserName = (username) => (dispatch) => {
  dispatch({
    type: LoginFields.SET_USERNAME,
    data: username,
  });
};

export const setLoginPassword = (password) => (dispatch) => {
  dispatch({
    type: LoginFields.SET_PASSWORD,
    data: password,
  });
};

export const setIsUserNameValid = (isValid) => (dispatch) => {
  dispatch({
    type: LoginFields.IS_USERNAME_VALID,
    data: isValid,
  });
};

export const setIsPasswordValid = (isValid) => (dispatch) => {
  dispatch({
    type: LoginFields.IS_PASSWORD_VALID,
    data: isValid,
  });
};

export const setLoginShowPassword = (type) => (dispatch) => {
  dispatch({
    type: LoginFields.SET_SHOW_PASS,
    data: type,
  });
};

export const setRememberMe = (rememberMe) => (dispatch) => {
  dispatch({
    type: LoginFields.SET_REMEMBER_ME,
    data: rememberMe,
  });
};

export const resetLoginFields = () => (dispatch) => {
  dispatch({
    type: LoginFields.RESET_DATA,
  });
};
