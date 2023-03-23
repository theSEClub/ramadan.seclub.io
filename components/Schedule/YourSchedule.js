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
        <div className='my-12'>
          <ul className='text-right list-disc pr-4' dir='rtl'>
            <li className='text-xs lg:text-sm text-slate-500 my-2'>
            مواعيد المحاضرات في رمضان تبدأ  من الساعة 10:00 صباحاً وتنتهي عند الخامسة عصراً كحد أقصى إذا كانت حضورية في الجامعة.
            </li>
            <li className='text-xs lg:text-sm text-slate-500 my-2'>
            المحاضرات بعد الخامسة عصراً تستمر عن بعد ويتم الاتفاق على وقت مناسب للجميع بين الطلاب والمعلمين.            </li>
            <li className='text-xs lg:text-sm text-slate-500 my-2'>
            حسب التوقيت الرمضاني تتحول أوقات المحاضرات ذات 50 دقيقة إلى 40 دقيقة، بينما المحاضرات بمدة 75 دقيقة (ساعة وربع) تصبح مدتها ساعة.            </li>
            <li className='text-xs lg:text-sm text-slate-500 my-2'>
            المعامل ذات الساعتين تصبح مدتها 80 دقيقة (ساعة ونصف)، والمعامل بطول ثلاث ساعات تصبح ساعتين.
            </li>
          </ul>
        </div>
    </Container>
  )
}
