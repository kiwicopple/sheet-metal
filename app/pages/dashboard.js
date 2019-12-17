import React, { useEffect } from 'react'
import { useAuth, addConfig } from './../util/auth.js'
import { useRouter } from 'next/router'
import { get } from 'lodash'
import Section from '../components/Section'
import Link from 'next/link'
import DashboardNav from '../components/Dashboard/DashboardNav'

function DashboardPage(props) {
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
            <h2 className="title is-3">Your Sheets</h2>
          </div>
          <div className="level-right">
            <h2 className="title is-3">
              <Link href="/projects/new">
                <a className="button is-primary" onClick={() => addConfig(userId)}>
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
  )
}

export default DashboardPage
