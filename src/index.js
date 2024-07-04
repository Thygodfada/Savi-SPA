import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import GlobalStyles from "./global";
import { GoogleOAuthProvider } from '@react-oauth/google';
import "./index.css";

ReactDOM.render(
  <GoogleOAuthProvider clientId="667855328126-eflhj0idirqrejsvfm1616prpbpfr03j.apps.googleusercontent.com">
  <React.StrictMode>
    <GlobalStyles />
    <App />
    {/* <ToastContainer /> */}
  </React.StrictMode>
  </GoogleOAuthProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
