import axios, { AxiosHeaders, AxiosRequestConfig } from 'axios';
import keycloak from './keycloak.utils';

export const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL
});

axiosClient.defaults.headers.common['Authorization'] = `Bearer ${keycloak.token}`;

axiosClient.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (keycloak.authenticated) {
      (config.headers as AxiosHeaders).set('Authorization', `Bearer ${keycloak.token}`, true);
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const doStuff = () => {

  axiosClient.get("")
    .then(res => {
      const resData = res.data;
      console.log(resData);
    });
};