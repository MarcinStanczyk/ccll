import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styles/jss/theme';

function MyApp({ Component, pageProps }) {
    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

  return (
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp
