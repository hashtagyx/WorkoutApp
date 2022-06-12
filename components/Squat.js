import React, {useEffect} from 'react'
import { View, Text, DeviceEventEmitter } from 'react-native'
import ExercisePage from './ExercisePage'

const Squat = ( {route} ) => {
  const SquatTM = route.params.SquatTM
  const squatExercises = route.params.squatExercises
  const setSquatExercises = (newSquatExercises) => {
    DeviceEventEmitter.emit('event.editSquatExercises', newSquatExercises)
  }

  useEffect(() => {
    return () => {
      console.log("Squat Listener Removed!")
      DeviceEventEmitter.removeAllListeners('event.editSquatExercises');
    };
  }, []);

  return (
    <ExercisePage ExerciseTM={SquatTM} exercises={squatExercises} setExercises={setSquatExercises} />
  )
}

export default Squat