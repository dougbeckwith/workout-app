import {AuthContext} from '../context/AuthContext'
import {useContext} from 'react'

export const useAuthContext = () => {
  // use Context is the hook we imported
  // we pass in the workout context object
  // this hook returns to use the value of the context
  // which is the value we passed into the Provider Component
  // its this object with the state and the dispatch function
  // anytime we want to use the data we just invode the useAuthContext hook
  const context = useContext(AuthContext)

  // only use the context if its in the right tree of components
  if (!context) {
    throw Error('useAuthContext must be used inside a AuthContextProvider')
  }

  return context
}
