import React from 'react'


export default function Timetable({ DAYS, HOURS }) {



    return (
        <div className='my-24 py-5  border-2 border-purple-200 rounded-3xl'>
            <div className='bg-gray-300'>
            <div
                className='grid gap-[1px]'
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
                <div className='bg-red-200'
                    style={{ gridRow: '2 / 20', gridColumn: '2 / 3' }}
                >

                </div>
            </div>
            </div>
        </div>
    )
}
