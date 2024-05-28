import { Box, Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import React from 'react';

const HomeSection4 = () => {
  const theme = useTheme();
  return (
    <Box
      s={{
        bgcolor: theme.palette.primary.light,
        px: '40px',
      }}
    >
      <Grid
        container
        sx={{
          height: { xs: '800px', md: '400px' },
          transform: 'skewY(-5deg)',
          position: 'relative',
          overflow: 'hidden',
          bgcolor: theme.palette.primary.light,
          alignItems: 'center',
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            transform: 'skewY(5deg)',
          }}
        >
          {' '}
          <Box
            sx={{
              display: 'inline-block',
              background: `linear-gradient(to bottom, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.light} 140%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              // height: theme.spacing(20),
              mr: 2,
            }}
          >
            <Typography variant="h1">1</Typography>{' '}
          </Box>
          <Stack spacing={2}>
            <Typography variant="body2" fontWeight={500}>
              Find your next star performer.
            </Typography>
            <Typography variant="caption">
              Explore the vast Zwilt marketplace to find the candidate
              that meets your needs.
            </Typography>{' '}
            <Box
              sx={{
                width: '90%',
                mx: 'auto',
                mb: '20px',
                mt: { xs: '30px', md: 0 },
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'start',
              }}
            >
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '10px',
                  width: '54px',
                  borderRadius: '30px',
                  mr: '10px',
                  bgcolor: theme.palette.common.black,
                }}
              >
                <Image
                  src="/whiteRightArrow.svg"
                  width={20}
                  height={20}
                  alt="Right Arrow"
                />
              </Box>
              <Typography variant="body2" fontWeight={600}>
                Join Now
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: 'flex', justifyContent: 'end' }}
        >
          {' '}
          <Image src="/journey1.svg" width={400} height={400} />
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          height: { xs: '800px', md: '400px' },
          transform: 'skewY(-5deg)',
          position: 'relative',
          bgcolor: theme.palette.secondary.main,
          overflow: 'hidden',
          alignItems: 'center',
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            transform: 'skewY(5deg)',
          }}
        >
          {' '}
          <Box
            sx={{
              display: 'inline-block',
              background: `linear-gradient(to bottom, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 140%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mr: 2,
              height: theme.spacing(20),
            }}
          >
            <Typography variant="h1">2</Typography>{' '}
          </Box>
          <Stack spacing={2}>
            <Typography variant="body2" fontWeight={500}>
              Find your next star performer.
            </Typography>
            <Typography variant="caption">
              Explore the vast Zwilt marketplace to find the candidate
              that meets your needs.
            </Typography>{' '}
            <Box
              sx={{
                width: '90%',
                mx: 'auto',
                mb: '20px',
                mt: { xs: '30px', md: 0 },
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'start',
              }}
            >
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '10px',
                  width: '54px',
                  borderRadius: '30px',
                  mr: '10px',
                  bgcolor: theme.palette.common.black,
                }}
              >
                <Image
                  src="/whiteRightArrow.svg"
                  width={20}
                  height={20}
                  alt="Right Arrow"
                />
              </Box>
              <Typography variant="body2" fontWeight={600}>
                Join Now
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: 'flex', justifyContent: 'end' }}
        >
          {' '}
          <Image src="/journey2.svg" width={400} height={400} />
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          height: '400px',
          transform: 'skewY(-5deg)',
          position: 'relative',
          bgcolor: theme.palette.primary.light,
          height: { xs: '800px', md: '400px' },
          overflow: 'hidden',
          alignItems: 'center',
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            transform: 'skewY(5deg)',
          }}
        >
          {' '}
          <Box
            sx={{
              display: 'inline-block',
              background: `linear-gradient(to bottom, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.light} 140%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              height: theme.spacing(20),
              mr: 2,
            }}
          >
            <Typography variant="h1">3</Typography>{' '}
          </Box>
          <Stack spacing={2}>
            <Typography variant="body2" fontWeight={500}>
              Start building your team.
            </Typography>
            <Typography variant="caption">
              Onboard your candidate right away and start creating the
              next big thing.
            </Typography>{' '}
            <Box
              sx={{
                width: '90%',
                mx: 'auto',
                mb: '20px',
                mt: { xs: '30px', md: 0 },
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'start',
              }}
            >
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '10px',
                  width: '54px',
                  borderRadius: '30px',
                  mr: '10px',
                  bgcolor: theme.palette.common.black,
                }}
              >
                <Image
                  src="/whiteRightArrow.svg"
                  width={20}
                  height={20}
                  alt="Right Arrow"
                />
              </Box>
              <Typography variant="body2" fontWeight={600}>
                Join Now
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: 'flex', justifyContent: 'end' }}
        >
          {' '}
          <Image src="/journey3.svg" width={400} height={400} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeSection4;
