import Image from 'next/image';
import React from 'react'
import logo from '../assets/SE-Logo-white.svg';


export default function Footer() {
  return (
    <div className='bg-[var(--purple)] px-8 py-4 flex items-center justify-between'>
      <div className='w-auto'>
              <Image height={100} src={logo} alt='SE logo'/>
      </div>
      <div className='w-full'>
        <div className='text-white text-sm font-mirza font-bold text-right'>جميع الحقوق محفوظة لنادي هندسة البرمجيات</div>
      </div>
    </div>
  )
}
