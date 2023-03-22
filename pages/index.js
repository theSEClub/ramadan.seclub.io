import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import YourSchedule from '../components/Schedule/YourSchedule';
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Main />
        <YourSchedule />
        <Footer />
      </div>
    </>
  )
}
