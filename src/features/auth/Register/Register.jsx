import { Button } from '@mui/material';
import Wrapper from '../shared/components/Wrapper';
import Input from '../../ui/molecules/Input';

function Register() {
  return (
    <Wrapper title='Signup'>
      <Input label='Full Name' />
      <Input label='Your Email' />
      <Input label='Your Password' />
      <Button
        variant='contained'
        fullWidth
        sx={{
          marginTop: '1.25rem',
        }}
      >
        Login
      </Button>
    </Wrapper>
  );
}

export default Register;
