import React, { useState } from 'react'
import Modal from './components/Modal/Modal';

import Schedule from './components/Schedule/Schedule'

export default function createSchedule() {

  const [notRamadan, setnotRamadan] = useState(false)  
  const [lectures, setLectures] = useState([]);

  function addClass(lecture){
    setLectures([...lectures, lecture])
  }

  function toggleNotRamadan() {
    setnotRamadan(!notRamadan);
  }

  return (
    <div>
        <Modal addClass={addClass} toggle={toggleNotRamadan}/>
        <Schedule lectures={lectures} notRamadan={notRamadan}/>
    </div>
  )
}
