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
        <div className='flex flex-row justify-between items-center p-4' dir='rtl'>
          <h2 className="mx-6 text-[#7f5ce5] text-4xl font-bold font-mirza"  dir='rtl'></h2>
          <div>
            <Modal openText={"إضافة مادة"} addLecture={addLecture}/>
            <Modal openText={"حذف مادة"} deleteLecture={deleteLecture} lectures={lectures}/>
          </div>
        </div>
        <Schedule lectures={lectures} />
        
    </div>
  )
}
