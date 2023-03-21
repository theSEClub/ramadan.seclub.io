import { getRamadanTime } from '@/helpers/ramadanTiming';
import React, { useEffect, useState } from 'react'
import DaysInput from './DaysInput';
import TimeInput from './TimeInput';

export default function AddLectureForm({addLecture, toggleModal}) {

    const [isRamadan, setIsRamadan] = useState(true)  

    const [classTitle, setClassTitle] = useState("");
    const [selectedDays, setSelectedDays] = useState([]);
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [location, setLocation] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const [clearCheckboxes, setClearCheckboxes] = useState(false);

    // 😅 
    const malaksErrorMessage = "The time requested is not a standard time. The faculty members with arrangement with the students has the to propose a suitable timing for all of them ";


    useEffect(() => {
        if(clearCheckboxes){
            const daysCheckboxes = document.querySelectorAll(".form-day-checkbox");
            daysCheckboxes.forEach(checkbox => checkbox.checked = false);
            setClearCheckboxes(false)
        }
    }, [clearCheckboxes])

    function handleCheckbox(e) {
        if(e.target.checked === true) return setSelectedDays([...selectedDays, e.target.value]);
        setSelectedDays(selectedDays.filter(selectedDay => (selectedDay !== e.target.value)));
    }


    function handleAddLecture(e) {
        e.preventDefault();

        if(selectedDays.length === 0) return setErrorMessage("قم باختيار احد الايام");

        // add checks for duration, start, end => not overflow the schedule

        // generate random color for the lecture
        const COLORS = [
            ["#80ffd4", "#42a683"],
            ["#d0a3fa", "#a642a4"],
            ["#a3dcfa", "#4247a6"]
        ];
        const colorNumber = Math.floor(Math.random() * 10) % 3;
        const color = COLORS[colorNumber][0];
        const colorAccent = COLORS[colorNumber][1];


        if (isRamadan) {
            var ramadanError = false;
            var returnedValue;

            selectedDays.forEach(day => {
                returnedValue = getRamadanTime(startTime, endTime, day);
                if (returnedValue === malaksErrorMessage) {
                    ramadanError = true;
                } 
            })

            if (ramadanError) {
                return setErrorMessage(malaksErrorMessage);
            }

            const ramadanStart = returnedValue[0];
            const ramadanEnd = returnedValue[1];

            addLecture({classTitle, selectedDays, startTime: ramadanStart, endTime: ramadanEnd, location, color, colorAccent});

        } else {
            addLecture({classTitle, selectedDays, startTime, endTime, location, color, colorAccent});
        }

        // clear states
        setClassTitle("");
        setSelectedDays([]);
        setClearCheckboxes(true);
        setStartTime("");
        setEndTime("");
        setLocation("");
        setErrorMessage("");  

        toggleModal();

    }

    const days = [
        {value: "sun", text: "الأحد", column: "7"},
        {value: "mon", text: "الاثنين", column: "6"},
        {value: "tue", text: "الثلاثاء", column: "5"},
        {value: "wed", text: "الأربعاء", column: "4"},
        {value: "thu", text: "الخميس", column: "3"},
        {value: "fri", text: "الجمعة", column: "2"},
        {value: "sat", text: "السبت", column: "1"},
    ];

  return (
    <form className='add-course-form flex flex-col justify-center items-center gap-4 rounded-md' onSubmit={(e) => handleAddLecture(e)}>
        <label htmlFor="class-title" dir="rtl">عنوان المادة 
            <input className='m-4 p-1 border border-neutral-900 rounded-md' id="class-title" type="text" required dir="rtl" value={classTitle} onChange={(e) => setClassTitle(e.target.value)}/>
        </label>

        <div className='grid grid-cols-7 grid-rows-1 gap-2'>
            <DaysInput days={days} onChange={handleCheckbox}/>
        </div>

        <TimeInput value={startTime} text={"بداية المحاضرة"} onChange={setStartTime}/>
        <TimeInput value={endTime} text={"نهاية المحاضرة"} onChange={setEndTime}/>

        <label htmlFor="location" className='form-location-label' dir='rtl'>مكان المحاضرة
            <input type="text" id="location" className="form-location-label m-4 p-1 border border-neutral-900 rounded-md"  placeholder='اختياري' dir='rtl' value={location} onChange={(e) => setLocation(e.target.value)}/>
        </label>
        
        <label htmlFor="convert" className='form-convert-label' dir='rtl'>لا تقم بتحويل الوقت إلى أوقات رمضان
            <input type="checkbox" id="convert" className="form-convert-checkbox" dir='rtl' onChange={() => setIsRamadan(!isRamadan)}/>
        </label>

        <button className="form-button" type='submit' dir='rtl'>أضف المادة</button>

        {errorMessage && <div>{errorMessage}</div>}
    </form>
  )
}
