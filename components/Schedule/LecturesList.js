import React from 'react'
import Class from './Class'

export default function LecturesList({lectures}) {

  return (
    <>
        {lectures && <div className="lectures-container">
            {lectures?.map(lecture => (
                <Class 
                    key={lecture.classTitle + lecture.days + lecture.endTime}
                    classTitle={lecture.classTitle} 
                    startTime={lecture.startTime} 
                    endTime={lecture.endTime} 
                    days={lecture.selectedDays} 
                    color={lecture.color}
                    colorAccent={lecture.colorAccent}
                    location={lecture.location}
                    />
            ))}
        </div>}
    </>
  )
}
