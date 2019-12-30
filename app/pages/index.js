import React from 'react'
import Section from '~/components/Section'
import SectionHeader from '~/components/SectionHeader'
import Dashboard from '~/components/Dashboard'
import { useRouter } from 'next/router'
import { useAuth } from '~/util/auth.js'

function IndexPage(props) {
  const auth = useAuth()
  const router = useRouter()

  const onSignin = () => {
    // setStatus({ type: 'pending' })
    auth
      .signin()
      .then(user => {
        console.log('user', user)
        // router.push('/')
      })
      .catch(error => {
        // setStatus({
        //   type: 'error',
        //   message: error.message,
        // })
      })
  }

  if (auth.user) return <Dashboard />
  else
    return (
      <Section color="white" size="large" backgroundImage="" backgroundImageOpacity={1}>
        <div className="container">
          <SectionHeader
            title="Sign in with Google"
            subtitle={'Sheet Metal requires access to you Google Sheets.'}
            centered={false}
            size={3}
          />
          <button className="button" onClick={() => onSignin()}>
            Grant access
          </button>
        </div>
      </Section>
    )
}

export default IndexPage
