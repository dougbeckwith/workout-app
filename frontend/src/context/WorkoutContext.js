import {createContext, useReducer} from 'react'

export const WorkoutContext = createContext()

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return {
        workouts: action.payload,
      }
    case 'CREATE_WORKOUT':
      return {
        workouts: [action.payload, ...state.workouts],
      }
    default:
      return state
  }
}

export const WorkoutContextProvider = ({children}) => {
  // dispatch function to update the state
  // if we want to update the state we call the dispatch function
  // we pass a object in with a type, and payload
  // when we call this dispatch function our workouts reducer function is envoked

  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null,
  })
  return (
    <WorkoutContext.Provider value={{...state, dispatch}}>
      {children}
    </WorkoutContext.Provider>
  )
}
