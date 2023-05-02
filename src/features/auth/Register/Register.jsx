import Wrapper from '../shared/components/Wrapper';
import Form from '../shared/components/Form';
import { AuthInputsForm, authSchema } from '../shared/constants';

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
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <Form onSubmit={onSubmit} inputs={inputs} title='Login' schema={schema} />
    </Wrapper>
  );
}

export default Register;
