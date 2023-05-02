import { Button, Paper } from '@mui/material';

export default function Header() {
  return (
    <Paper
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
      }}
      backgroundColor='#fff'
    >
      <img src='/logo.svg' alt='delete' width={55} />
      <Button variant='outlined' color='primary'>
        LOGOUT
      </Button>
    </Paper>
  );
}
