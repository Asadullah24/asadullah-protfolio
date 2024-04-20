'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TiSocialFacebook } from "react-icons/ti";
import { CiTwitter } from "react-icons/ci";

import { FaLinkedin } from "react-icons/fa";
function Footer(){
    return(<div>
        <footer className="text-gray-600 body-font bg-indigo-500">
  <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <Image src={require('../../../public/assests/picture/Logo3.png')} alt="logo" width={100} height={100} className="w-[35px]" />
      <span className="ml-3 text-xl text-white">Asadullah</span>
    </a>
    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 web developer — @muhammadasadullah
      
    </p>

    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link target="_blank" href={'https://www.facebook.com/profile.php?id=100091894531920'}  className="text-blue-600">
        <TiSocialFacebook  className="text-3xl text-white" />

      </Link>
      <Link target="_blank" href={'https://twitter.com'} className="ml-3 text-blue-600">
      <CiTwitter className="text-3xl text-white"/>
      </Link>
      
      <Link href={'https://www.linkedin.com/in/muhammad-asadullah-02ab152a1/'} target="_blank" className="ml-3 text-blue-600">
      <FaLinkedin className="text-2xl text-white"/>
      </Link>
    </span>
  </div>
</footer>

    </div>)
}

export default Footer;