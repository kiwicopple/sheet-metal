import React, { useEffect } from 'react'
import { useAuth } from '~/util/auth.js'
import { useRouter } from 'next/router'
import { get } from 'lodash'
import Section from '~/components/Section'
import Link from 'next/link'

function Dashboard(props) {
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
    <>
      <Section>
        <div className="container">
          <div className="level is-mobile">
            <div className="level-left">
              <h4 className="title is-4">Sheets</h4>
            </div>
            <div className="level-right">
              <h2 className="title is-3">
                <Link href="/projects/new">
                  <a className="button is-primary" onClick={() => addSheet(userId)}>
                    New
                  </a>
                </Link>
              </h2>
            </div>
          </div>

          <a className="box" href="#">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <p className="heading">sheet name</p>
                  <p className="">Project Name</p>
                </div>
              </div>
            </article>
          </a>
        </div>
      </Section>
      <Section>
        <>
          <div className="container">
            <h4 className="title is-4">Account</h4>
            <a
              className="button"
              onClick={e => {
                e.preventDefault()
                auth.signout()
              }}
            >
              Sign out
            </a>
          </div>
        </>
      </Section>
    </>
  )
}

export default Dashboard
