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
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Person2Icon from '@mui/icons-material/Person2';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Image from 'next/image';
import { WhatWeOffer, webAppsLogos } from '@/jsonData/rawData'; // Ensure the correct import path

const HomeSection1 = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.light,
        pb: { xs: '50px', md: '150px' },
        mb: { xs: '-20px', md: '-100px' },
      }}
    >
      <Box
        sx={{ mt: '50px', pt: '50px', maxWidth: '700px', mx: 'auto' }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: '24px', md: '34px' } }}
          fontWeight={700}
          textAlign={'center'}
        >
          Your one-stop marketplace for finding the talent your
          business needs.
        </Typography>
      </Box>
      <Grid
        container
        sx={{
          mt: '50px',
          width: '90%',
          mx: 'auto',
          alignItems: 'center',
        }}
      >
        <Grid item xs={12} md={5}>
          {WhatWeOffer.map((item) => (
            <Grid Container key={item.title}>
              <Typography variant="body1" fontWeight={'bold'} mt={2}>
                {item.title}
              </Typography>

              <Grid
                Container
                spacing={2}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Grid item xs={6}>
                  <Stack spacing={2} mt={2}>
                    <Box
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      <WorkspacePremiumIcon
                        sx={{ fill: theme.palette.primary.dark }}
                      />
                      &nbsp;
                      <Typography
                        variant="caption"
                        alignContent={'center'}
                      >
                        {item.skills}
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      <Person2Icon
                        sx={{ fill: theme.palette.primary.dark }}
                      />
                      &nbsp;
                      <Typography
                        variant="caption"
                        alignContent={'center'}
                      >
                        {item.profile}
                      </Typography>
                    </Box>
                  </Stack>{' '}
                </Grid>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      mt: 2,
                    }}
                  >
                    <DashboardIcon
                      sx={{ fill: theme.palette.primary.dark }}
                    />
                    &nbsp;
                    <Typography
                      variant="caption"
                      alignContent={'center'}
                    >
                      {item.categories}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} md={7} sx={{ mt: { xs: 3, md: 0 } }}>
          {' '}
          <Card sx={{ p: '20px' }}>
            <Typography
              variant="h6"
              sx={{ mb: '20px', textAlign: 'start' }}
            >
              IT & Development
            </Typography>
            <Grid container spacing={2}>
              {webAppsLogos
                .filter(
                  (item) => item.category === 'IT & Development'
                )
                .map((item) => (
                  <Grid item key={item.title} mx={'auto'}>
                    <Stack spacing={2} alignItems={'center'}>
                      <Box
                        sx={{
                          width: '66px',
                          height: '66px',
                          borderRadius: '74px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          bgcolor: theme.palette.gray.lightest,
                        }}
                      >
                        <Image
                          src={item.logo}
                          width={36}
                          height={36}
                          alt={item.title}
                        />
                      </Box>
                      <Typography
                        variant="caption"
                        fontWeight={'bold'}
                        fontSize={'10px'}
                      >
                        {item.title}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
            </Grid>
          </Card>
          <Card sx={{ p: '20px', mt: '30px' }}>
            <Typography
              variant="h6"
              sx={{ mb: '20px', textAlign: 'start' }}
            >
              Design & Creative
            </Typography>
            <Grid container spacing={2}>
              {webAppsLogos
                .filter(
                  (item) => item.category === 'Design & Creative'
                )
                .map((item) => (
                  <Grid item key={item.title} mx={'auto'}>
                    <Stack spacing={2} alignItems={'center'}>
                      <Box
                        sx={{
                          width: '66px',
                          height: '66px',
                          borderRadius: '74px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          bgcolor: theme.palette.gray.lightest,
                        }}
                      >
                        <Image
                          src={item.logo}
                          width={36}
                          height={36}
                          alt={item.title}
                        />
                      </Box>
                      <Typography
                        variant="caption"
                        fontWeight={'bold'}
                        fontSize={'10px'}
                      >
                        {item.title}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
            </Grid>
          </Card>{' '}
        </Grid>
      </Grid>{' '}
      <Grid
        container
        alignItems={'center'}
        sx={{ width: '95%', mx: 'auto' }}
      >
        <Grid item xs={12} md={5}>
          {' '}
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
                padding: '20px',
                width: '74px',
                borderRadius: '30px',
                mr: '10px',
                bgcolor: theme.palette.common.black,
              }}
            >
              <Image
                src="/whiteRightArrow.svg"
                width={30}
                height={30}
                alt="Right Arrow"
              />
            </Box>
            <Typography variant="body1" fontWeight={600}>
              Explore More
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          {' '}
          <Box sx={{ pl: { xs: '30px', md: '10px' } }}>
            {' '}
            <Typography variant="body1">
              <b>30 more</b> to explore
            </Typography>{' '}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeSection1;
