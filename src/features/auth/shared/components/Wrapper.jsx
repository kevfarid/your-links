import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export default function Wrapper({ children, title }) {
  return (
    <Box align='center' height='100vh' width='100vw' display='flex'>
      <Box
        width='50%'
        height='100%'
        sx={{
          backgroundImage: 'url(/pattern.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '30%',
        }}
      />
      <Box
        height='100%'
        width='50%'
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
      >
        <img src='/logo.svg' alt='logo' width={90} height={102} />
        <Box
          width='100%'
          maxWidth='22rem'
          flexDirection='column'
          justifyContent='start'
          gap='1.875rem'
          display='flex'
          marginTop='3.125rem'
        >
          <Typography
            variant='h5'
            component='h2'
            fontWeight={700}
            textAlign='start'
            marginBottom='0.6rem'
          >
            {title}
          </Typography>
          {children}
        </Box>
      </Box>
    </Box>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
