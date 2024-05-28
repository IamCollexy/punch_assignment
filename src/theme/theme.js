import { createTheme } from '@mui/material';
import { customTheme } from './custom';

const theme = createTheme({
  palette: {
    mode: customTheme?.palette.mode || 'light',
    common: {
      black: customTheme ? customTheme.palette.common.black : '#000',
      white: customTheme ? customTheme.palette.common.white : '#fff',
    },
    primary: {
      main: customTheme
        ? customTheme.palette.primary.main
        : '#525AA0',
      light: customTheme
        ? customTheme.palette.primary.light
        : '#EDEFFF',
      dark: customTheme
        ? customTheme.palette.primary.dark
        : '#202229',
      contrastText: customTheme
        ? customTheme.palette.primary.contrastText
        : '#000',
    },
    secondary: {
      main: customTheme
        ? customTheme.palette.secondary.main
        : '#FFBE2E',
      light: customTheme
        ? customTheme.palette.secondary.light
        : '#A9D6A4',
      dark: customTheme
        ? customTheme.palette.secondary.dark
        : '#388E3C',
      contrastText: customTheme
        ? customTheme.palette.secondary.contrastText
        : '#fff',
    },

    gray: {
      lightest: customTheme
        ? customTheme.palette.gray.lightest
        : '#F6F6F6',
      lighter: customTheme
        ? customTheme.palette.gray.lighter
        : '#EEEEEE',
      light: customTheme ? customTheme.palette.gray.light : '#E0E0E0',
      dark: customTheme ? customTheme.palette.gray.dark : '#BDBDBD',
      darker: customTheme
        ? customTheme.palette.gray.darker
        : '#9E9E9E',
      darkest: customTheme
        ? customTheme.palette.gray.darkest
        : '#202229',
    },
    text: {
      primary: customTheme
        ? customTheme.palette.text.primary
        : '#000',
      secondary: customTheme
        ? customTheme.palette.text.secondary
        : '#000', // Check if this is the desired default value
      disabled: customTheme
        ? customTheme.palette.text.disabled
        : '#5B5B5B',
    },
    error: {
      main: customTheme ? customTheme.palette.error.main : '#FF0000',
    },
    standardSuccess: {
      backgroundColor: '#4CAF50',
      color: '#fff',
    },
    standardError: {
      backgroundColor: '#FF0000',
      color: '#fff',
    },
  },

  components: {
    MuiAlert: {
      styleOverrides: {
        standardSuccess: {
          backgroundColor: customTheme
            ? customTheme.alertComponent.standardSuccess
                .backgroundColor
            : '#4CAF50',
          color: customTheme
            ? customTheme.alertComponent.standardSuccess.color
            : '#fff',
        },
        standardError: {
          backgroundColor: customTheme
            ? customTheme.alertComponent.standardError.backgroundColor
            : '#FF0000',
          color: customTheme
            ? customTheme.alertComponent.standardError.color
            : '#FFCCCC',
        },
        standardWarning: {
          backgroundColor: customTheme
            ? customTheme.alertComponent.standardWarning
                .backgroundColor
            : '#FF8C00',
          color: customTheme
            ? customTheme.alertComponent.standardWarning.color
            : '#FFE8CC',
        },
        standardInfo: {
          backgroundColor: customTheme
            ? customTheme.alertComponent.standardInfo.backgroundColor
            : '#55ABFF',
          color: customTheme
            ? customTheme.alertComponent.standardInfo.color
            : '#CCE6FF',
        },
      },
    },
  },
});

export default theme;
