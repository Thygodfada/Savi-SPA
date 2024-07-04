import { LOGIN_SUCCESS, LOGIN_FAIL, FORGOT_SUCCESS, LOADING } from '../types';

export default function authReducer(state, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
     localStorage.setItem('token', action.payload.data.token);
      window.location.href = `/admin/home`;
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
          };    
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
}
