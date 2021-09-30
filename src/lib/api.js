import axios from 'axios';

const get = (url, options) => {
  return axios.get(url);
};

const post = (url, body, options) => {};

const patch = (url, body, options) => {};

const put = (url, body, options) => {};

const _delete = (url, options) => {};

export default {
  get,
  post,
  patch,
  put,
  delete: _delete,
};
