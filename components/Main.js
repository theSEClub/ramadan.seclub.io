import Image from 'next/image'
import React from 'react'
// import calendar from '../assets/calendar.svg'
import calendar from '../assets/calendar-ramadan.svg'
import Container from './Container'



export default function Main() {
  return (
    <Container className='pt-20'>
      <div className='flex flex-col lg:flex-row'>
        <Image src={calendar} alt='calander' className='main-image col-start-1 w-[60vw] lg:w-[40vw] h-auto' />

        <div className='flex flex-col  justify-center pt-8 lg:pt-0 lg:pb-20'>
          <h2 className="text-[#7f5ce5] text-3xl lg:text-6xl font-bold" dir='rtl'>جدولك في رمضان</h2>
          <p className='text-xl mt-6 text-slate-400' dir='rtl'>لترى جدول محاضراتك في رمضان، كل ما عليك فعله هو أن تدخل المواعيد المعتادة لموادك، وسيظهر لك جدول بالمواعيد الجديدة.</p>
        </div>
      </div>
    </Container>
  )
}
