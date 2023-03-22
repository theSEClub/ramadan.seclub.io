import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import logo from '../assets/SE-Logo.svg';

export default function Header() {
  return (
    <div>
        <nav className='bg-[var(--gray)] px-8 py-2 flex items-center justify-end'>
          <div className='mr-auto'>
              <Image src={logo} alt='SE logo' className='h-20 w-36'/>
          </div>
          <ul className='flex gap-4'>
            <li>
              <Link href='https://t.me/+X4JeF8fG_NlkMWY0'>
                telegram
              </Link>
            </li>
            <li>
              <Link href='https://twitter.com/SEclub_upm'>
                twitter
              </Link>
            </li>
            <li>
              <Link href='https://www.instagram.com/seclub_upm'>
                instagram
              </Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}
