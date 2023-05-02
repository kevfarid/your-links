import { Box, IconButton, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export default function Link({ name, url, onDelete }) {
  return (
    <Box
      py='1rem'
      position='relative'
      sx={{
        paddingX: '2rem',
        width: '100%',
        borderTop: '1px solid #E0E0E0',
        borderBottom: '1px solid #E0E0E0',
      }}
    >
      <IconButton
        onClick={onDelete}
        sx={{
          position: 'absolute',
          top: '0.625rem',
          right: '1rem',
        }}
      >
        <img src='/icons/delete.svg' alt='delete' />
      </IconButton>
      <Typography
        sx={{
          maxWidth: '80%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
        variant='h6'
        component='h2'
        color='primary'
        fontWeight={600}
        mb='1rem'
      >
        {url.replace(/(^\w+:|^)\/\//, '').replace(/\/$/, '')}
      </Typography>
      <Typography variant='body1' component='p' fontWeight={500}>
        {name}
      </Typography>
    </Box>
  );
}

Link.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};
