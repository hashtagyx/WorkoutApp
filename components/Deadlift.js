import React, {useEffect} from 'react'
import { View, Text, DeviceEventEmitter } from 'react-native'
import ExercisePage from './ExercisePage'

const Deadlift = ( {route} ) => {
  const DeadliftTM = route.params.DeadliftTM
  const deadliftExercises = route.params.deadliftExercises
  const setDeadliftExercises = (newDeadliftExercises) => {
    DeviceEventEmitter.emit('event.editDeadliftExercises', newDeadliftExercises)
  }
 
  useEffect(() => {
    return () => {
      console.log("Deadlift Listener Removed!")
      DeviceEventEmitter.removeAllListeners('event.editDeadliftExercises');
    };
  }, []);

  return (
    <ExercisePage ExerciseTM={DeadliftTM} exercises={deadliftExercises} setExercises={setDeadliftExercises} />
  )
}

export default Deadlift