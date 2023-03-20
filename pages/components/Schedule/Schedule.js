import React, { useState } from 'react'
import Days from './Days'
import LecturesList from './LecturesList'
import Timeslots from './Timeslots'


export default function Schedule({lectures, notRamadan}) {

  return (
    <div className="schedule-container">
       <Days />
       <Timeslots /> 
       <LecturesList lectures={lectures} notRamadan={notRamadan}/>
    </div>
  )
}
