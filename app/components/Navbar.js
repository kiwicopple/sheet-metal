import React, { useState } from 'react'
import Link from 'next/link'
import { useAuth } from './../util/auth.js'

function Navbar(props) {
  const auth = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className={
        'navbar' + (props.color ? ` is-${props.color}` : '') + (props.spaced ? ' is-spaced' : '')
      }
    >
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link href="/">
              <a>
                <img className="image" src={props.logo} alt="Logo" />
              </a>
            </Link>
          </div>
          <div
            className={'navbar-burger burger' + (menuOpen ? ' is-active' : '')}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={'navbar-menu' + (menuOpen ? ' is-active' : '')}>
          <div className="navbar-end">
            <a className="navbar-item" href="https://sheetmetal.io/docs/">
              Docs
            </a>
            {auth.user && (
              <>
                <Link href="/dashboard">
                  <a className="navbar-item">Dashboard</a>
                </Link>
                <Link href="/account">
                  <a className="navbar-item">Account</a>
                </Link>
              </>
            )}

            {!auth.user && (
              <Link href="/signin">
                <a className="navbar-item">Sign in</a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
