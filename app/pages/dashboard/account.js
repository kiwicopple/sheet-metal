import React, { useEffect } from 'react'
import { useAuth, addConfig } from './../../util/auth.js'
import { useRouter } from 'next/router'
import { get } from 'lodash'
import Section from '../../components/Section'
import Link from 'next/link'
import DashboardNav from '../../components/Dashboard/DashboardNav.js'
import ChangePass from './../../components/ChangePass'

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
      <DashboardNav active="account" />
      <div className="container">
        <div className="level is-mobile">
          <div className="level-left">
          </div>
          <div className="level-right">
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
        </div>

        <>
          <div className="container box">
            <h4 className="title is-4">Change your password</h4>
            <ChangePass buttonText={'Change Password'} parentColor={'white'} />
          </div>
        </>
        <>
          <div className="container box">
            <h4 className="title is-4">Danger</h4>
            Delete account
          </div>
        </>
      </div>
    </Section>
  )
}

export default AccountPage
