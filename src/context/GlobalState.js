import React, { createContext, useState } from 'react';
import axios from 'axios';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const baseUrl = 'https://appname.herokuapp.com/api/v1';
  const [loggedIn, setLoggedIn] = useState(false);
  var word = 'testing';

  function login(email, password) {
    const loginUrl = baseUrl.concat('/auth/login');
    axios
      .post(baseUrl, {
        usernameOrEmail: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
      });
    setLoggedIn(true);
    console.log(email + ' ' + password);
    console.log(loginUrl);
  }

  return (
    <GlobalContext.Provider
      value={{ word: word, login: login, baseUrl: baseUrl }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
