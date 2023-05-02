import Form from 'ui/organisms/Form';
import { useUrls } from './shared/store';
import Link from './shared/components/Link';
import Profile from '../ui/organisms/Profile';
import Headaer from '../ui/organisms/Header';

import { useState } from 'react';
import { Box, Container, Paper, useMediaQuery } from '@mui/material';

import * as yup from 'yup';

const schema = yup.object({
  url: yup.string().url().required('Url is required'),
  name: yup.string().required('Name is required'),
});

const inputs = [
  {
    name: 'url',
    label: 'Url to Save',
    type: 'text',
  },
  {
    name: 'name',
    label: 'Name of url',
    type: 'text',
  },
];

function Links() {
  const mediaQuery = useMediaQuery('(min-height: 900px)');

  const [error, setError] = useState(null);
  const { addUrl, urls } = useUrls();

  const onSubmit = (data, reset) => {
    addUrl({
      name: data.name,
      url: data.url,
    });
    reset && reset();
  };

  return (
    <>
      <Headaer />
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: mediaQuery ? 'calc(100vh - 4.75rem)' : 'auto',
          paddingY: mediaQuery ? '2rem' : '0.5rem',
          width: '100%',
        }}
      >
        <Paper
          sx={{
            maxWidth: '26rem',
            width: '100%',
            gap: '3rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            boxShadow: {
              xs: 'none',
              md: '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
            },
          }}
        >
          <Box
            sx={{
              marginTop: '2rem',
              paddingX: '2rem',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Profile />
            <Form
              showTitle={false}
              onSubmit={onSubmit}
              inputs={inputs}
              title='Signup'
              schema={schema}
              error={error}
              setError={setError}
            />
          </Box>
          <Box
            sx={{
              paddingX: '2rem',
              display: 'flex',
              flexDirection: 'column',
              maxHeight: mediaQuery ? '30vh' : 'auto',
              overflowY: 'auto',
              marginTop: '2rem',
            }}
          >
            {urls.map((url, index) => {
              return (
                <Link
                  key={`${url.name}-${index}`}
                  name={url.name}
                  url={url.url}
                />
              );
            })}
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default Links;
