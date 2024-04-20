'use client'
import React from "react";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import Link from "next/link";

function Hero(){
    return(<div id="Home"><section className="text-gray-600 body-font ">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-indigo-500">
          I am
          <br className="hidden lg:inline-block " />
          <Typewriter 
  options={{
    strings: ['Web Developer', 'Gen-AI Engineer'],
    autoStart: true,
    loop: true,
  }} 
/>
        </h1>
        <div className="w-[300px] h-[2px] bg-blue-600"></div>
        <p className="mb-8 leading-relaxed">
        Hi, I'm Muhammad Asadullah. I'm a Front End Web Developer and Gen-AI Engineer who loves to make websites easy to use and beautiful. I use my skills in basic web technologies and AI to create smooth and modern websites. Let's work together to make something great!
        </p>
        <div className="flex justify-center">
          <Link href={'#Contact'}>
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Contact
          </button></Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
          className="object-cover object-center rounded mx-auto w-[400px]"
          alt="hero"
          src={require('../../../public/assests/picture/my-pic2.jpg')}
          width={600}
          height={600}
        />
      </div>
    </div>
  </section>
  </div>);
}

export default Hero;