import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0.4375rem',
          paddingTop: '0.9375rem',
          paddingBottom: '0.875rem',
          fontWeight: 500,
          fontSize: '1rem',
          lineHeight: '1.5rem',
          textTransform: 'none',
        },
        outlined: {
          paddingTop: '7px',
          paddingBottom: '6px',
          paddingLeft: '24px',
          paddingRight: '24px',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#002239',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: '0.4375rem',
          '& .MuiOutlinedInput-root': {
            borderRadius: '0.4375rem',
            '& fieldset': {
              borderColor: '#B7C0C9',
            },
            '& input': {
              color: '#002239',
              fontWeight: 600,
              fontSize: '1rem',
            },
          },
        },
      },
    },
  },
});

export default theme;
