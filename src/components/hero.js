import {
  Box,
  Container,
  FormControl,
  Grid,
  OutlinedInput,
  Stack,
  Tab,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import Image from 'next/image';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled, useTheme } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const HomeHero = () => {
  const [selectedSortOption, setSelectedSortOption] = useState('1');
  const [value, setValue] = useState('1');
  const theme = useTheme();

  const SortTypography = styled(Typography)(
    ({ theme, selected }) => ({
      padding: '5px 10px',
      borderRadius: '50px',
      height: '44px',
      backgroundColor: selected
        ? theme.palette.secondary.light
        : theme.palette.common.white,
      fontSize: '14px',
      fontWeight: 600,
      color: selected
        ? theme.palette.common.white
        : theme.palette.common.black,
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 8px',
      transition: 'background-color 0.3s ease',
    })
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelectedSortOption(newValue);
  };

  const TabLinks = ({ href, children }) => {
    const router = useRouter();
    const theme = useTheme();
    const active = router.asPath === href;

    return (
      <Link href={href} passHref style={{ textDecoration: 'none' }}>
        <Typography
          color={
            active
              ? theme.palette.primary.main
              : theme.palette.text.primary
          }
          style={{
            padding: '10px 20px',
            borderRadius: '5px',
            backgroundColor: active
              ? theme.palette.action.hover
              : 'transparent',
            '&:hover': {
              backgroundColor: theme.palette.secondary.main,
            },
            '&:active': {
              color: theme.palette.secondary.main,
            },
          }}
        >
          {children}
        </Typography>
      </Link>
    );
  };

  return (
    <>
      <Container>
        <Box
          sx={{
            maxWidth: '671px',
            mx: 'auto',
            textAlign: 'center',
            mt: '100px',
          }}
        >
          <Typography fontSize={'44px'} fontWeight={600}>
            Finding the right fit has never been easier.
          </Typography>
        </Box>
        <Box
          sx={{
            maxWidth: '582px',
            mx: 'auto',
            textAlign: 'center',
            mt: '20px',
          }}
        >
          <Typography fontSize={'18px'} variant="body2">
            With our rigorous pre-vetting process, you'll never have
            to worry about finding the ideal candidate ever again.
          </Typography>
        </Box>
        <Box
          sx={{
            maxWidth: '582px',
            mx: 'auto',
            mt: '30px',
            mb: '50px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <FormControl fullWidth>
            <OutlinedInput
              placeholder="Looking for design |"
              sx={{ borderRadius: '14px' }}
              fullWidth
              endAdornment={
                <Box
                  sx={{
                    width: '64px',
                    display: 'flex',
                    height: '64px',
                    borderRadius: '16px',
                    padding: '30px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: theme.palette.secondary.main,
                  }}
                >
                  <Image
                    src="/blackRightArrow.svg"
                    width={20}
                    height={20}
                  />
                </Box>
              }
            />
          </FormControl>
        </Box>
        <Box
          sx={{
            width: '100%',
            mt: '30px',
            bgcolor: theme.palette.gray.lighter,
            py: '30px',
          }}
        >
          <TabContext value={value}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                sx={{
                  display: 'flex',
                  borderBottom: 'none',
                }}
              >
                <SortTypography
                  variant="caption"
                  onClick={() => handleChange(null, '1')}
                  value="1"
                  selected={selectedSortOption === '1'}
                >
                  IT & Development
                </SortTypography>

                <SortTypography
                  variant="caption"
                  onClick={() => handleChange(null, '2')}
                  selected={selectedSortOption === '2'}
                  value="2"
                  // selected={value === '2'}
                >
                  Design and Creative
                </SortTypography>
              </TabList>
            </Box>
            <TabPanel value="1">
              <Grid container sx={{ mt: '30px' }}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  sx={{
                    display: 'flex',
                    mt: { xs: '40px', md: 0 },
                    justifyContent: 'center',
                  }}
                >
                  <Stack spacing={2}>
                    <TabLinks href="#">Python Developer</TabLinks>
                    <TabLinks href="#">Shopify Developer</TabLinks>
                    <TabLinks href="#">MERN Stack Developer</TabLinks>
                    <TabLinks href="#">Full Stack Developer</TabLinks>
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  sx={{
                    display: 'flex',
                    mt: { xs: '40px', md: 0 },
                    justifyContent: 'center',
                  }}
                >
                  <Stack spacing={2} justifyContent={'center'}>
                    <TabLinks href="#">Data Scientist</TabLinks>
                    <TabLinks href="#">Front End Developer</TabLinks>
                    <TabLinks href="#">Shopify Developer</TabLinks>
                    <TabLinks href="#">Python Developer</TabLinks>
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  sx={{
                    mt: { xs: '40px', md: 0 },
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Stack spacing={2}>
                    <TabLinks href="#">Shopify Developer</TabLinks>
                    <TabLinks href="#">Python Developer</TabLinks>
                    <TabLinks href="#">Full Stack Developer</TabLinks>
                    <TabLinks href="#">Explore More</TabLinks>
                  </Stack>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value="2">Design and Creative</TabPanel>
          </TabContext>
        </Box>{' '}
      </Container>{' '}
      <Box
        sx={{
          mx: 'auto',
          mt: '30px',
          backgroundImage: 'url("/footerLines.svg")',
          width: '100%',
          height: '100px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></Box>{' '}
    </>
  );
};

export default HomeHero;
