import React, { useEffect, useState } from 'react'
import DaysInput from './DaysInput';
import TimeInput from './TimeInput';

export default function AddCourseForm({addClass, toggle}) {

    const [classTitle, setClassTitle] = useState("");
    const [selectedDays, setSelectedDays] = useState([]);
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [location, setLocation] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const [clearCheckboxes, setClearCheckboxes] = useState(false);

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

    function handleAddClass(e) {
        e.preventDefault();
        if(selectedDays.length === 0) return setErrorMessage("قم باختيار احد الايام");

        addClass({classTitle, selectedDays, startTime, endTime, location});

        // clear states
        setClassTitle("");
        setSelectedDays([]);
        setClearCheckboxes(true);
        setStartTime("");
        setEndTime("");
        setLocation("");
        setErrorMessage("");

    }


    const days = [
        {value: "sun", text: "الأحد", column: "col-start-7"},
        {value: "mon", text: "الاثنين", column: "col-start-6"},
        {value: "tue", text: "الثلاثاء", column: "col-start-5"},
        {value: "wed", text: "الأربعاء", column: "col-start-4"},
        {value: "thu", text: "الخميس", column: "col-start-3"},
        {value: "fri", text: "الجمعة", column: "col-start-2"},
        {value: "sat", text: "السبت", column: "col-start-1"},
    ];

  return (
    <form className='add-course-form flex flex-col justify-center items-center gap-4 rounded-md' onSubmit={(e) => handleAddClass(e)}>
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
            <input type="checkbox" id="convert" className="form-convert-checkbox" dir='rtl' onChange={() => toggle()}/>
        </label>

        <button className="form-button" type='submit' dir='rtl'>أضف المادة</button>

        {errorMessage && <div>{errorMessage}</div>}
    </form>
  )
}