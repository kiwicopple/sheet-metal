import React from 'react'
import Section from './Section'
import Link from 'next/link'
import './Footer.scss'

function Footer(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="FooterComponent__container container">
        <div className="columns">
          <div className="column is-5 is-4-widescreen">
            <Link href="/">
              <a className="brand">
                <div className="brand-icon">
                  <img className="FooterComponent__logo" src={props.logo} alt="Logo" />
                </div>
              </a>
            </Link>

            {props.description && (
              <p className="FooterComponent__description">{props.description}</p>
            )}

            {props.copyright && <p className="FooterComponent__copywrite">{props.copyright}</p>}
          </div>
          <div className="column is-7 is-6-widescreen is-offset-2-widescreen">
            <div className="columns">
              <div className="column is-4">
                <div className="menu">
                  <p className="menu-label">Product</p>
                  <ul className="menu-list">
                    <li>
                      <Link href="/pricing">
                        <a>Pricing</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq">
                        <a>FAQ</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="column is-4">
                <div className="menu">
                  <p className="menu-label">Company</p>
                  <ul className="menu-list">
                    <li>
                      <Link href="/about">
                        <a>About</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a>Contact</a>
                      </Link>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://medium.com"
                        rel="noopener noreferrer"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
              {/* <div className="column is-4">
                <div className="menu">
                  <p className="menu-label">Social</p>
                  <ul className="menu-list">
                    <li>
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://uploads.divjoy.com/icon-facebook.svg"
                          alt="Facebook"
                        />
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://uploads.divjoy.com/icon-instagram.svg"
                          alt="Instagram"
                        />
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://uploads.divjoy.com/icon-twitter.svg"
                          alt="Twitter"
                        />
                        Twitter
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Footer
