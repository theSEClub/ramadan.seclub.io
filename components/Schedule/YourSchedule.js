import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import Schedule from './Schedule'

export default function CreateSchedule() {

    const [lectures, setLectures] = useState([]);
  
    function addLecture(lecture){
      setLectures([...lectures, lecture])
    }

    function deleteLecture(lectureToDelete) {
      setLectures(lectures.filter(lecture => (lecture !== lectureToDelete)));
    }

  return (
    <div className='p-6'>
        <div className='flex flex-row gap-[5vw] items-center' dir='rtl'>
          <h2 className='ml-6 text-[#7f5ce5] text-6xl' dir='rtl'>جدولك في رمضان</h2>
          <Modal openText={"إضافة مادة"} addLecture={addLecture}/>
          <Modal openText={"حذف مادة"} deleteLecture={deleteLecture} lectures={lectures}/>
        </div>
        <Schedule lectures={lectures} />
        
    </div>
  )
}
