import React from 'react';
import { FaArrowRight } from "react-icons/fa";


export default function Section5() {
  return (
    <div>
      <div className='font-rubik font-extrabold text-[3.33vw] text-center'>A vibrant glimpse into the community</div>
      <div className='font-dmSans font-normal text-[1.25vw] tracking-[-0.03em] text-center px-[11vw] my-[1.67vw]'>
      Browse through the gallery to see images of coding competitions, workshops, guest lectures, & other events organized by different chapters across different campuses, and create one for your university as well!
      </div>
      <div className='flex px-[19.5vw] my-[3vw]'>
        <div className='px-[4.32vw] '>
            <div className='font-rubik font-extrabold text-[3.33vw] text-center'>100+</div>
            <div className='font-dmSans font-bold text-center'>Chapters</div>
        </div>
        <div className='px-[4.32vw] border-x-2'>
            <div className='font-rubik font-extrabold text-[3.33vw] text-center'>5000+</div>
            <div className='font-dmSans font-bold text-center'>Students</div>
        </div>
        <div className='px-[4.32vw]'>
            <div className='font-rubik font-extrabold text-[3.33vw] text-center'>200+</div>
            <div className='font-dmSans font-bold text-center'>Events organized</div>
        </div>
      </div>
      <div className='flex justify-center'>
        <button className='flex justify-center items-center gradient-dark-btn px-[0.8vw] py-[1.042vw] rounded-lg text-white'>
            <span className='mr-2'>Create a chapter</span>
            <span className='flex justify-center items-center'><FaArrowRight/></span>
        </button>
      </div>
    </div>
  )
}
