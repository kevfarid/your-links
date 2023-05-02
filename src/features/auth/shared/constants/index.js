import * as yup from 'yup';

export const authSchema = yup.object({
  email: yup.string().email('Email is not valid').required('Email is required'),
  password: yup.string().required('Password is required'),
});

export const AuthInputsForm = [
  {
    name: 'email',
    label: 'Your Email',
    type: 'text',
  },
  {
    name: 'password',
    label: 'Your Password',
    type: 'password',
  },
];
