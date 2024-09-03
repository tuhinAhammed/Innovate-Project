import React from 'react'
import LargeTitle from '../Layout/LargeTitle'
import SecondaryButton from '../Layout/SecondaryButton'
import PrimaryButton from '../Layout/PrimaryButton'
import Footer from '../Footer/Footer'

const Cta = () => {
  return (
    <>
    <div className='md:flex   justify-between items-center bg-secondary rounded-3xl p-[102px]'>
        <LargeTitle text="Don’t find the answer? contact us for any query." className="text-primary md:w-[577px] w-full"/>
        <PrimaryButton text="Contact Us" className="bg-tertiary group-hover:bg-tertiary group-hover:text-[#000] display-block mt-[40px]"/>
    </div>
    
    </>
  )
}

export default Cta