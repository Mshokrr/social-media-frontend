import axios from 'axios';
// import { store } from '../redux/store';

const BACKEND_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

const get = (url, options = {}) => {
  const headers = {};
  if (options.token) {
    headers['x-access-token'] = options.token;
  }
  return axios
    .get(`${BACKEND_URL}${url}`, { headers })
    .then((response) => {
      return Promise.resolve(response);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

const post = (url, body, options = {}) => {
  const headers = {};
  if (options.token) {
    headers['x-access-token'] = options.token;
  }

  console.log('axios post');
  return axios
    .post(`${BACKEND_URL}${url}`, body, { headers })
    .then((response) => {
      return Promise.resolve(response);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

const patch = (url, body, options = {}) => {
  const headers = {};
  if (options.token) {
    headers['x-access-token'] = options.token;
  }
  return axios
    .patch(`${BACKEND_URL}${url}`, body, { headers })
    .then((response) => {
      return Promise.resolve(response);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

const put = (url, body, options = {}) => {
  const headers = {};
  if (options.token) {
    headers['x-access-token'] = options.token;
  }
  return axios
    .put(`${BACKEND_URL}${url}`, body, { headers })
    .then((response) => {
      return Promise.resolve(response);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

const _delete = (url, options = {}) => {
  const headers = {};
  if (options.token) {
    headers['x-access-token'] = options.token;
  }
  return axios
    .delete(`${BACKEND_URL}${url}`, { headers })
    .then((response) => {
      return Promise.resolve(response);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export default {
  get,
  post,
  patch,
  put,
  delete: _delete,
};
