import React from 'react'
import Lecture from './Lecture';


export default function LecturesMapper({classTitle, startTime, endTime, days, location, color, colorAccent, isRamadan, displayError, lecture}) {
    
    // this components maps each day in the same added course to a lecture
    // poor naming ☺ 
    
  return (
    <>
        {days?.map(day => (
            <Lecture 
                key={day+classTitle} 
                classTitle={classTitle} 
                startTime={startTime}
                endTime={endTime}
                day={day}  
                color={color}
                colorAccent={colorAccent}
                location={location}
                isRamadan={isRamadan}
                displayError={displayError}
                lecture={lecture}
                />
        ))}
    </>
  )
}
