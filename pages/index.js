import React from 'react'
import Image from 'next/image'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import YourSchedule from '../components/Schedule/YourSchedule';
import styles from '@/styles/Home.module.css'
import background from '../assets/bg.svg'


export default function Home() {
  return (
    <>
      <div className='overflow-hidden relative'>
        <Image
          src={background}
          alt='calendar'
          className='main-image col-start-1 w-[100vw] h-auto absolute top-0 left-0 z-[-1]'
        />
        <Header />
        <Main />
        <YourSchedule />
        <Footer />
      </div>
    </>
  )
}
