'use client';
import {
  Box,
  Grid,
  Typography,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
} from '@mui/material';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';

export default function TopNavbar() {
  const largeScreenDown = useMediaQuery('(min-width:1200px)');
  const user = useSelector((state) => state.user);
  const theme = useTheme();
  const styleLink = {
    fontSize: '14px',
    textDecoration: 'none',
    color: 'inherit',
  };

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box
        sx={{ px: '10px', display: 'flex', justifyContent: 'end' }}
      >
        <IconButton>
          {' '}
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {[
          'Find Work',
          'Find Talent',
          'Articles',
          'About Us',
          'Contact Us',
        ].map((text, index) => (
          <ListItem button key={text}>
            <Link href="#" style={styleLink}>
              {text}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ bgcolor: theme.palette.primary.main }}
      >
        <Toolbar>
          <Grid
            spacing={2}
            container
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Grid item xs={2}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, display: { xs: 'block', lg: 'none' } }}
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>{' '}
              <Link
                href="/"
                style={{
                  display: !largeScreenDown ? 'none' : 'block',
                }}
              >
                {' '}
                <Image
                  style={{
                    display: { xs: 'none', lg: 'block' },
                  }}
                  src={'/navLogo.svg'}
                  width={200}
                  height={40}
                />{' '}
              </Link>
            </Grid>
            <Grid
              item
              xs={4}
              sm={7}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  display: { xs: 'none', lg: 'flex' },
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: { xs: 'auto', sm: '500px' },
                }}
              >
                <Link href="#" style={styleLink}>
                  Find Work
                </Link>
                <Link href="#" style={styleLink}>
                  Find Talent
                </Link>
                <Link href="#" style={styleLink}>
                  Articles
                </Link>
                <Link href="#" style={styleLink}>
                  About Us
                </Link>
                <Link href="#" style={styleLink}>
                  Contact Us
                </Link>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {user ? (
                <Typography variant="body1">{user?.email}</Typography>
              ) : (
                <Box
                  sx={{
                    alignItems: 'center',
                    padding: '8px',
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}
                >
                  <Typography variant="body2" color="inherit">
                    Login
                  </Typography>
                  <Typography
                    sx={{
                      bgcolor: theme.palette.common.white,
                      borderRadius: '16px',
                      padding: { xs: '9px 20px', md: '9px 24px' },
                      marginLeft: '8px',
                      height: '43px',
                      alignContent: 'center',

                      fontWeight: 500,
                      fontSize: { xs: '12px', md: '14px' },
                    }}
                    color={theme.palette.common.black}
                  >
                    Join Now
                  </Typography>
                </Box>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </Box>
  );
}
