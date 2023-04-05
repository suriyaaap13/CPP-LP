import React from 'react';
import { AiFillHeart } from "react-icons/ai";

export default function Section1() {
  return (
    <div className='bg-[#EDC100] py-[3.75vw]'>
      {/* Navigation */}
        <nav className='w-full flex justify-between px-[10.417vw]'>
            <div className='bg-[#F2D558] rounded-xl'>AZ Logo</div>
            <div className='flex'>
                <div className='bg-[#F2D558] rounded-xl mx-[1.2vw]'>Lead Login</div>
                <div className='bg-[#F2D558] rounded-xl mx-[1.2vw]'>Student Login</div>
                <div className='bg-[#F2D558] rounded-xl mx-[1.2vw]'>Premium</div>
            </div>
        </nav>
         
        <div className='grid grid-flow-col grid-cols-3'>
            {/* left side text */}

            <div className='pl-[9.375vw] py-[4vw] col-span-2'>
                
                {/*  */}
                <div className='font-rubik font-extrabold text-[3.75vw] tracking-[-0.025em]'>
                  <div className='flex'>
                    <div>We&nbsp;</div>
                    
                    <div>l</div>
                    <div className='flex items-center justify-center'>
                      <AiFillHeart className='text-4xl'/>
                    </div>
                    <div>ve</div>
                    
                  </div>
                  <div className='my-[-0.521vw]'>coding</div>
                </div>
                

                {/* SubText */}
                <div className='font-normal font-dmSans tracking-[-0.03em] mt-[2vw]'>
                  The AlgoZenith Campus Connection Program is designed to help <br/> students establish a community of like-minded individuals on their <br/> campus who are passionate about programming and technology.
                </div>

                {/* Buttons */}
                <div className='flex my-[1.771vw]'>
                  <button className='font-inter font-bold text-[1.15vw] tracking-[-0.03em] text-center px-[0.7vw] rounded-lg py-[1vw] gradient-dark-btn text-white mr-[1.67vw]'>Create a chapter -&gt;</button>
                  <button className='font-inter font-bold text-[1.15vw] tracking-[-0.03em] text-center px-[0.7vw] rounded-lg py-[1vw] gradient-yellow-btn text-black'>Explore chapters</button>
                </div>
                
            </div>
            
            {/* right image */}
            <div className='col-span-1'>
                <img src='' alt='Hero Image'/>
            </div>
        </div>
      
    </div>
  )
}
