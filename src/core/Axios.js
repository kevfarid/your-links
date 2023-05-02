import axios from 'axios';

const Axios = axios.create({
  baseURL: 'http://ec2-54-160-84-172.compute-1.amazonaws.com:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Axios.interceptors.request.use(function (config) {
//   const token = localStorage.getItem('token') || '';

//   if (token) {
//     config.headers.authorization = `Bearer ${token}`
//   }

//   return config;
// });

export default Axios;
