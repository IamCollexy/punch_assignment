'use client';
import { Open_Sans } from 'next/font/google';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '@/theme/theme';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../../store/store';
import TopNavbar from '@/components/navbar/topNavbar';
const openSans = Open_Sans({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="#" type="image/x-icon" />

        <title>
          Punch Interview Stage 2, To build a landing Page
        </title>
      </head>
      <body className={openSans.className}>
        <CssBaseline enableColorScheme />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <TopNavbar />
              {children}
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
