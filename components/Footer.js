import Image from 'next/image';
import React from 'react'
import logo from '../assets/se-club-logo-white.svg';
import Container from './Container';


export default function Footer() {
  return (
    <div className='bg-[var(--purple)] py-5'>
      <Container>
        <div className='flex items-center'>
          <div className='mr-auto'>
            <Image height={58} src={logo} alt='SE logo'/>
          </div>

          <div className='ml-auto'>
            <div className='text-white text-sm text-right'>
              نادي هندسة البرمجيات
              &nbsp;©&nbsp;
              {(new Date()).getFullYear()}
            </div>
          </div>
        </div>
        <div className='mx-auto pt-2'>
          <p className='text-center text-xs text-white mx-auto'>
            <svg className='h-6 w-auto inline-block pr-1 beat' fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"></path>
            </svg>
            شكر خاص للطلاب الذين ساهموا في تطوير المساعد الرمضاني
          </p>
        </div>
        
      </Container>
    </div>
  )
}
