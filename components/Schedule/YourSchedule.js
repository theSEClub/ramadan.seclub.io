import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import Schedule from './Schedule'
import Container from '../Container';

export default function YourSchedule() {

    const [lectures, setLectures] = useState([]);
  
    function addLecture(lecture){
      setLectures([...lectures, lecture])
    }

    function deleteLecture(lectureToDelete) {
      setLectures(lectures.filter(lecture => (lecture !== lectureToDelete)));
    }

  return (
    <Container>
        <div className='flex flex-row justify-between items-center mx-auto' dir='rtl'>
          {/* <h2 className="mx-6 text-[#7f5ce5] text-4xl font-bold"  dir='rtl'></h2> */}
          <div className='flex flex-row w-full items-center lg:justify-end justify-center py-8 gap-5'>
            <Modal openText={"إضافة مادة"} addLecture={addLecture}/>
            <Modal openText={"حذف مادة"} deleteLecture={deleteLecture} lectures={lectures}/>
          </div>
        </div>
        <Schedule lectures={lectures} />
        
    </Container>
  )
}
