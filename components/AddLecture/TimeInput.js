import React from "react";

export default function TimeInput({ value, text, onChange }) {
  return (
    <div className="flex w-full">
      <label htmlFor={value} className="text-[#7f5ce5]" dir="rtl">
        {text}
        <span className="mr-1 text-lg text-red-500">*</span>
        <input
          id={value}
          type="time"
          className="text-[#7f5ce5] form-time-input m-4 py-1 px-5 border border-[#7f5ce5] rounded-md outline-none"
          required
          dir="rtl"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
}
