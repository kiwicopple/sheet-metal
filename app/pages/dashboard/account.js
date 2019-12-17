import React, { useEffect } from 'react'
import { useAuth, addConfig } from './../../util/auth.js'
import { useRouter } from 'next/router'
import { get } from 'lodash'
import Section from '../../components/Section'
import Link from 'next/link'
import DashboardNav from '../../components/Dashboard/DashboardNav.js'

function AccountPage(props) {
  const auth = useAuth()
  const router = useRouter()
  const userId = get(auth, 'user.id', null)

  // Redirect to /signin
  // if not signed in.
  useEffect(() => {
    if (auth.user === false) {
      router.push('/signin')
    }
  }, [auth, router])

  return (
    <Section>
      <DashboardNav />
      <div className="container">
        <div className="level is-mobile">
          <div className="level-left">
            <h2 className="title is-3">Your Account</h2>
          </div>
          <div className="level-right">
            
          </div>
        </div>

        <Link href="/signout">
          <a
            className="button"
            onClick={e => {
              e.preventDefault()
              auth.signout()
            }}
          >
            Sign out
          </a>
        </Link>
      </div>
    </Section>
  )
}

export default AccountPage
