import PropTypes from 'prop-types';
import { Box, TextField, Typography } from '@mui/material';

export default function Input({ label, placeholder, ...props }) {
  return (
    <Box display='flex' flexDirection='column' gap='0.5rem'>
      <Typography variant='body1' component='label' textAlign='left'>
        {label}
      </Typography>
      <TextField
        {...props}
        placeholder={placeholder || label}
        variant='outlined'
        fullWidth
      />
    </Box>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
