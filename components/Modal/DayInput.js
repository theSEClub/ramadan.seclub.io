import React from "react";

export default function DayInput({ day, onChange, index }) {
  return (
    <>
      <label
        htmlFor={day.value}
        className="text-purple-500 form-day-label text-xs text-center"
        style={{
          gridRow: "1 / 2",
          gridColumn: `${index + 1}`,
        }}
        dir="rtl"
      >
        {day.text}
      </label>
      <input
        name={`day-${day.value}`}
        id={day.value}
        className="outline-none"
        style={{
          gridRow: "2 / 3",
          gridColumn: `${index + 1}`,
        }}
        type="checkbox"
        value={day.value}
        onChange={(e) => onChange(e)}
        dir="rtl"
      />
    </>
  );
}
