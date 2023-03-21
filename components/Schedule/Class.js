import React, { useEffect, useState } from 'react'
import Lecture from './Lecture';

export function calculateDuration(start, end) {
    const startTimeArray = start.split(":");
    const startHours = startTimeArray[0];
    const startMinutes = startTimeArray[1];

    const endTimeArray = end.split(":");
    const endHours = endTimeArray[0];
    const endMinutes = endTimeArray[1];

    const durationHours = parseInt(endHours) - parseInt(startHours);
    const durationMinutes = parseInt(endMinutes) - parseInt(startMinutes);

    const totalDurationInMinute = durationHours * 60 + durationMinutes

    if (totalDurationInMinutes <= 0) return alert("Please enter a valid duration for your lecture");
    if (totalDurationInMinutes > 240) return alert("Please enter a valid duration for your lecture");

    return totalDurationInMinute; 
}


export default function Class({classTitle, startTime, endTime, days, location, color, colorAccent, isRamadan}) {

    const [margin, setMargin] = useState(null);
    const [duration, setDuration] = useState(null);
    
    useEffect(() => {
        setMargin(calculateMargin(startTime));
        setDuration(calculateDuration(startTime, endTime));
    }, [startTime, endTime]);
    


    function calculateMargin(startTime) {
        const time = startTime.split(":");
        const minutes = time[1];

        if (minutes === "00") { 
            return 0;
        }
        return minutes;
    }


    function getDay(day) {
        if (day === 'sun') return 1;
        if (day === 'mon') return 2;
        if (day === 'tue') return 3;
        if (day === 'wed') return 4;
        if (day === 'thu') return 5;
        if (day === 'fri') return 6;
        if (day === 'sat') return 7;
    }


  return (
    <>
        {days?.map(day => (
            <Lecture 
                key={day+classTitle} 
                classTitle={classTitle} 
                startTime={startTime}
                endTime={endTime}
                day={getDay(day)} 
                duration={duration} 
                margin={margin}
                color={color}
                colorAccent={colorAccent}
                location={location}
                isRamadan={isRamadan}
                />
        ))}
    </>
  )
}
