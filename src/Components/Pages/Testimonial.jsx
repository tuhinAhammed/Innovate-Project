import React from 'react'
import LargeTitle from "..//Layout/LargeTitle"
import MinTitle from "..//Layout/MinTitle"
import PrimaryButton from "../Layout/PrimaryButton"
import fiveStar from "../../assets/fiveStar.png"
import imgbg2  from "../../assets/imgcard2.png"
import Cta from '../Body/Cta'
const Testimonial = () => {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-[200px] py-[200px]'>
      <div className="left">
        <LargeTitle text="What they are talking
about us?"/>
        <MinTitle text="testimonials are evidence of customers talking about your product or service in their own words. At their best, they are authentic, descriptive." />
        <PrimaryButton text="Get Started" className="bg-secondary group-hover:bg-tertiary group-hover:text-[#000] text-primary  mt-[40px]" />
        <img src={fiveStar} alt="" className="mt-[80px]" />
      </div>
      <div className="right text-center ">
        <img src={imgbg2} alt="" className='my-auto'/>
      </div>
    </div>
    
    </>
  )
}

export default Testimonial