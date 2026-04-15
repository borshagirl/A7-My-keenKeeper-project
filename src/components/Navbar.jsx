"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { RiTimeLine } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';
import LogoImg from '../assets/logo.png'

const Navbar = () => {
        const pathName = usePathname()

    const links = <>
        <li><Link className={`flex items-center p-1 rounded-sm text-sm ${pathName === "/" ? 'bg-green-800 text-white' : 'text-gray-600'}`} href="/"><span><IoHomeOutline /></span>Home</Link></li>
        <li><Link className={`flex items-center p-1 rounded-sm text-sm ${pathName === "/timeline" ? 'bg-green-800 text-white' : 'text-gray-600'}`} href="/timeline"><span><RiTimeLine /></span>Timeline</Link></li>
        <li><Link className={`flex items-center p-1 rounded-sm text-sm ${pathName === "/stats" ? 'bg-green-800 text-white' : 'text-gray-600'}`} href="/stats"><span><TfiStatsUp /></span>Stats</Link></li>

    </>
    return (
        <div>
            <div className="flex justify-between bg-base-100 shadow-sm">
  <div className="">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl ml-6"><Image src={LogoImg} alt="logo" width={120} height={120}></Image></a>
  </div>
  <div className=" hidden md:flex">
    <ul className="flex items-center gap-4 mr-6">
      {links}
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;