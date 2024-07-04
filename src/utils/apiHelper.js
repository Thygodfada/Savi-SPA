import axios from 'axios';
const baseUrl = 'https://appname.herokuapp.com/api/v1';
export const apiGet = (path, conf = {}, auth = true) => {
  const config = {
    ...conf,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  return axios.get(`${baseUrl}${path}`, config);
};

export const apiPost = (path, data, { headers, ...conf }, auth = true) => {
  const Authorization = auth && `Bearer ${localStorage.getItem('token')}`;
  const config = {
    ...conf,
    headers: {
      Authorization,
      ...(headers ? headers : {}),
    },
  };

  return axios.post(`${baseUrl}${path}`, data, config);
};

export const apiPut = (path, data, conf = {}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    ...conf,
  };
  return axios.put(`${baseUrl}${path}`, data, config);
};

export const apiPatch = (path, data, conf = {}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    ...conf,
  };
  return axios.patch(`${baseUrl}${path}`, data, config);
};

export const apiDelete = (path, conf = {}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    ...conf,
  };
  return axios.delete(`${baseUrl}${path}`, config);
};

export const errorHandler = (payload) => {};
