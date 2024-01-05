import React from "react";
import Link from "next/link";

function PageNotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-[#FFF] text-[#0006A8]'>
      <h1 className='text-6xl font-bold'>Oops!</h1>
      <div className='flex items-center mt-4'>
        <div className='border-t-2 border-white w-16'></div>
        <div className=' mx-4 text-xl'>404</div>
        <div className='border-t-2 border-white w-16'></div>
      </div>
      <p className='mt-4 text-lg'>Page Not Found</p>
      <button className='mt-8 b  px-6 py-2 rounded-full hover:bg-purple-100 hover:text-white transition duration-300'>
        <Link href='/'>Go Back Home</Link>
      </button>
    </div>
  );
}

export default PageNotFound;
