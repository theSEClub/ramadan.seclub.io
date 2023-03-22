import Image from 'next/image';
import React from 'react'
import logo from '../assets/SE-Logo-white.svg';


export default function Footer() {
  return (
    <div className='bg-[var(--purple)] px-8 py-4 flex items-center justify-center'>
      <div className='mr-[50%]'>
              <Image src={logo} alt='SE logo' className='h-20 w-36'/>
      </div>
      <div className='text-white text-3xl font-mirza font-bold'>جميع الحقوق محفوظة لنادي هندسة البرمجيات</div>
    </div>
  )
}
