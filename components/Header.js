import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import logo from '../assets/SE-Logo.svg';
import { FiInstagram } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';

export default function Header() {
  return (
    <div>
        <nav className='bg-[var(--gray)] px-8 py-2 flex items-center justify-end'>
          <div className='mr-auto'>
              <Image src={logo} alt='SE logo' className='h-20 w-36'/>
          </div>
          <ul className='flex gap-[5vw]'>
            <li>
              <Link target="_blank" href='https://t.me/+X4JeF8fG_NlkMWY0'>
                <FaTelegramPlane className='text-black text-2xl'/>
              </Link>
            </li>
            <li>
              <Link target="_blank" href='https://twitter.com/SEclub_upm'>
                <FiTwitter className='text-black text-2xl'/>
              </Link>
            </li>
            <li>
              <Link target="_blank" href='https://www.instagram.com/seclub_upm'>
                <FiInstagram className='text-black text-2xl'/>
              </Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}
