'use client'
import { FaCloudDownloadAlt } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import Image from "next/image";

function Navbar(){
    return(
    <div className="z-50 sticky top-0">
    <header className="text-gray-600 body-font bg-indigo-500">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <Image src={require("../../../public/assests/picture/Logo3.png")} alt="Logo" width={100} height={100} className="w-[35px]" />
        <span className="ml-3 text-xl text-white">Asadullah</span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Link href={'/'} className="mr-5 text-white hover:underline font-bold">Home</Link>
        <Link href={'#About'} className="mr-5 text-white hover:underline font-bold">About</Link>
        <Link href={'#Skills'} className="mr-5 text-white hover:underline font-bold">Skills</Link>
        <Link href={'#Projects'} className="mr-5 text-white hover:underline font-bold">Projects</Link>
        <Link href={'#Contact'} className="mr-5 text-white hover:underline font-bold">Contact</Link>
      </nav>
      <Link href="/assests/CV/My CV (2).pdf">  <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Download CV <FaCloudDownloadAlt  className="text-xl ml-3"/>
       
      </button></Link>
    </div>
  </header> </div>)
}

export default Navbar;