import React from 'react'
import Class from './Class'

export default function LecturesList({lectures, notRamadan}) {

  return (
    <>
        {lectures && <div className="lectures-container">
            {lectures?.map(lecture => (
                <Class 
                    key={lecture.classTitle + lecture.days}
                    classTitle={lecture.classTitle} 
                    startTime={lecture.startTime} 
                    endTime={lecture.endTime} 
                    days={lecture.selectedDays} 
                    location={lecture.location}
                    notRamadan={notRamadan}/>
            ))}
        </div>}
    </>
  )
}
