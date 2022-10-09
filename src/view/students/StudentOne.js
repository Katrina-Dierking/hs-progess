import React from 'react'
import Assignments from '../../components/assignments/Assignments'
import MainScreen from '../../components/mainScreen/MainScreen'

const StudentOne = () => {
  return (
    <MainScreen
      title="Student One's Assignment Progress Portal"
    >
      <div>Assignments:</div>
      <br></br>
      <Assignments />
    </MainScreen>
  )
}

export default StudentOne