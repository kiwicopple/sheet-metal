import React from 'react'
import HeroSection from './../components/HeroSection'
import FeaturesSection from './../components/FeaturesSection'
import ClientsSection from './../components/ClientsSection'
import TestimonialsSection from './../components/TestimonialsSection'
import CtaSection from './../components/CtaSection'
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
        title="One API, many services."
        subtitle="Flock bundles all of your favourite external systems into one easy to use RESTful API."
        buttonText="Request Early Access"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push('/pricing')
        }}
      />
      <FeaturesSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Features"
        subtitle="All the features you need to move faster"
      />
      <ClientsSection
        color="light"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="You're in good company"
        subtitle=""
      />
    </>
  )
}

export default IndexPage
