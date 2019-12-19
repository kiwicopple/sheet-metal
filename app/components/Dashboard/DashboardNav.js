import React from 'react'
import Link from 'next/link'

function DashboardNav(props) {
  return (
      <div className="container m-b-md">
        <div className="tabs">
          <ul>
            <li className={props.active == 'sheets' ? 'is-active' : ''}>
              <Link href="/dashboard">
                <a>Sheets</a>
              </Link>
            </li>

            <li className={props.active == 'account' ? 'is-active' : ''}>
              <Link href="/dashboard/account">
                <a>Account</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default DashboardNav
