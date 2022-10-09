import React from 'react'
import Assignments from '../../components/assignments/Assignments';
import MainScreen from '../../components/mainScreen/MainScreen'

const StudentTwo = () => {
  return (
    <MainScreen title="Student Two's Assignment Progress Portal">
      <div>Assignments:</div>
      <br></br>
      <Assignments />
    </MainScreen>
  );
}

export default StudentTwo