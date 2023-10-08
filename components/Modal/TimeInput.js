import React from "react";

export default function TimeInput({ name, value, text, onChange }) {
  return (
    <div className="flex w-full">
      <label htmlFor={value} className="text-purple-500 flex flex-row max-md:flex-col w-full gap-4" dir="rtl">
        <div className="w-2/5 max-md:w-full">
          {text}
          <span className="mr-1 text-lg text-red-500">*</span>
        </div>
        <input
          name={name}
          id={value}
          type="time"
          className="text-purple-500 form-time-input py-1 px-5 border border-purple-500 rounded-md outline-none max-w-[140px]"
          required
          dir="rtl"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
}
