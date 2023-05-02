import { Avatar, Box, IconButton, Typography } from '@mui/material';

export default function Profile() {
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
        src='/icons/avatar.svg'
        sx={{
          width: '4.25rem',
          height: '4.25rem',
        }}
      />
      <Typography variant='h6' component='h2' fontWeight={500}>
        John Doe
      </Typography>
      <Typography variant='body1' component='p' fontWeight={400}>
        John.doe@example.com
      </Typography>
    </Box>
  );
}
