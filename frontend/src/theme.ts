import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    h5: {
      fontWeight: 'lighter'
    }
  },
  palette: {
    primary: {
      main: '#000'
    },
    secondary: {
      main: '#fff'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        padding: '10px 16px',
      },
    },
    MuiPaper: {
      root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#ffffffbf',
        padding: '6%'
      },
    }
  }
});

export default theme;
