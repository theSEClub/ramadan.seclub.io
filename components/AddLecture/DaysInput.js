import React from 'react'

export default function DaysInput({days, onChange}) {

  return (
    <>
        {
            days?.map((day) => (
                <div className={`flex flex-col row-start-1 row-end-2 `} style={{}} key={day.value}>
                    <label htmlFor={day.value} className={`form-day-label `} dir="rtl">{day.text}</label>
                    <input 
                        id={day.value}
                        className={`form-day-checkbox `} 
                        type="checkbox" 
                        value={day.value}
                        onChange={(e) => onChange(e)}
                        dir="rtl"/>
                </div>

            ))
        }

    </>
  )
}
