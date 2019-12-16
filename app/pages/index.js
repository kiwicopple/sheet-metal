import React from 'react'
import HeroSection from './../components/HeroSection'
import { useRouter } from 'next/router'

function IndexPage(props) {
  const router = useRouter()

  return (
    <>
      <HeroSection
        color="primary"
        size="large"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Turn any Google Sheet into a database."
        subtitle="Sheet Metal lets you read and update any Google spreadsheet using a RESTful API."
        buttonText="Go to your dashboard"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push('/dashboard')
        }}
      />
    </>
  )
}

export default IndexPage
