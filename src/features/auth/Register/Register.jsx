import Wrapper from '../shared/components/Wrapper';
import Form from 'ui/organisms/Form';
import { AuthInputsForm, authSchema } from '../shared/constants';
import { useAuth } from '../shared/store';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import * as yup from 'yup';

const schema = authSchema.concat(
  yup.object({
    fullName: yup.string().required('Full name is required'),
  })
);

const inputs = [
  {
    name: 'fullName',
    label: 'Your Full Name',
    type: 'text',
  },
  ...AuthInputsForm,
];

function Register() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const onSubmit = (data) => {
    signup({
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    })
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <Wrapper>
      <Form
        onSubmit={onSubmit}
        inputs={inputs}
        title='Signup'
        schema={schema}
        error={error}
        setError={setError}
      />
    </Wrapper>
  );
}

export default Register;
