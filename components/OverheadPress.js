import React, {useEffect} from 'react'
import { View, Text, DeviceEventEmitter } from 'react-native'
import ExercisePage from './ExercisePage'

const OverheadPress = ( {route} ) => {
  const OverheadPressTM = route.params.OverheadPressTM
  const OHPExercises = route.params.OHPExercises
  const setOHPExercises = (newOHPExercises) => {
    DeviceEventEmitter.emit('event.editOHPExercises', newOHPExercises)
  }

  useEffect(() => {
    return () => {
      console.log("OHP Listener Removed!")
      DeviceEventEmitter.removeAllListeners('event.editOHPExercises');
    };
  }, []);

  return (
    <ExercisePage ExerciseTM={OverheadPressTM} exercises={OHPExercises} setExercises={setOHPExercises} />
  )
}

export default OverheadPress