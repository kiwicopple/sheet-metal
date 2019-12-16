import React, { useState } from 'react'
import FormStatus from '~/components/FormStatus'
import FormField from '~/components/FormField'
import Link from 'next/link'

function Auth(props) {
  // State for all inputs
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')

  // Whether to show errors
  // We set to true if they submit and there are errors.
  // We only show errors after they submit because
  // it's annoying to see errors while typing.
  const [showErrors, setShowErrors] = useState(false)

  // Error array we'll populate
  let errors = []

  // Function for fetching error for a field
  const getError = field => {
    return errors.find(e => e.field === field)
  }

  // Function to see if field is empty
  const isEmpty = val => val.trim() === ''

  // Add error if email empty
  if (['signin', 'signup', 'forgotpass'].includes(props.mode)) {
    if (isEmpty(email)) {
      errors.push({
        field: 'email',
        message: 'Please enter an email',
      })
    }
  }

  // Add error if password empty
  if (['signin', 'signup', 'changepass'].includes(props.mode)) {
    if (isEmpty(pass)) {
      errors.push({
        field: 'pass',
        message: 'Please enter a password',
      })
    }
  }

  // Add error if confirmPass empty or
  // if it doesn't match pass.
  // Only for signup and changepass views.
  if (['signup', 'changepass'].includes(props.mode)) {
    if (isEmpty(confirmPass)) {
      errors.push({
        field: 'confirmPass',
        message: 'Please confirm password',
      })
    } else if (pass !== confirmPass) {
      errors.push({
        field: 'confirmPass',
        message: `This doesn't match your password`,
      })
    }
  }

  // Handle form submission
  const handleSubmit = () => {
    // If field errors then show them
    if (errors.length) {
      setShowErrors(true)
    } else {
      // Otherwise call onSubmit with email/pass
      if (props.onSubmit) {
        props.onSubmit({
          email,
          pass,
        })
      }
    }
  }

  return (
    <div className="Auth">
      {props.status && props.status.message && (
        <FormStatus type={props.status.type} message={props.status.message} />
      )}

      <form
        onSubmit={e => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <FormField
          value={email}
          type="text"
          placeholder="Team name"
          error={showErrors && getError('name')}
          onChange={value => setEmail(value)}
        />

        <div className="field">
          <p className="control ">
            <button
              className={`button is-primary is-fullwidth ${
                props.status && props.status.type === 'pending' ? 'isloading' : 'isnormal'
              }`}
            >
              {props.buttonText}
            </button>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Auth
