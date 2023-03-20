import React, { useState } from 'react'
import Days from './Days'
import LecturesList from './LecturesList'
import Timeslots from './Timeslots'


export default function Schedule({lectures, notRamadan}) {

  return (
    <div className='bg-[#eeedfd] p-[2vw] rounded-[50px]'>
      <div className="schedule-container bg-white rounded-[50px]">
        <Days />
        <Timeslots /> 
        <LecturesList lectures={lectures} notRamadan={notRamadan}/>
      </div>
    </div>
  )
}
