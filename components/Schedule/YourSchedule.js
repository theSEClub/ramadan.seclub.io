import React, { useState } from 'react'
import AddCourseForm from '../AddCourse/AddCourseForm'
import Modal from '../Modal/Modal'
import Schedule from './Schedule'

export default function CreateSchedule() {

    const [isRamadan, setIsRamadan] = useState(true)  
    const [lectures, setLectures] = useState([]);
  
    function addClass(lecture){
      setLectures([...lectures, lecture])
    }
  
    function toggleIsRamadan() {
      setIsRamadan(!isRamadan);
    }

  return (
    <div className='p-6'>
        <div className='flex flex-row gap-[5vw] items-center' dir='rtl'>
          <h2 className='ml-6 text-[#7f5ce5] text-6xl' dir='rtl'>جدولك في رمضان</h2>
          <Modal openText={"إضافة مادة"} addClass={addClass} toggleIsRamadan={toggleIsRamadan} />
          <Modal openText={"حذف مادة"} />
        </div>
        <Schedule lectures={lectures} isRamadan={isRamadan}/>
        
    </div>
  )
}
