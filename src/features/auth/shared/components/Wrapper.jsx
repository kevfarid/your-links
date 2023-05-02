import { Box } from '@mui/material';
import PropTypes from 'prop-types';

export default function Wrapper({ children }) {
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
        {children}
      </Box>
    </Box>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
