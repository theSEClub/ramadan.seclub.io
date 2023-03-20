import React from 'react'
import { getRamadanTime } from '../ramadanTiming'


export default function Lecture({classTitle, time, endTime, day, duration, margin, color, colorAccent, location, notRamadan}) {


  
  if(!notRamadan) {
    const [ramadanStartTime, ramadanEndTime, ramadanDuration] = getRamadanTime(time, endTime, day)
  };
  

  return (

    <>
      {notRamadan 
      ? <div 
        className={`absolute rounded-md z-10 text-white text-xs font-bold text-center w-[12.5vw]`}
        style={{
          backgroundColor: `${color}`,
          borderLeft: `4px solid ${colorAccent}`,
          gridRow: `${ramadanStartTime}`,
          gridColumn: `${day}`,
          height: `${ramadanDuration}px`,
          marginTop: `${margin}px`
        }}
        >
          <span style={{fontSize: '20px'}}>{classTitle}</span>
          <span style={{fontSize: '12px'}}>{location}</span>
      </div>
      : <div 
          className={`absolute rounded-md z-10 text-white text-xs font-bold text-center w-[12.5vw]`}
          style={{
            backgroundColor: `${color}`,
            borderLeft: `4px solid ${colorAccent}`,
            gridRow: `${time}`,
            gridColumn: `${day}`,
            height: `${duration}px`,
            marginTop: `${margin}px`
          }}
          >
            <span style={{fontSize: '20px'}}>{classTitle}</span>
            <span style={{fontSize: '12px'}}>{location}</span>
        </div>
      }
    </>
  )
}
