import axios from 'axios';
import { readToken } from 'utils/helper';

export const requestInterceptors = async () => {
  await axios.interceptors.request.use(
    (config) => {
      const token = readToken();
      if (token) {
        config.headers.Authorization = token;
      }
      config.headers['Content-Type'] = 'application/json';

      return config;
    },
    (err) => {
      Promise.reject(err);
    }
  );
};

export const responseInterceptors = async () => {
  await axios.interceptors.response.use(
    (response) => {
      // do something to response
    },
    (error) => {
      // handle timeout
      // if (error.code === 'ECONNABORTED') {
      //   console.warn(`A timeout happend on url ${error.config.url}`);
      // }
      Promise.reject(error);
    }
  );
};
