import React, { useState, useEffect, useContext, createContext } from 'react'
import queryString from 'query-string'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { SheetSchema } from '../interfaces'

if (!firebase.apps.length) {
  // Replace with your own Firebase credentials
  firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    appID: process.env.FIREBASE_APP_ID,
  })
}

const authContext = createContext()

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

// Hook for child components to get the auth object ...
// ... update when it changes.
export const useAuth = () => {
  return useContext(authContext)
}

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null)

  const signin = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        setUser(response.user)
        return response.user
      })
  }

  const signup = (email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        setUser(response.user)
        return response.user
      })
  }

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false)
      })
  }

  const sendPasswordResetEmail = email => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true
      })
  }

  const confirmPasswordReset = (password, code) => {
    // Get code from query string object
    const resetCode = code || getFromQueryString('oobCode')

    return firebase
      .auth()
      .confirmPasswordReset(resetCode, password)
      .then(() => {
        return true
      })
  }

  // Subscribe to user on mount
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user)
      } else {
        setUser(false)
      }
    })

    // Subscription unsubscribe function
    return () => unsubscribe()
  }, [])

  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  }
}

const getFromQueryString = key => {
  return queryString.parse(window.location.search)[key]
}

/**
 * Link a sheet
 */
export const addSheet = async team => {
  const value = await SheetSchema.validateAsync(team)
  const docRef = await firebase
    .firestore()
    .collection('sheets')
    .add(value)
  return docRef.id
}

