import React from 'react'
import Section from '~/components/Section'
import NewTeam from '~/components/Dashboard/NewTeam'
import { useRouter } from 'next/router'

function NewTeamPage(props) {
  const router = useRouter()

  // Go to page after signin
  const onCreateTeam = () => {
    router.push('/dashboard')
  }

  return (
    <Section color="light" size="small" backgroundImage="" backgroundImageOpacity={1}>
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-6">
            <div className="box p-lg">
              <h3 className="title is-4">Create a new project</h3>
              <p className="m-b-lg">Give your project a descriptive name.</p>
              <NewTeam buttonText={'Sign in'} parentColor={'white'} onCreateTeam={onCreateTeam} />
              <figure className="m-t-xl">
                <img src="/img/person-settings.svg" alt="New team" />
              </figure>
            </div>

            <button class="button is-white">
              <span class="icon">
                <i class="fas fa-arrow-left"></i>
              </span>
              <span>Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default NewTeamPage
