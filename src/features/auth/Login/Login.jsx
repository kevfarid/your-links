import Wrapper from '../shared/components/Wrapper';
import Form from '../shared/components/Form';
import { AuthInputsForm, authSchema } from '../shared/constants';

function Login() {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <Form
        onSubmit={onSubmit}
        inputs={AuthInputsForm}
        title='Login'
        schema={authSchema}
      />
    </Wrapper>
  );
}

export default Login;
