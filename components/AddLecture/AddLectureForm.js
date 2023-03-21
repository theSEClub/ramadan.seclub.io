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
        {value: "sun", text: "الأحد"},
        {value: "mon", text: "الاثنين"},
        {value: "tue", text: "الثلاثاء"},
        {value: "wed", text: "الأربعاء"},
        {value: "thu", text: "الخميس"},
        {value: "fri", text: "الجمعة"},
        {value: "sat", text: "السبت"},
    ];

  return (
    <form className='add-course-form flex flex-col justify-center items-center gap-4 rounded-md' onSubmit={(e) => handleAddLecture(e)}>
        <div className='flex w-full'>
            <label htmlFor="class-title" className='text-[#7f5ce5]' dir="rtl">عنوان المادة 
                <input className='text-[#7f5ce5] m-4 mr-14 py-1 px-5 border border-[#7f5ce5] rounded-md outline-none' id="class-title" type="text" required dir="rtl" value={classTitle} onChange={(e) => setClassTitle(e.target.value)}/>
            </label>
        </div>

        <div className='grid grid-cols-7 grid-rows-1 gap-2'>
            <DaysInput days={days} onChange={handleCheckbox}/>
        </div>

        <TimeInput value={startTime} text={"بداية المحاضرة"} onChange={setStartTime}/>

        <TimeInput value={endTime} text={"نهاية المحاضرة"} onChange={setEndTime}/>

        <div className='flex w-full'>
            <label htmlFor="location" className='text-[#7f5ce5]' dir='rtl'>مكان المحاضرة
                <input type="text" id="location" className='text-[#7f5ce5] m-4 mr-9 py-1 px-5 border border-[#7f5ce5] rounded-md outline-none' value={location} onChange={(e) => setLocation(e.target.value)}/>
            </label>
        </div>
        
        <div className='flex w-full'>
            <label htmlFor="convert" className='text-[#7f5ce5]' dir='rtl'>لا تقم بتحويل الوقت إلى أوقات رمضان
                <input type="checkbox" id="convert" className="m-4 mr-10" dir='rtl' onChange={() => setIsRamadan(!isRamadan)}/>
            </label>
        </div>

        <button className="form-button text-base m-4 py-2 px-5 border-none rounded-lg outline-none" type='submit' dir='rtl'>أضف المادة</button>

        {errorMessage && <div>{errorMessage}</div>}
    </form>
  )
}
