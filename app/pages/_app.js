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
            <title>Sheet Metal. Turn any Google Sheet into a database.</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
            <link rel="icon" href="favicon.ico" type="image/x-icon" />
          </Head>
          <Navbar color="" spaced={false} logo="/img/logo.svg" />

          <Component {...pageProps} />

          <Divider color="light" />
          <Footer
            color="white"
            size="medium"
            backgroundImage=""
            backgroundImageOpacity={1}
            description="Sheet Metal lets you read and update any Google spreadsheet using a RESTful API."
            copyright="© 2019 kiwicopple"
            logo="/img/logo.svg"
          />
        </>
      </ProvideAuth>
    )
  }
}

export default MyApp
