import React from 'react'

export default function TimeInput({value, text, onChange}) {
  return (
    <div>
        <label htmlFor={value} className="form-time-label" dir='rtl'>
            {text}
            <input id={value} type="time" className="form-time-input m-4 p-1 border border-neutral-900 rounded-md" required dir='rtl' value={value} onChange={(e) => onChange(e.target.value)}/>
        </label>
    </div>
  )
}
