import React from 'react'
import LecturesMapper from './LecturesMapper'

export default function LecturesList({lectures}) {

  return (
    <>
        {lectures && <div className="lectures-container">
            {lectures?.map(lecture => (
                <LecturesMapper 
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
