import React from 'react'
import MinTitle from '../Layout/MinTitle'
import MidTitle from '../Layout/MidTitle'
import LargeTitle from '../Layout/LargeTitle'
import PrimaryButton from '../Layout/PrimaryButton'
import intergration1 from "../../assets/1.png"
import intergration2 from "../../assets/2.png"
import intergration3 from "../../assets/3.png"
import intergration4 from "../../assets/4.png"
import intergration5 from "../../assets/5.png"
import intergration6 from "../../assets/6.png"
// import intergration7 from "../../assets/7.png"
import intergration8 from "../../assets/8.png"
import intergration9 from "../../assets/9.png"
import Services from './Services'


const intergrationData = [
    {
        logo : intergration1
    },
    {
        logo : intergration2
    },
    {
        logo : intergration3
    },
    {
        logo : intergration4
    },
    {
        logo : intergration5
    },
    {
        logo : intergration6
    },

    {
        logo : intergration8
    },
    {
        logo : intergration9
    },
]
const Intergration = () => {
  return (
    <>
    <div className='grid grid-cols-2'>
       <div>
       <MinTitle text="Integrations" className="text-[#FF7364] !text-[20px]"/>
        <LargeTitle text="Easily integrate with your favorite apps" className="" />
        <MinTitle text ="App integration, in a general sense, is the process of bringing resources or capabilities from one application to another. As the world of apps continues to evolve, app integration is becoming expected in many contexts." className="pt-[20px] pb-[40px]"/>
        <PrimaryButton text="Get Started" className="bg-[#3639A4] !text-primary hover:bg-opacity-[0.9] hover:!text-[#3639A4] " />
       </div>
    <div className='grid-cols-2 md:grid grid-cols-3'>
        {
            intergrationData.map((item) => (
                <img src={item.logo} alt="" className='w-[332px] h-[140px]'/>
            ))
        }
    </div>
    </div>
    <Services/>
    </>
  )
}

export default Intergration