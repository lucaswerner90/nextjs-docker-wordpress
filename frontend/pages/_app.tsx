import React from 'react';
import App, { Container } from 'next/app';
import Router from "next/router";
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';

import { Provider } from 'react-redux';
import { makeStore } from '../src/redux/store';
import withRedux from "next-redux-wrapper";

import { hotjar } from 'react-hotjar';
import withGA from "next-ga";


class MyApp extends App<any> {
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

if (process.env.HOTJAR_KEY) {
  hotjar.initialize(process.env.HOTJAR_KEY, 6);
}

let app = withRedux(makeStore)(MyApp);

if (process.env.GA_KEY) {
  app = withGA(process.env.GA_KEY, Router)(app);
}

export default app;
