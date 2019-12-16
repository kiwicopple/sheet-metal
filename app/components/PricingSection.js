import React from 'react'
import Section from './Section'
import SectionHeader from './SectionHeader'
import Pricing from './Pricing'
import './PricingSection.scss'

function PricingSection(props) {
  return (
    <Section
      id="pricing"
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="PricingSection__container container">
        <SectionHeader title={props.title} subtitle={props.subtitle} centered={true} size={3} />
        <Pricing
          buttonText="Choose"
          onChoosePlan={planId => {
            // Add your own payments logic here
            alert(`You chose the plan "${planId}"`)
          }}
          items={[
            {
              id: 'monthly',
              timespan: 'Monthly',
              price: '15',
              description: 'Access to all services, with unlimited calls for only $15 per month.',
            },
            {
              id: 'yearly',
              timespan: 'Yearly',
              price: '9',
              description:
                'Want to save even more money? Sign up for a full year to get 40% discount.',
            },
          ]}
        />
      </div>
    </Section>
  )
}

export default PricingSection
