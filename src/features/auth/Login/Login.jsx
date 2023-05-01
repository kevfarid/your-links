import { Box, Button, TextField, Typography } from '@mui/material';
import Wrapper from '../shared/components/Wrapper';

function Login() {
  return (
    <Wrapper title='Login'>
      <Box display='flex' flexDirection='column' gap='0.5rem'>
        <Typography variant='body1' component='label' textAlign='left'>
          Your Email
        </Typography>
        <TextField placeholder='Email' variant='outlined' fullWidth />
      </Box>
      <Box display='flex' flexDirection='column' gap='0.5rem'>
        <Typography variant='body1' component='label' textAlign='left'>
          Your Email
        </Typography>
        <TextField placeholder='Email' variant='outlined' fullWidth />
      </Box>
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

export default Login;
