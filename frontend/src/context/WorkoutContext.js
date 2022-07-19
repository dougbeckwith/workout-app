import {createContext, useReducer} from 'react'

export const WorkoutContext = createContext()

// state which is the previous state
// the second argument is the action is the object that is
// passed into the dispatch function
// it has a type and a payload
// easyiest way to do this is write a switch statement
export const workoutsReducer = (state, action) => {
  // return the new state we want
  switch (action.type) {
    case 'SET_WORKOUTS':
      return {
        workouts: action.payload,
      }
    case 'CREATE_WORKOUT':
      return {
        workouts: [action.payload, ...state.workouts],
      }
    case 'DELETE_WORKOUT':
      return {
        workouts: state.workouts.filter((workout) => {
          return workout._id !== action.payload._id
        }),
      }
    default:
      return state
  }
}

export const WorkoutContextProvider = ({children}) => {
  // use reducer takes in two things
  // reducer function name
  // initial value for state
  // we get back the state and the dispatch function to update
  // the state

  // dispatch function
  // we pass in a object as an argument
  // the first property:
  // type: 'STRING' describe the state change you want to make
  // the second property:
  // payload:[{}, {}]   represents any data we need to make the state change
  // this argument inside the dispatch function is called an action
  // when we call this dispatch function
  // inturn our reducer function is invoked which is this workouts Reducer
  // function and it passes the action into the reducer function
  // so it can update the state using this data
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null,
  })
  return (
    // value pass in the state and the dispatch function to update the state
    <WorkoutContext.Provider value={{...state, dispatch}}>
      {children}
    </WorkoutContext.Provider>
  )
}
