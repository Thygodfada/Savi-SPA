import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import { apiPost } from '../../utils/apiHelper';
import AuthReducer from './AuthReducer';
import { LOGIN_SUCCESS, LOGIN_FAIL, LOADING, FORGOT_FAIL, FORGOT_SUCCESS } from '../types';

// AuthState Provider Component

const AuthState = (props) => {
  const initialState = {
    token: localStorage?.getItem('token'),
    isAuthenticated: null,
    user: null,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  // Action creators
  // NOTE: These could be moved to a separate file like in redux
  // but they remain here for ease of students transitioning

  // Login User
  const login = async (formData) => {
    dispatch({
      type: LOADING,
      payload: true,
    });
    try {

        const loginData = {
        usernameOrEmail: formData.email,
        password: formData.password
      }
      console.log(loginData);
        const res = await apiPost('/auth/login', loginData, config, false);

      if(res.status === 200){
        
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });

      }else{
          
        dispatch({
          type: LOGIN_FAIL,
          payload: res.data,
        });
      }
    
    } catch (err) {

        console.log(err.response.data.msg);
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response,
        });
    }
    };
    
    

  return (
    <AuthContext.Provider
      value={{
        login,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        loading: state.loading,
        error: state.error,
        state : state
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export default AuthState;
