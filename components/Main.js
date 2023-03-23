import Image from 'next/image'
import React from 'react'
// import calendar from '../assets/calendar.svg'
import calendar from '../assets/caln-crop.svg'

import background from '../assets/bg.svg'


export default function Main() {
  return (
    <div className='main-grid px-0' style={{ position: 'relative' }}>

<Image
    src={background}
    alt='calendar'
    className='main-image col-start-1 w-[100vw] h-auto'
    style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
  />
      <div className='main-title flex items-end w-full justify-end'>
      <h2 className="mx-6 text-[#7f5ce5] text-8xl font-bold font-mirza" dir='rtl'>جدولك في رمضان</h2>
      </div>
      <p className='main-text text-5xl font-mirza my-0' dir='rtl'>لترى جدول محاضراتك في رمضان، كل ما عليك فعله هو أن تدخل المواعيد المعتادة لموادك، وسيظهر لك جدول بالمواعيد الجديدة.</p>
      <Image src={calendar} alt='calander' className='main-image col-start-1 w-[50vw] h-auto' />
    </div>
  )
}
