import React from 'react'
import { TbTrash } from 'react-icons/tb';

export default function DeleteLectureForm({deleteLecture, lectures}) {

    function handleDeleteLecture(lecture) {
        deleteLecture(lecture);
    }


  return (
    <div className='overflow-x-scroll'>
        {lectures?.map((lecture) => (
            <div className='text-white rounded-md mt-6 p-3 flex items-center justify-end delete-lecture'
                style={{backgroundColor: `${lecture.color}`}}
                key={lecture.day + lecture.classtitle + lecture.startTime}>
                {lecture.classTitle}: {lecture.selectedDays}, {lecture.startTime} - {lecture.endTime}
                <button style={{color: `${lecture.colorAccent}`, backgroundColor: `${lecture.color}`}}
                className='mr-2 border-none text-xl cursor-pointer'
                 onClick={() => handleDeleteLecture(lecture)}><TbTrash /></button>
            </div>
        ))}
    </div>
  )
}
