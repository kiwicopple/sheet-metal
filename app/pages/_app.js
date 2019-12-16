import React from 'react'
import Head from 'next/head'
import Navbar from './../components/Navbar'
import Divider from './../components/Divider'
import Footer from './../components/Footer'
import App from 'next/app'
import './../util/analytics.js'
import { ProvideAuth } from './../util/auth.js'
import './../styles/global.scss'

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props

    return (
      <ProvideAuth>
        <>
          <Head>
            <title>Flock. One API to rule them all.</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link
              href="https://fonts.googleapis.com/css?family=Rajdhani:400,500,600,700&display=swap"
              rel="stylesheet"
            />
          </Head>
          <Navbar color="primary" spaced={true} logo="/logo-white.svg" />

          <Component {...pageProps} />

          <Divider color="light" />
          <Footer
            color="white"
            size="medium"
            backgroundImage=""
            backgroundImageOpacity={1}
            description="Flock is an API on top of multiple notification services to overcome repetitive building and platform idiosyncrasies."
            copyright="© 2019 Flock"
            logo="/logo.svg"
          />
        </>
      </ProvideAuth>
    )
  }
}

export default MyApp
