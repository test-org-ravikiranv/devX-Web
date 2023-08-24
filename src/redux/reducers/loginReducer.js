import { LoginFields } from "../constants/redux-constants";

const initialState = {
  username: { field: "", isValid: false },
  password: { field: "", isValid: false },
  showPassword: false,
  rememberMe: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LoginFields.SET_USERNAME:
      return {
        ...state,
        username: { ...state.username, field: action.data },
      };

    case LoginFields.SET_PASSWORD:
      return {
        ...state,
        password: { ...state.username, field: action.data },
      };

    case LoginFields.IS_USERNAME_VALID:
      return {
        ...state,
        username: { ...state.username, isValid: action.data },
      };

    case LoginFields.IS_PASSWORD_VALID:
      return {
        ...state,
        password: { ...state.password, isValid: action.data },
      };

    case LoginFields.SET_SHOW_PASS:
      return {
        ...state,
        showPassword: action.data,
      };

    case LoginFields.SET_REMEMBER_ME:
      return {
        ...state,
        rememberMe: action.data,
      };

    case LoginFields.RESET_DATA:
      return {
        ...state,
        username: { field: "", isValid: false },
        password: { field: "", isValid: false },
        showPassword: false,
        rememberMe: false,
      };

    default:
      return state;
  }
};

export default loginReducer;
