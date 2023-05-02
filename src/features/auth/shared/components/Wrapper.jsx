import { Box, Button } from '@mui/material';
import PropTypes from 'prop-types';

import { useLocation, Link } from 'react-router-dom';

export default function Wrapper({ children }) {
  const location = useLocation();

  const isLogin = location.pathname === '/login';

  return (
    <Box align='center' height='100vh' width='100vw' display='flex'>
      <Box
        width='100%'
        height='100%'
        sx={{
          backgroundImage: 'url(/pattern.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '30%',
        }}
        display={{ xs: 'none', md: 'block' }}
      />
      <Box
        height='100%'
        width='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        position='relative'
        padding={{ xs: '2rem', md: '0' }}
      >
        <Button
          variant='outlined'
          component={Link}
          to={isLogin ? '/register' : '/login'}
          sx={{ position: 'absolute', top: '2.8rem', right: '2rem' }}
        >
          {location.pathname === '/login' ? 'Register' : 'Login'}
        </Button>
        <img src='/logo.svg' alt='logo' width={90} height={102} />
        {children}
      </Box>
    </Box>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
