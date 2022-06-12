import React, {useEffect} from 'react'
import { View, Text, DeviceEventEmitter } from 'react-native'
import ExercisePage from './ExercisePage'

const BenchPress = ( {route} ) => {
  // console.log(route)
  const BenchPressTM = route.params.BenchPressTM
  const benchExercises = route.params.benchExercises
  const setBenchExercises = (newBenchExercises) => {
    DeviceEventEmitter.emit('event.editBenchExercises', newBenchExercises)
  }

  useEffect(() => {
    return () => {
      // console.log("Bench Listener Removed!")
      DeviceEventEmitter.removeAllListeners('event.editBenchExercises');
    };
  }, []);

  return (
    <ExercisePage ExerciseTM={BenchPressTM} exercises={benchExercises} setExercises={setBenchExercises} />
  )
}

export default BenchPress