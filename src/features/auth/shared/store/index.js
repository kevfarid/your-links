import createStore from 'core/store/createStore';
import { login, singup } from '../services/auth';

export const useAuth = createStore('login', (set, get) => ({
  isLogged: false,
  token: '',
  user: {
    name: '',
    email: '',
    image: '',
  },
  login: async (email, password) => {
    const { token, user } = await login({ email, password });

    set({
      user,
      token,
      isLogged: Boolean(token),
    });

    localStorage.setItem('token', token);

    return Promise.resolve();
  },
  logout: () => {
    set({ email: '', isLogged: false, token: '', isSubscribed: false });
    localStorage.removeItem('token');
  },
  signup: async ({ fullName, email, password }) => {
    const { user } = await singup({ fullName, email, password });

    set({
      user,
    });

    await get().login(email, password);

    return Promise.resolve();
  },
}));
