import React from 'react'
import Days from './Days'
import LecturesList from './LecturesList'
import Timeslots from './Timeslots'


export default function Schedule({lectures}) {

  return (
    <div className='bg-[#eeedfd] p-[2vw] rounded-[50px]'>
      <div className="schedule-container bg-white rounded-[50px]">
        <Days />
        <Timeslots /> 
        <LecturesList lectures={lectures}/>
      </div>
    </div>
  )
}
