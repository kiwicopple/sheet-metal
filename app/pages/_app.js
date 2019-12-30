import React from 'react'
import Head from 'next/head'
import Navbar from './../components/Navbar'
import Footer from './../components/Footer'
import App from 'next/app'
import { ProvideAuth } from '~/util/auth.js'
import { ProvideStore } from '~/util/storeProvider.js'

import './../styles/global.scss'

class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props

    return (
      <ProvideStore>
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
      </ProvideStore>
    )
  }
}

export default MyApp
