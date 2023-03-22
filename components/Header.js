import React from 'react'
import Image from 'next/image'
import selogo from '../public/SE black logo.png'


export default function Header() {
  return (
    <div className="navbar bg-base-200">
   <div className="flex-1">
    <a className="btn normal-case text-xl btn-active btn-primary">إستكشف</a>
  </div>
   
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      {/* <li><Image
      src={selogo}
      width="300px"
      height="169px"
      /></li> */}
      
    </ul>
  </div>
</div>
  
    
  )
}

