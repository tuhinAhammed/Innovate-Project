import React from 'react'
import MinTitle from '../Layout/MinTitle'
import MidTitle from '../Layout/MidTitle'
import LargeTitle from '../Layout/LargeTitle'
import service1 from '../../assets/service1.png'
import service2 from '../../assets/service2.png'
import service3 from '../../assets/service3.png'
import service4 from '../../assets/service4.png'
import SecondaryButton from '../Layout/SecondaryButton'
import PrimaryButton from '../Layout/PrimaryButton'
import Facts from './Facts'
const servicesData =[
    {
        image : service1,
        title : "Plan Product Roadmap",
        desc : "A product roadmap is a shared source of truth that outlines the vision, direction, priorities"
    },
    {
        image : service2,
        title : "Assign Any Work",
        desc : "Work assignment or job assignment is allocating work to work centers or appropriate "
    },
    {
        image : service3,
        title : "Monitor Work Progress",
        desc : "Monitor Work ProgressKeeping records and monitoring activities helps people see progress "
    },
    {
        image : service4,
        title : "Pertect Intergration",
        desc : "App integration, in a general sense, is the process of resources or capabilities from one application "
    },

]
const Services = ({}) => {
  return (
    <>
    <div className='pt-[60px] md:pt-[140px]'>
        <div className='text-center'>
            <MinTitle text="Our Services" className="text-[#FF7364]"/>
            <LargeTitle text = "How It Works"/>
        </div>
        <div className='pt-[80px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 '>
            {
                servicesData.map((item) =>(
                    <div className='bg-transparent hover:bg-[#3639A4] transition-all group rounded-lg p-[36px]'>
                        <img src={item.image} alt="" />
                        <MidTitle text={item.title} className=" group-hover:text-primary py-4"/>
                        <MinTitle text ={item.desc} className="group-hover:text-primary"/>
                        <SecondaryButton text="Read More" className="group-hover:text-primary pt-6"/>
                    </div>
                ))
            }
        </div>
        <div className='mx-auto text-center pt-[80px]'>
        <PrimaryButton text="View More" className="bg-transparent text-secondary  border-2 border-secondary  rounded-lg"/>
        </div>
    </div>
    
    </>
  )
} 

export default Services