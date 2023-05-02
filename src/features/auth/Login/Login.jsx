import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Wrapper from '../shared/components/Wrapper';
import Form from '../shared/components/Form';
import { AuthInputsForm, authSchema } from '../shared/constants';
import { useAuth } from '../shared/store';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const onSubmit = (data) => {
    login(data.email, data.password)
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
        inputs={AuthInputsForm}
        title='Login'
        schema={authSchema}
        error={error}
        setError={setError}
      />
    </Wrapper>
  );
}

export default Login;
