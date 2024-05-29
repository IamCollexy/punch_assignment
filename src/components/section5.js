import React from 'react';
import { Box, Grid, Typography, Card, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

const HomeSection5 = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: theme.palette.gray.lightest,
        pt: '300px',
        pb: '200px',
        mt: '-100px',
      }}
      id="About Us"
    >
      <Grid
        container
        sx={{ width: '90%', margin: '0 auto', borderRadius: '16px' }}
      >
        <Grid
          item
          sm={5}
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ mb: 4, padding: '50px' }}>
            <Typography variant="h3" sx={{ mb: 2, fontWeight: 500 }}>
              Why choose <span>Zweift</span>?
            </Typography>
            <Typography variant="body1">
              We take complex hiring processes - and simplify them.
              Connecting you to the world’s highly qualified talent
              pool.
            </Typography>
          </Box>
        </Grid>
        <Grid
          sm={7}
          xs={12}
          item
          sx={{
            overflow: 'hidden',
          }}
        >
          {' '}
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              width: '1000px',
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={6} p={4}>
                <Stack
                  spacing={1}
                  height={'100%'}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    p: { xs: 4, md: 2 },
                  }}
                >
                  <Typography
                    variant="h2"
                    fontWeight={600}
                    gutterBottom
                  >
                    Onboard without the risk.
                  </Typography>
                  <Typography variant="body2" color="text">
                    We pick the best for you to select.
                  </Typography>
                  <Typography variant="body2" color="text">
                    Thousands of vetted candidates in dozens of
                    categories.
                  </Typography>
                  <Typography variant="body2" color="text">
                    Risk-free resource swapping for the best fit.
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Image
                  src={'/sec5Image.svg'}
                  width={500}
                  height={500}
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeSection5;
