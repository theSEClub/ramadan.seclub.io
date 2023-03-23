import React from "react";

export default function DaysInput({ days, onChange }) {
  return (
    <>
      {days?.map((day) => (
        <div className={`flex flex-col row-start-1 row-end-2 `} key={day.value}>
          <label
            htmlFor={day.value}
            className="text-[#7f5ce5] form-day-label text-xs"
            dir="rtl"
          >
            {day.text}
          </label>
          <input
            id={day.value}
            className="outline-none"
            type="checkbox"
            value={day.value}
            onChange={(e) => onChange(e)}
            dir="rtl"
          />
        </div>
      ))}
    </>
  );
}
