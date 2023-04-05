import React from 'react'

export default function Section3() {
  return (
    <div className='mx-[10.42vw] my-[5.21vw]'>
        {/* Title */}
        <div className='text-center font-rubik font-extrabold text-[3.33vw] tracking-[-0.025em]'>
            Together, We Code Better
        </div>
        {/* SubTitle */}
        <div className='text-center font-dmSans font-normal tracking-[-0.03em] text-[1.25vw] mt-[1.67vw] mb-[3.33vw]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        {/* Image */}
        <img src='' alt='Image'/>
        {/* Buttons */}
        <div className='flex justify-center items-center'>
            <button className='text-white mr-[1.67vw] gradient-dark-btn rounded-lg py-[0.417vw] px-[1.042vw]'>
                <div className='py-[0.677vw]'>
                    Create a chapter -&gt;
                </div>
            </button>
            <button className='text-black gradient-yellow-btn py-[0.417vw] px-[1.042vw] font-dmSans text-[1.15vw] tracking-[-0.03em] text-center font-bold rounded-lg'>
                <div className='py-[0.677vw]'>
                    View more stories
                </div>
            </button>
        </div>
        
    </div>
  )
}
