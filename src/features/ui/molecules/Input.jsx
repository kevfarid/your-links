import PropTypes from 'prop-types';
import { Box, TextField, Typography } from '@mui/material';
import { forwardRef } from 'react';

function Input({ label, placeholder, ...props }, ref) {
  return (
    <Box display='flex' flexDirection='column' gap='0.5rem'>
      <Typography variant='body1' component='label' textAlign='left'>
        {label}
      </Typography>
      <TextField
        inputRef={ref}
        {...props}
        placeholder={placeholder || label}
        variant='outlined'
        fullWidth
      />
    </Box>
  );
}

const forwardedInput = forwardRef(Input);
export default forwardedInput;

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
