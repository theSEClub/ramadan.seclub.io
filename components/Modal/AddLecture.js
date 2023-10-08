import { getRamadanTime } from "@/utils/ramadanTiming";
import React, { useEffect, useState } from "react";
import DaysInput from "./DaysInput";
import TimeInput from "./TimeInput";
import { ACTIONS, useLecturesDispatch } from "@/context/LecturesContext";


function getHourFromTime(time) {
  const timeArray = time.split(":");
  return timeArray[0];
}

function calculateDuration(startTime, endTime) {
  const startTimeArray = startTime.split(":");
  const startHours = startTimeArray[0];
  const startMinutes = startTimeArray[1];

  const endTimeArray = endTime.split(":");
  const endHours = endTimeArray[0];
  const endMinutes = endTimeArray[1];

  const durationHours = parseInt(endHours) - parseInt(startHours);
  const durationMinutes = parseInt(endMinutes) - parseInt(startMinutes);

  const totalDurationInMinutes = durationHours * 60 + durationMinutes;

  return totalDurationInMinutes;
}

export default function AddLecture({ toggleModal }) {

  const dispatch = useLecturesDispatch();

  const [isRamadan, setIsRamadan] = useState(true);

  const [classTitle, setClassTitle] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [clearCheckboxes, setClearCheckboxes] = useState(false);

  const ERRORS = {
    conversionReturn: "The time requested is not a standard time. The faculty members with arrangement with the students has the to propose a suitable timing for all of them ",
    translatedConversionReturn: "عذراً. إن تحويل المحاضرة للأوقات الرمضانية غير متاح للمواعيد غير المسجلة في الجدول المرسل.",
    wrongTimeValues: "الرجاء اختيار أوقات صحيحة",
    shortLecture: "وقت المحاضرة يجب أن لا يقل عن ٣٠ دقيقة",
    longLecture: "وقت المحاضرة يجب أن لا يزيد عن ٤ ساعات",
    noSelectedDays: "الرجاء القيام باختيار أحد الأيام",
  };


  // to clear all checkboxes after submitting the form
  useEffect(() => {
    if (clearCheckboxes) {
      const daysCheckboxes = document.querySelectorAll(".form-day-checkbox");
      daysCheckboxes.forEach((checkbox) => (checkbox.checked = false));
      setClearCheckboxes(false);
    }
  }, [clearCheckboxes]);

  // to toggle a checkbox
  function handleCheckbox(e) {
    if (e.target.checked === true)
      return setSelectedDays([...selectedDays, e.target.value]);
    setSelectedDays(
      selectedDays.filter((selectedDay) => selectedDay !== e.target.value)
    );
  }

  // to add a lecture
  function handleAddLecture(e) {
    e.preventDefault();

    // check entered information
    if (selectedDays.length === 0)
      return setErrorMessage(ERRORS.noSelectedDays);

    if (startTime > endTime)
      return setErrorMessage(ERRORS.wrongTimeValues);
    
    if (getHourFromTime(endTime) > 23 || getHourFromTime(startTime) < 7)
      return setErrorMessage(ERRORS.wrongTimeValues);

    if (calculateDuration(startTime, endTime) < 30)
      return setErrorMessage(ERRORS.shortLecture);

    if (calculateDuration(startTime, endTime) > 240)
      return setErrorMessage(ERRORS.longLecture);


    // generate random color for the lecture
    const COLORS = [
      { background: "#80ffd4", accent: "#42a683" },
      { background: "#d0a3fa", accent: "#a642a4" },
      { background: "#a3dcfa", accent: "#4247a6" },
    ];
    const colorNumber = Math.floor(Math.random() * 10) % 3;
    const color = COLORS[colorNumber];


    // add lecture
    if (isRamadan) {

      var convertedValue;

      selectedDays.forEach((day) => {
        convertedValue = getRamadanTime(startTime, endTime, day);
        if (convertedValue === ERRORS.conversionReturn) {
          return setErrorMessage(ERRORS.translatedConversionReturn);
        }
      });

      const ramadanStart = convertedValue[0];
      const ramadanEnd = convertedValue[1];

      dispatch({
        type: ACTIONS.ADD_LECTURE,
        payload: {
          classTitle,
          selectedDays,
          startTime: ramadanStart,
          endTime: ramadanEnd,
          location,
          color,
        },
      });

    } else {
      // not a ramadan time

      dispatch({
        type: ACTIONS.ADD_LECTURE,
        payload: {
          classTitle,
          selectedDays,
          startTime,
          endTime,
          location,
          color,
        },
      });
    }

    // clear form
    setClassTitle("");
    setSelectedDays([]);
    setClearCheckboxes(true);
    setStartTime("");
    setEndTime("");
    setLocation("");
    setErrorMessage("");

    // close modal
    toggleModal();
  }

  const days = [
    { value: "sun", text: "الأحد" },
    { value: "mon", text: "الاثنين" },
    { value: "tue", text: "الثلاثاء" },
    { value: "wed", text: "الأربعاء" },
    { value: "thu", text: "الخميس" }
  ];

  return (
    <form
      className="add-course-form flex flex-col justify-center items-center gap-4 rounded-md"
      onSubmit={(e) => handleAddLecture(e)}
    >
      <div className="flex w-full">
        <label htmlFor="class-title" className="text-purple-500" dir="rtl">
          عنوان المادة
          <input
            className="text-purple-500 my-4 mr-8 py-1 px-5 border border-purple-500 rounded-md outline-none"
            id="class-title"
            type="text"
            required
            dir="rtl"
            value={classTitle}
            onChange={(e) => setClassTitle(e.target.value)}
          />
        </label>
        
      </div>

      <div className="grid grid-cols-7 grid-rows-1 gap-2">
        <DaysInput days={days} onChange={handleCheckbox} />
      </div>

      <TimeInput
        name="start-time"
        value={startTime}
        text={"بداية المحاضرة"}
        onChange={setStartTime}
      />

      <TimeInput
        name="end-time"
        value={endTime}
        text={"نهاية المحاضرة"}
        onChange={setEndTime}
      />

      <div className="flex w-full">
        <label htmlFor="location" className="text-purple-500" dir="rtl">
          مكان المحاضرة
          <input
            name="location"
            type="text"
            id="location"
            className="text-purple-500 my-4 mr-4 py-1 px-5 border border-purple-500 rounded-md outline-none"
            placeholder="اختياري"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
      </div>

      <div className="flex w-full">
        <label htmlFor="convert" className="text-purple-500" dir="rtl">
          لا تقم بتحويل الوقت إلى أوقات رمضان
          <input
            name="ramadan-convert"
            type="checkbox"
            id="convert"
            className="my-4 mr-2"
            dir="rtl"
            onChange={() => setIsRamadan(!isRamadan)}
          />
        </label>
      </div>

      <button
        className="form-button text-base my-4 py-2 px-5 mb-0 border-none rounded-lg outline-none"
        type="submit"
        dir="rtl"
      >
        أضف المادة
      </button>

      {errorMessage && (
        <div className="text-red-500 text-base text-center">{errorMessage}</div>
      )}
      
    </form>
  );
}
