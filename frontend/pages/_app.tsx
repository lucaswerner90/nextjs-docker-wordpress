import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';

import { Provider } from 'react-redux';
import { makeStore } from '../src/redux/store';
import withRedux from "next-redux-wrapper";

class MyApp extends App<any, any> {
  static async getInitialProps({ Component, ctx }) {
    let componentProps = {};

    if (Component.getInitialProps) {
      componentProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps: {
        ...componentProps,
        user: ctx.req && ctx.req.user ? ctx.req.user : {}
      }
    };
  }
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <Container>
          <Head>
            <title>Lucas Werner Main Template</title>
          </Head>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </Container>
      </Provider>
    );
  }
}

let app = withRedux(makeStore)(MyApp);


export default app;
