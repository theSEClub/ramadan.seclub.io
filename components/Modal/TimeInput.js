import React from "react";

export default function TimeInput({ name, value, text, onChange }) {
  return (
    <div className="flex w-full">
      <label htmlFor={value} className="text-purple-500" dir="rtl">
        {text}
        <span className="mr-1 text-lg text-red-500">*</span>
        <input
          name={name}
          id={value}
          type="time"
          className="text-purple-500 form-time-input m-4 py-1 px-5 border border-purple-500 rounded-md outline-none"
          required
          dir="rtl"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
}
