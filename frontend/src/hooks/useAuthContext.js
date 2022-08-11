import {AuthContext} from '../context/AuthContext'
import {useContext} from 'react'

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  // only use the context if its in the right tree of components
  if (!context) {
    throw Error('useAuthContext must be used inside a AuthContextProvider')
  }

  return context
}
