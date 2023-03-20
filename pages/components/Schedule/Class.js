import React, { useEffect, useState } from 'react'
import Lecture from './Lecture';




export default function Class({classTitle, startTime, endTime, days, location, notRamadan}) {

    const [margin, setMargin] = useState(null);
    const [time, setTime] = useState(null);
    const [duration, setDuration] = useState(null);
    
    useEffect(() => {
        setTime(calculateTime(startTime));
        calculateDuration(startTime, endTime);
    }, [startTime, endTime]);
    
    function calculateTime(startTime) {
    
        const time = startTime.split(":");
        const hours = time[0];
        const minutes = time[1];

        if (minutes === "00") { 
            setMargin(null);
            return hours - 5;
        }
    
        setMargin(minutes);
        return hours - 5;
    }

    function calculateDuration(start, end) {
        const startTimeArray = start.split(":");
        const startHours = startTimeArray[0];
        const startMinutes = startTimeArray[1];

        const endTimeArray = end.split(":");
        const endHours = endTimeArray[0];
        const endMinutes = endTimeArray[1];

        const duratioHours = parseInt(endHours) - parseInt(startHours);
        const duratioMinutes = parseInt(endMinutes) - parseInt(startMinutes);

        setDuration(duratioHours * 60 + duratioMinutes); 
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

    const COLORS = [
        ["#80ffd4", "#42a683"],
        ["#d0a3fa", "#a642a4"],
        ["#a3dcfa", "#4247a6"]
    ];

    const colorNumber = Math.floor(Math.random() * 10) % 3;

    const color = COLORS[colorNumber][0];
    const colorAccent = COLORS[colorNumber][1];

  return (
    <>
        {days?.map(day => (
            <Lecture 
                key={day+classTitle} 
                classTitle={classTitle} 
                time={time} 
                endTime={endTime}
                day={getDay(day)} 
                duration={duration} 
                margin={margin}
                color={color}
                colorAccent={colorAccent}
                location={location}
                notRamadan={notRamadan}
                />
        ))}
    </>
  )
}
