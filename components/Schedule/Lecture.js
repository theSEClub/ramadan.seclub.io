import React from 'react'
import { getRamadanTime } from '../ramadanTiming'

function calculateTime(startTime) {
    
  const time = startTime.split(":");
  const hours = time[0];
  return hours - 5;
}


export default function Lecture({classTitle, startTime, endTime, day, duration, margin, color, colorAccent, location, isRamadan}) {


  
  if(isRamadan) {
    const [ramadanStartTime, ramadanEndTime, ramadanDuration] = getRamadanTime(startTime, endTime, day);
  };
  

  return (

    <>
      {isRamadan 
      ? <div 
          className={`absolute rounded-md z-10 text-white text-xs font-bold text-center ml-[0.5vw] w-[10vw] min-w-[65px] flex flex-col items-center justify-around`}
          style={{
            backgroundColor: `${color}`,
            borderLeft: `4px solid ${colorAccent}`,
            gridRow: `${calculateTime(ramadanStartTime)}`,
            gridColumn: `${day}`,
            height: `${duration}px`,
            marginTop: `${margin}px`
          }}
          >
            <span className='text-2xl'>{classTitle}</span>
            <span className='text-base'>{ramadanStartTime} - {endTime}</span>
            <span className='text-sm'>{location}</span>
        </div>
      : <div 
          className={`absolute rounded-md z-10 text-white text-xs font-bold text-center ml-[0.5vw] w-[10vw] min-w-[65px] flex flex-col items-center justify-around`}
          style={{
            backgroundColor: `${color}`,
            borderLeft: `4px solid ${colorAccent}`,
            gridRow: `${calculateTime(startTime)}`,
            gridColumn: `${day}`,
            height: `${duration}px`,
            marginTop: `${margin}px`
          }}
          >
            <span className='text-2xl'>{classTitle}</span>
            <span className='text-base'>{startTime} - {endTime}</span>
            <span className='text-sm'>{location}</span>
        </div>
      }
    </>
  )
}
