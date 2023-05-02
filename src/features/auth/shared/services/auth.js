import Axios from 'core/Axios';

export function login({ email, password }) {
  return Axios.post('/auth/login', { email, password })
    .then((data) => data.data)
    .then(({ data, token, message }) => {
      if (message !== 'success') throw new Error(message);

      return {
        user: {
          name: data?.name,
          email: data?.email,
          image: data?.image,
        },
        token: token || '',
      };
    });
}

export function singup({ fullName, email, password }) {
  return Axios.post('/auth/singin', { name: fullName, email, password })
    .then((data) => data.data)
    .then(({ data, message }) => {
      if (message !== 'success') throw new Error(message);

      return {
        user: {
          name: data?.name,
          email: data?.email,
          image: data?.image,
        },
      };
    })
    .catch((error) => {
      throw new Error(error.response?.data?.error);
    });
}
