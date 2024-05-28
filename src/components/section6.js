import React, { useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const FAQSection = () => {
  const theme = useTheme();
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ pb: 20, backgroundColor: theme.palette.gray.dark }}>
      <Typography
        fontWeight={600}
        variant="h4"
        align="center"
        gutterBottom
      >
        {' '}
        Frequently asked questions
      </Typography>{' '}
      <Grid container mt="20px">
        <Grid
          xs={12}
          sm={2}
          sx={{
            border: `1px solid ${theme.palette.gray.light}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '30px',
          }}
        >
          General
        </Grid>
        <Grid
          xs={12}
          sm={10}
          sx={{
            border: `1px solid ${theme.palette.gray.light}`,
            display: 'flex',
            alignItems: 'center',
            padding: '30px',
            justifyContent: 'center',
          }}
        >
          I want to work part-time, is that possible
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          xs={12}
          sm={2}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '30px',
          }}
        ></Grid>
        <Grid
          xs={12}
          sm={10}
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '30px',
            justifyContent: 'center',
          }}
        >
          How long are the average projects?
        </Grid>
      </Grid>
      <Grid container sx={{ bgcolor: theme.palette.gray.darker }}>
        <Grid
          xs={12}
          sm={2}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '30px',
          }}
        ></Grid>
        <Grid
          xs={12}
          sm={10}
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '30px',
            justifyContent: 'center',
          }}
        >
          How does the payment works?
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          xs={12}
          sm={2}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '30px',
          }}
        ></Grid>
        <Grid
          xs={12}
          sm={10}
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '30px',
            justifyContent: 'center',
          }}
        >
          How much can I earn?
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          xs={12}
          sm={1}
          sx={{
            background: 'transparent',
            border: `1px solid ${theme.palette.gray.light}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '30px',
          }}
        >
          General
        </Grid>
        <Grid
          xs={12}
          sm={1}
          sx={{
            border: `1px solid ${theme.palette.gray.light}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '30px',
          }}
        >
          Joining Process
        </Grid>
        <Grid
          xs={12}
          sm={10}
          sx={{
            border: `1px solid ${theme.palette.gray.light}`,
            display: 'flex',
            alignItems: 'center',
            padding: '30px',
            justifyContent: 'center',
          }}
        >
          I want to work part-time, is that possible
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          xs={12}
          sm={2}
          sx={{
            bgcolor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '30px',
          }}
        ></Grid>

        <Grid
          xs={12}
          sm={10}
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '30px',
            justifyContent: 'center',
          }}
        >
          How long are the average projects?
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          xs={12}
          sm={2}
          sx={{
            bgcolor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '30px',
          }}
        ></Grid>

        <Grid
          xs={12}
          sm={10}
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '30px',
            justifyContent: 'center',
          }}
        >
          How long are the average projects?
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          xs={12}
          sm={2}
          sx={{
            bgcolor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '30px',
          }}
        ></Grid>

        <Grid
          xs={12}
          sm={10}
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '30px',
            justifyContent: 'center',
          }}
        >
          How much can I earn?
        </Grid>
      </Grid>
    </Box>
  );
};

export default FAQSection;
