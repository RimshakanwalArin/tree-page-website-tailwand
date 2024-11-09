import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Footer from './footer/page';

function HomePage() {
  return (
    <main className='text-white bg-gray-900 md:flex-row items-center justify-center'>
       <div className='h-screen w-full text-white flex flex-col items-center justify-center mt-0'> 
      <Image
          className='rounded-full w-80 h-72'
          src="/Allah.jpg"
          alt="picture"
          width={700}
          height={700}
        />
        <h1 className='text-4xl sm:text-5xl md:text-7xl font-extrabold   text-center '>
          Better Solutions For Your Life
        </h1>
        <h5 className='text-xl pl-20 sm:text-2xl mt-4 ext-center  '>
        Hamari life ky all issue ka sal just Allah ka pass ha jo bara rahim ha our bohot mafkarny wala ha
      </h5>
       
      
     

      <div className='text-center space-x-12 flex justify-center mt-4'>
        <button className='py-2 px-6 bg-sky-700 text-white rounded-xl  '>Get Started</button>
        <button className='py-6 px-6 bg-sky-700 text-white rounded-xl '>Read More</button>
      </div>
      </div> 
      <Footer />
    </main>
  );
}

export default HomePage;
