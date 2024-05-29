import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

const FooterSection = () => {
  const theme = useTheme();

  return (
    <>
      {' '}
      <Box
        sx={{
          transform: 'skewY(-2deg)',
          mt: '-70px',
          height: '180px',
          width: '100%',
          backgroundColor: theme.palette.grey[900],
        }}
        id="Contact Us"
      ></Box>
      <Box
        sx={{
          position: 'relative',
          mt: '-150px',
          backgroundColor: theme.palette.background.default,
        }}
      >
        {/* Slanted Black Section */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            backgroundColor: theme.palette.grey[900],
            color: theme.palette.common.white,
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: theme.palette.grey[900],
              transformOrigin: 'top right',
              zIndex: -1,
            },
            pt: '30px',
          }}
        >
          <Container
            sx={{
              pt: 2,
            }}
          >
            {/* Skewed Blue CTA Section */}
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                textAlign: 'center',
                py: 4,
                borderRadius: 1,
                mx: 'auto',
                maxWidth: '90%',
                height: '300px',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                transform: 'skewY(-2deg)',
              }}
            >
              {' '}
              <Box
                sx={{
                  transform: 'skewY(2deg)',
                  mx: 'auto',
                  maxWidth: '80%',
                }}
              >
                <Typography variant="h4" gutterBottom>
                  Need a job done, and done well? Get started
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ mt: 2 }}
                >
                  Get Started
                </Button>
              </Box>
            </Box>
            <Grid container spacing={2} sx={{ pt: '150px' }}>
              <Grid item xs={12} md={3}>
                <Stack spacing={2} mt={4}>
                  <Link href="/">
                    {' '}
                    <Image
                      src={'/navLogo.svg'}
                      width={200}
                      height={40}
                    />{' '}
                  </Link>{' '}
                  <Typography variant="body2">
                    We take complex hiring processes - and simplify
                    them. Connecting you to the world’s highly
                    qualified talent pool.
                  </Typography>{' '}
                  <Stack spacing={4}>
                    <Typography variant="body2">
                      LINKS AND REDIRECTS
                    </Typography>
                    <Stack spacing={2} direction={'row'}>
                      {' '}
                      <Typography
                        sx={{
                          bgcolor: theme.palette.gray.darkest,
                          borderRadius: '16px',
                          padding: { xs: '9px 20px', md: '9px 24px' },
                          marginLeft: '8px',
                          height: '43px',
                          alignContent: 'center',
                          fontWeight: 500,
                          fontSize: { xs: '12px', md: '14px' },
                        }}
                        color={theme.palette.common.white}
                      >
                        Hire Now
                      </Typography>
                      <Typography
                        sx={{
                          bgcolor: theme.palette.gray.darkest,
                          borderRadius: '16px',
                          padding: { xs: '9px 20px', md: '9px 24px' },
                          marginLeft: '8px',
                          height: '43px',
                          alignContent: 'center',
                          fontWeight: 500,
                          fontSize: { xs: '12px', md: '14px' },
                        }}
                        color={theme.palette.common.white}
                      >
                        Apply Now
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={12} md={9}>
                <Box sx={{ width: { xs: 400, md: '500px' } }}>
                  {' '}
                  <h1>
                    Connecting the right people to the right
                    businesses.
                  </h1>
                </Box>
                {/* Footer Links */}
                <Grid
                  container
                  spacing={4}
                  justifyContent="space-between"
                  sx={{ mt: 2 }}
                  textAlign={'center'}
                >
                  <Grid item xs={12} md={2}>
                    <Typography
                      sx={{ color: theme.palette.grey[500] }}
                      variant="h6"
                      gutterBottom
                    >
                      PLATFORM
                    </Typography>
                    <Link
                      href="#"
                      color="inherit"
                      variant="body2"
                      display="block"
                      gutterBottom
                    >
                      Find Work
                    </Link>
                    <Link
                      href="#"
                      color="inherit"
                      variant="body2"
                      display="block"
                      gutterBottom
                    >
                      Find Talent
                    </Link>
                    <Link
                      href="#"
                      color="inherit"
                      variant="body2"
                      display="block"
                      gutterBottom
                    >
                      Categories
                    </Link>
                    <Link
                      href="#"
                      color="inherit"
                      variant="body2"
                      display="block"
                      gutterBottom
                    >
                      About Us
                    </Link>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Typography
                      sx={{ color: theme.palette.grey[500] }}
                      variant="h6"
                      gutterBottom
                    >
                      CATEGORIES
                    </Typography>
                    <Link
                      href="#"
                      color="inherit"
                      variant="body2"
                      display="block"
                      gutterBottom
                    >
                      Data Science
                    </Link>
                    <Link
                      href="#"
                      color="inherit"
                      variant="body2"
                      display="block"
                      gutterBottom
                    >
                      IT & Networking
                    </Link>
                    <Link
                      href="#"
                      color="inherit"
                      variant="body2"
                      display="block"
                      gutterBottom
                    >
                      Web & Mobile
                    </Link>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Typography
                      sx={{ color: theme.palette.grey[500] }}
                      variant="h6"
                      gutterBottom
                    >
                      Company
                    </Typography>
                    <Link
                      href="#"
                      color="inherit"
                      variant="body2"
                      display="block"
                      gutterBottom
                    >
                      About Us
                    </Link>
                    <Link
                      href="#"
                      color="inherit"
                      variant="body2"
                      display="block"
                      gutterBottom
                    >
                      FAQ's
                    </Link>
                    <Link
                      href="#"
                      color="inherit"
                      variant="body2"
                      display="block"
                      gutterBottom
                    >
                      Contact Us
                    </Link>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ color: theme.palette.grey[500] }}
                    >
                      Get In Touch
                    </Typography>
                    <Link
                      href="#"
                      color="inherit"
                      variant="body2"
                      display="block"
                      gutterBottom
                    >
                      Instagram
                    </Link>
                    <Link
                      href="#"
                      color="inherit"
                      variant="body2"
                      display="block"
                      gutterBottom
                    >
                      Linkedin
                    </Link>
                    <Link
                      href="#"
                      color="inherit"
                      variant="body2"
                      display="block"
                      gutterBottom
                    >
                      Twitter
                    </Link>
                  </Grid>
                </Grid>{' '}
              </Grid>
            </Grid>
            {/* Footer Bottom */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: 4,
                borderTop: `1px solid ${theme.palette.divider}`,
                pt: 2,
              }}
            >
              <Typography
                variant="body2"
                color={theme.palette.common.white}
              >
                &copy; {new Date().getFullYear()} Zwift. All rights
                reserved.
              </Typography>
              <Box>
                <Link
                  href="#"
                  color="inherit"
                  variant="body2"
                  sx={{ mr: 2 }}
                >
                  Privacy Policy
                </Link>
                <Link href="#" color="inherit" variant="body2">
                  Terms of Service
                </Link>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>{' '}
    </>
  );
};

export default FooterSection;
