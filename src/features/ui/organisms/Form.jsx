import PropTypes from 'prop-types';
import { Box, Button, Typography, Alert } from '@mui/material';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from 'ui/molecules/Input';

export default function AuthForm({
  onSubmit,
  inputs,
  title,
  schema,
  error,
  setError,
  showTitle = true,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields, dirtyFields },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const getError = (field) => {
    return Boolean(
      errors[field] || (touchedFields?.[field] && !dirtyFields?.[field])
    );
  };

  return (
    <Box
      component='form'
      onSubmit={handleSubmit((data) => onSubmit(data, reset))}
      width='100%'
      maxWidth='22rem'
      flexDirection='column'
      justifyContent='start'
      gap='1.875rem'
      display='flex'
      marginTop='3.125rem'
    >
      {showTitle && (
        <Typography
          variant='h5'
          component='h2'
          fontWeight={700}
          textAlign='start'
          marginBottom='0.6rem'
        >
          {title}
        </Typography>
      )}
      {inputs.map((input) => {
        const { name, label, type } = input;
        return (
          <Input
            key={name}
            label={label}
            {...register(name, { required: true })}
            error={getError(name)}
            type={type}
            helperText={errors?.[name]?.message}
          />
        );
      })}
      {error && (
        <Alert
          onClose={() => setError && setError('')}
          severity='error'
          sx={{ width: '100%' }}
        >
          {error}
        </Alert>
      )}
      <Button
        variant='contained'
        fullWidth
        type='submit'
        sx={{
          marginTop: '1.25rem',
        }}
      >
        {title}
      </Button>
    </Box>
  );
}

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
  schema: PropTypes.object.isRequired,
  setError: PropTypes.func,
  error: PropTypes.string,
  showTitle: PropTypes.bool,
};

AuthForm.defaultProps = {
  showTitle: true,
};
