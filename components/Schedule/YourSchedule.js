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
    <div className='p-4'>
        <div className='flex flex-row gap-[8vw] items-center' dir='rtl'>
          <h2 className='ml-6 text-[#7f5ce5] text-6xl' dir='rtl'>جدولك في رمضان</h2>
          <h2 className='ml-6 text-[#7f5ce6] text-6xl' dir='rtl'>شكر خاص</h2>
          <p className='ml-6 text-[#7f5ce7]' dir='rtl'>لترى جدول محاضراتك في رمضان، كل ما عليك فعله هو أن تدخل المواعيد المعتادة لموادك، وسيظهر لك جدول بالمواعيد الجديدة. </p>
          <p className='ml-6 text-[#7f5ce8]' dir='rtl'>لترى جدول محاضراتك في رمضان، كل ما عليك فعله هو أن تدخل المواعيد المعتادة لموادك، وسيظهر لك جدول بالمواعيد الجديدة. </p>
          
          <Modal openText={"إضافة مادة"} addLecture={addLecture}/>
          <Modal openText={"حذف مادة"} deleteLecture={deleteLecture} lectures={lectures}/>
        </div>
        <Schedule lectures={lectures} />
        
    </div>
  )
}
