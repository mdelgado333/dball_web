'use client'

import React, {useState} from "react";
import Link from "next/link";
import { bebas } from "./fonts";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

    return (

<div className="w-full content-center overflow-hidden px-4 md:px-8 lg:px-16">
  <nav className={`${bebas.className} flex flex-wrap xl:flex xl:flex-nowrap xl:flex-row items-center justify-between sm:py-1 sm:px-2 w-full sticky top-10 z-10 bg-black-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 rounded-xl self-center my-8 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105`}>

    {/* Logo */}
    <div className="flex items-center p-5 flex-shrink-0 text-white">
      <Link href="/" className="text-3xl md:text-4xl text-white font-semibold transition duration-300 ease-in-out hover:scale-110">
        DBALL
      </Link>
    </div>

    {/* Menu Button (Mobile Only) */}
    <div className="xl:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-3 py-2 rounded text-white hover:text-gray-400"
      >
        {isOpen ? (
          <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        ) : (
          <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        )}
      </button>
    </div>

    {/* Navigation Links (Centered in Mobile) */}
    <div className={`w-full flex-grow text-center text-3xl md:text-4xl ${isOpen ? "block" : "hidden"} pr-5 xl:flex xl:flex-row xl:justify-end xl:items-center xl:space-x-6 xl:mt-0`}>
      <Link href="/" className="block blur-sm text-white mb-5 xl:mb-0 transition duration-300 ease-in-out hover:scale-110">
        Comunidad
      </Link>
      <Link href="/" className="block blur-sm text-white mb-5 xl:mb-0 transition duration-300 ease-in-out hover:scale-110">
        Mentality
      </Link>
      <Link href="/" className="block blur-sm text-white mb-5 xl:mb-0 transition duration-300 ease-in-out hover:scale-110">
        Academy
      </Link>
      <Link href="/vert" className="block text-white mb-5 xl:mb-0 transition duration-300 ease-in-out hover:scale-110">
        Vert
      </Link>
      <Link href="/" className="block blur-sm text-white mb-5 xl:mb-0 transition duration-300 ease-in-out hover:scale-110">
        App
      </Link>
      <Link href="/" className="block blur-sm text-white mb-5 xl:mb-0 transition duration-300 ease-in-out hover:scale-110">
        BTS
      </Link>
    </div>

  </nav>    
</div>


    );
  }