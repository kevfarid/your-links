import PropTypes from 'prop-types';
import { Box, Button } from '@mui/material';

export default function Header({ onLogout }) {
  return (
    <Box
      component='header'
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingX: '2rem',
        paddingBottom: '0.25rem',
        alignItems: 'flex-end',
        width: '100%',
        height: '4.75rem',
        position: 'sticky',
        top: 0,
        zIndex: 99,
        backgroundColor: '#fff',
      }}
    >
      <img src='/logo.svg' alt='delete' width={55} />
      {onLogout && (
        <Button variant='outlined' color='primary' onClick={onLogout}>
          LOGOUT
        </Button>
      )}
    </Box>
  );
}

Header.propTypes = {
  onLogout: PropTypes.func,
};
