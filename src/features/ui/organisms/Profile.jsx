import { Avatar, Box, IconButton, Typography } from '@mui/material';

import PropTypes from 'prop-types';

export default function Profile({ user }) {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      gap='0.5rem'
      flexDirection='column'
      position='relative'
    >
      <IconButton
        sx={{
          position: 'absolute',
          top: '0',
          right: 0,
        }}
      >
        <img src='/icons/editar.svg' alt='delete' />
      </IconButton>
      <Avatar
        src='https://picsum.photos/300/300'
        sx={{
          width: '4.25rem',
          height: '4.25rem',
        }}
      />
      <Typography variant='h6' component='h2' fontWeight={500}>
        {user.name}
      </Typography>
      <Typography variant='body1' component='p' fontWeight={400}>
        {user.email}
      </Typography>
    </Box>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
