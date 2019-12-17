import React from 'react'
import Section from '../Section'
import Link from 'next/link'

function DashboardNav(props) {
  return (
    <Section>
      <div className="container">
        <div className="tabs">
          <ul>
            <li class={props.active == ''}>
              <Link href="/dashboard">
                <a>Sheets</a>
              </Link>
            </li>

            <li>
              <Link href="/dashboard/account">
                <a>Account</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  )
}

export default DashboardNav
