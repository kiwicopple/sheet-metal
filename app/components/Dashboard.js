import React from 'react'
import { useAuth } from '~/util/auth.js'
import Section from '~/components/Section'
import { useStore } from '~/util/storeProvider.js'
import NewSheetModal from '~/components/Dashboard/NewSheetModal'
import { values } from 'mobx'

import { observer } from 'mobx-react'

const Sheet = ({ sheet }) => {
  const store = useStore()
  return (
    <a className="box" href="#">
      <article className="media">
        <div className="media-content">
          <div className="content">
            <p className="heading">sheet name</p>
            <p className="">{sheet.sheetId}</p>
            <button className="button" onClick={() => store.removeSheet(sheet.sheetId)}>
              {sheet.sheetId}
            </button>
          </div>
        </div>
      </article>
    </a>
  )
}

const Dashboard = () => {
  const auth = useAuth()
  const store = useStore()
  const { setNewSheetModalVisible, sheets } = store

  return (
    <>
      <NewSheetModal />
      <Section>
        <div className="container">
          <div className="level is-mobile">
            <div className="level-left">
              <h4 className="title is-4">Sheets</h4>
            </div>
            <div className="level-right">
              <h2 className="title is-3">
                <a className="button is-primary" onClick={() => setNewSheetModalVisible(true)}>
                  New
                </a>
              </h2>
            </div>
          </div>

          {values(sheets).map(x => (
            <Sheet sheet={x} key={x.sheetId} />
          ))}
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

export default observer(Dashboard)
