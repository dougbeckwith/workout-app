import {WorkoutContext} from '../context/WorkoutContext'
import {useContext} from 'react'

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutContext)

  // only use the context if its in the right tree of components
  if (!context) {
    throw Error(
      'useWorkoutsContext must be used inside a WorkoutsContextProvider'
    )
  }

  return context
}
