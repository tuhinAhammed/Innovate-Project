import React from 'react'
import PrimaryButton from '../Layout/PrimaryButton'
import laptopScreen from "../../assets/laptopScreen.png"
import Content from '../Pages/Content'
const Banner = () => {
  return (
    <div className='mt-4 md:mt-[98px] h-100vh'>
        <h1 className='text-[56px] text-primary font-bold text-center'>Get your work done with <br/> Management Tool</h1>
        <p className='text-lg opacity-[0.7] text-black md:text-primary text-center pt-2 md:pt-[20px]'>The world's first project management platform that <br/> connects everything</p>
        <div className='pt-8 block relative  mx-auto md:w-[480px]' >
            <input type="text" placeholder='Your business email' className=' w-full  py-5 px-6 rounded-md'/>
            <PrimaryButton text="Try for free" className="bg-tertiary !px-[28px] !py-[15px] text-lg absolute right-[4px] bottom-[3px] " />
        </div>
        <div className=''>
            <img src={laptopScreen} alt="" className='pt-[80px] w-[1200px]  mx-auto'/>
        </div>
        <Content/>
    </div>
  )
}

export default Banner