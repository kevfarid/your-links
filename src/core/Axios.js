import axios from 'axios';

const Axios = axios.create({
  baseURL: 'http://ec2-54-160-84-172.compute-1.amazonaws.com:3000',
});

Axios.interceptors.request.use(
  (config) => {
    const { state } = JSON.parse(localStorage.getItem('login') || '{}');

    let { headers } = config;

    if (state.token) {
      headers = {
        ...headers,
        Authorization: `Token ${state.token}`,
      };
    }

    return {
      ...config,
      headers,
    };
  },
  (error) => Promise.reject(error)
);

export default Axios;
