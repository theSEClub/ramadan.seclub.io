import React, { useState } from 'react'
import AddCourseForm from '../AddCourse/AddCourseForm'
import Modal from '../Modal/Modal'
import Schedule from './Schedule'

export default function CreateSchedule() {

    const [notRamadan, setnotRamadan] = useState(false)  
    const [lectures, setLectures] = useState([]);
  
    function addClass(lecture){
      setLectures([...lectures, lecture])
    }
  
    function toggleNotRamadan() {
      setnotRamadan(!notRamadan);
    }

  return (
    <div className='p-6'>
        <div className='flex flex-row gap-[5vw] items-center' dir='rtl'>
          <h2 className='ml-6 text-[#7f5ce5] text-6xl' dir='rtl'>جدولك في رمضان</h2>
          <Modal openText={"إضافة مادة"} addClass={addClass} toggle={toggleNotRamadan} />
          <Modal openText={"حذف مادة"} />
        </div>
        <Schedule lectures={lectures} notRamadan={notRamadan}/>
        
    </div>
  )
}
