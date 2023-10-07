import React from 'react'
import { useLectures } from '@/context/LecturesContext'


export default function Timetable({ DAYS, HOURS }) {

    const lectures = useLectures();

    function calculateRow(time) {
        
        // split time into hours and minutes
        const [hours, minutes] = time.split(":");

        const firstTimeslot = 7;
        const timeslotSpan = 12;

        const hoursRow = (parseInt(hours) - firstTimeslot) * timeslotSpan;
        const minutesRow = Math.round((parseInt(minutes) / 5), 0);

        return hoursRow + minutesRow;
    }

    function calculateColumn(day) {
        if (day === "sun") return 2;
        if (day === "mon") return 3;
        if (day === "tue") return 4;
        if (day === "wed") return 5;
        if (day === "thu") return 6;
    }

    return (
        <div className='bg-white py-5 border-2 border-purple-200 rounded-3xl overflow-x-auto'>
            <div className='bg-gray-300 min-w-[340px]'>
                <div
                    className='grid gap-0.25'
                    style={{
                        gridTemplateRows: '1fr repeat(216, 2px)',
                        gridTemplateColumns: '1fr repeat(5, 2fr)',
                    }}
                >
                    <div className='bg-white'></div>
                    {
                        DAYS.map((day, index) => {
                            return (
                                <div
                                    key={index}
                                    className='bg-white'
                                    style={{ gridColumn: `${index + 2}, gridRow: 1` }}
                                >
                                    <div className='flex flex-col justify-center items-center h-full'>
                                        <p className='text-center text-xs text-gray-500 py-4 capitalize'>{day}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                    {
                        HOURS.map((hour, index) => {
                            return (
                                <div
                                    key={index}
                                    className='bg-white'
                                    style={{ gridColumn: 1, gridRow: `${index * 12 + 2} / ${index * 12 + 14}` }}
                                >
                                    <div className='flex flex-col justify-start items-center h-full'>
                                        <p className='text-center text-[10px] text-gray-500 pt-1'>{hour}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                    {
                        DAYS.map((day, dayIndex) => {
                            return (
                                HOURS.map((hour, hourIndex) => {
                                    return (
                                        <div
                                            key={hourIndex}
                                            className='bg-white'
                                            style={{ gridColumn: `${dayIndex + 2}`, gridRow: `${hourIndex * 12 + 2} / ${hourIndex * 12 + 14}` }}
                                        >
                                        </div>
                                    )
                                })
                            )
                        })
                    }

                    {lectures?.map((lecture) => (
                        console.log(lecture),
                        lecture.selectedDays.map((day, dayIndex) => (

                            <div
                                key={lecture.day + lecture.classtitle + lecture.startTime}
                                className='rounded-md text-center flex flex-col items-center justify-around mx-1'
                                style={{
                                    backgroundColor: lecture.color.background,
                                    borderLeft: `4px solid ${lecture.color.accent}`,
                                    gridColumn: calculateColumn(day),
                                    gridRowStart: calculateRow(lecture.startTime) + 2,
                                    gridRowEnd: calculateRow(lecture.endTime) + 2,
                                }}
                            >
                                <span className="text-xs md:hidden" style={{ color: lecture.color.accent }}>
                                    {
                                        (lecture.classTitle.length > 15) ?
                                            lecture.classTitle.substring(0, 15) + '...'
                                            :
                                            lecture.classTitle
                                    }
                                </span>
                                <span className="text-xs max-md:hidden" style={{ color: lecture.color.accent }}>
                                    {lecture.classTitle}
                                </span>
                                <span className="text-2xs max-sm:hidden" style={{ color: lecture.color.accent }}>
                                    {lecture.startTime} - {lecture.endTime}
                                </span>
                                <span className="text-3xs" style={{ color: lecture.color.accent }}>
                                    {lecture.location}
                                </span>
                            </div>
                        )
                        )
                    ))

                    }

                </div>
            </div>
        </div>
    )
}