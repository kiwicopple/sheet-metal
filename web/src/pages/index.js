/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const features = [
  {
    title: <>Prototyping</>,
    imageUrl: 'img/use-prototype.png',
    description: (
      <>Don't worry about setting up a database. Use a Google Sheets for rapid prototyping.</>
    ),
    href: '/docs/guides/examples',
  },
  {
    title: <>Custom forms</>,
    imageUrl: 'img/use-crm.png',
    description: (
      <>Put a custom form on your website and collect leads and responses in Google Sheets.</>
    ),
    href: '/docs/guides/examples',
  },
  {
    title: <>Mobile development</>,
    imageUrl: 'img/use-mobile.png',
    description: <>Deploy a mobile app without deploying any other backend infrastructure.</>,
    href: '/docs/guides/examples',
  },
]

function Feature({ imageUrl, title, description, href }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={classnames('col', styles.feature)}>
      <a className={classnames('card', styles.featureCard)} href={href}>
        <div className="card__body">
          {imgUrl && (
            <div className="">
              <img className={styles.featureImage} src={imgUrl} alt={title} />
            </div>
          )}
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </div>
  )
}
function HowCard({ title, heading, description }) {
  return (
    <div className={classnames('col', styles.howCard)}>
      <div className="">
        <h3>{title}</h3>
        <h4>{heading}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}
function PricingCard({ title, description, href }) {
  return (
    <div className={classnames('col', styles.pricingCard)}>
      <a className="card" href={href}>
        <div className="card__body text--center">
          <h3>{title}</h3>
          <>{description}</>
        </div>
      </a>
    </div>
  )
}
function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout title={`${siteConfig.title}`} description={siteConfig.tagline}>
      <header className={classnames('hero shadow--md', styles.heroBanner)}>
        <div className="container text--center">
          <h2 className="hero__title">{siteConfig.tagline}</h2>
          <p className="hero__subtitle">
            Sheet Metal lets you read and update any Google spreadsheet using a RESTful API.
          </p>
          <div>
            <img src="/img/hero.png" alt="Sheet Metal" className={classnames(styles.heroImage)} />
          </div>
        </div>
      </header>

      <div className={classnames('container text--center')}>
        <Link
          className={classnames(
            'button button--outline button--md button--secondary',
            styles.button
          )}
          to={useBaseUrl('docs/about')}
        >
          Learn More
        </Link>
        <Link
          className={classnames('button button--outline button--md button--primary', styles.button)}
          to={useBaseUrl('docs/about')}
        >
          Get Started
        </Link>
      </div>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <h2 className="with-underline">Use Cases</h2>
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <section className={styles.features}>
          <div className="container">
            <h2 className="with-underline">How it works</h2>
            <div className="row">
              <HowCard
                title="1."
                heading="Create a Google Sheet"
                description={
                  <>
                    Create a Google Sheet which you can use as a database. Every tab within the
                    sheet can represent a database table.
                  </>
                }
              />
              <HowCard
                title="2."
                heading="Connect Sheet Metal"
                description={
                  <>
                    Grant access to your sheet in the Sheet Metal dashboard, and we will provide you
                    with a secure and unique API key for each sheet.
                  </>
                }
              />
              <HowCard
                title="3."
                heading="Use your Sheet like a database"
                description={
                  <>
                    Sheet Metal gives you full access to update with your spreadsheet via a RESTful
                    API.
                  </>
                }
              />
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <div className="container">
            <h2 className="with-underline">Pricing</h2>
            <div className="row">
              <PricingCard
                title="Self-hosted"
                description={
                  <>
                    <p>Unlimited API Keys</p>
                    <p>Unlimited API Calls</p>
                  </>
                }
                href={'/docs/guides/examples'}
              />
              <PricingCard
                title="Free"
                description={
                  <>
                    <p>One connected sheet</p>
                    <p>Unlimited API Calls</p>
                  </>
                }
                href={'/docs/guides/examples'}
              />
              <PricingCard
                title="$5/month"
                description={
                  <>
                    <p>Unlimited connected sheets</p>
                    <p>Unlimited API Calls</p>
                  </>
                }
                href={'/docs/guides/examples'}
              />
            </div>
          </div>
        </section>
        <section style={{ marginTop: 40, padding: 20 }} className="hero is--dark">
          <div className="container text--right">
            <div className="">
              <strong>Try Sheet Metal for free</strong>
              <Link
                className={classnames(
                  'button button--outline button--md button--primary',
                  styles.button
                )}
                to={useBaseUrl('docs/about')}
              >
                GO
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Home
