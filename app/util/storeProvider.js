import { useContext, createContext } from 'react'
import store from './store'

const storeContext = createContext()

export function ProvideStore({ children }) {
  return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export const useStore = () => {
  return useContext(storeContext)
}
