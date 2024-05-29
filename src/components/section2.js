import React from 'react';
import {
  Avatar,
  Box,
  Card,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

const HomeSection2 = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.gray.darkest,
        color: theme.palette.common.white,
        transform: 'skewY(-5deg)',
        padding: '60px 0',
        position: 'relative',
        overflow: 'hidden',
        height: { xs: '900px', md: '600px' },
      }}
      id="Find Talents"
    >
      <Grid
        container
        sx={{
          transform: 'skewY(5deg)',
          maxWidth: '1200px',
          mx: 'auto',
          mt: { xs: '70px', md: '100px' },
          padding: '20px',
          mb: '20px',
        }}
      >
        {' '}
        <Grid item xs={12} md={6} sx={{ mb: { xs: '50px' } }}>
          <Stack spacing={3} sx={{ width: { xs: 'auto', md: 400 } }}>
            {' '}
            <Typography
              variant="h3"
              color={theme.palette.common.white}
              fontWeight={500}
            >
              How it worked for Jason{' '}
              <span>
                {' '}
                <Image
                  src="/JasonImage.svg"
                  width={50}
                  height={50}
                  style={{ borderRadius: '30px', marginTop: 2 }}
                />
              </span>{' '}
              at{' '}
              <span style={{ color: theme.palette.primary.dark }}>
                groove{' '}
              </span>
            </Typography>
            <Typography variant="body2">
              Zwit enabled us to deliver on time and they’ve been
              heavy hitters in our corner since...
            </Typography>{' '}
            <Stack spacing={2} direction={'row'}>
              <Box
                sx={{
                  padding: '15px 20px',
                  bgcolor: theme.palette.common.white,
                  borderRadius: '30px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <Image
                  width={15}
                  src={'/blackArrowLeft.svg'}
                  height={20}
                />
              </Box>
              <Box
                sx={{
                  padding: '15px 20px',
                  bgcolor: theme.palette.common.white,
                  borderRadius: '30px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <Image
                  width={15}
                  src={'/blackRightArrow.svg'}
                  height={20}
                />
              </Box>
            </Stack>{' '}
          </Stack>
        </Grid>{' '}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: { xs: 'auto', md: 350 },
          }}
        >
          {' '}
          <Stack spacing={3}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between ',
                width: '190px',
              }}
            >
              <Box
                sx={{
                  borderRadius: '20px',
                  p: '20px 10px',
                  bgcolor: theme.palette.primary.dark,
                }}
              >
                <Typography
                  variant="body2"
                  color={theme.palette.common.white}
                  fontWeight={400}
                >
                  groove
                </Typography>
              </Box>
              <Stack>
                <Typography
                  variant="h6"
                  sx={{
                    margin: 0,
                    color: theme.palette.gray.white,
                  }}
                >
                  Jason Makki
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: '12px',
                    color: theme.palette.gray.dark,
                  }}
                >
                  Engineer at GROOVE
                </Typography>
                <Typography
                  sx={{
                    fontSize: '12px',
                    color: theme.palette.gray.dark,
                  }}
                  variant="caption"
                >
                  San Fransisco
                </Typography>
              </Stack>
            </Box>
            <Typography
              variant="body1"
              color={theme.palette.common.white}
            >
              Zwilt enabled us to deliver on time and they’ve been
              heavy hitters in our corner since. Zwilt enabled us to
              deliver on time and they’ve been heavy hitters in our
              corner since.Zwilt enabled us to deliver on time and
              they’ve been heavy hitters.
            </Typography>{' '}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeSection2;
