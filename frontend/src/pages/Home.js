import {useEffect} from 'react'
import {useWorkoutsContext} from '../hooks/useWorkoutsContext'

// components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
  const {workouts, dispatch} = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      // added proxy in package.json to fix cors error
      // we set this equal to the development server address
      // which is localhost port 4000 the address of the node server
      // it tells our react dev server to proxy any requests it
      // doesnt recognize to localhost 4000
      // FOR PRODUCTION MAKE SURE IT POINTS TO THE PROPER END POINT
      const response = await fetch('/api/workouts')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    fetchWorkouts()
  }, [dispatch])

  return (
    <div className='home'>
      <div className='workouts'>
        {workouts &&
          workouts.map((workout) => {
            return <WorkoutDetails key={workout._id} workout={workout} />
          })}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home
