import React from 'react'
import element from "../../assets/Elements.png"
import Card from '../Layout/Card'
import feature1 from "../../assets/feature1.png"
import feature2 from "../../assets/feature2.png"
import feature3 from "../../assets/feature3.png"
import PrimaryButton from '../Layout/PrimaryButton'
import Intergration from './Intergration'
const Features = () => {
    return (
        <div className='mt-[60px] md:mt-[160px]'>
            <div className='md:flex  justify-between gap-x-[80px]'>
                <img src={element} alt="" />
                <div>
                    <h1 className='text-[46px] font-bold' >We provide features for  your Business</h1>
                    <div className="rightPart grid grid-cols-1 md:grid-cols-2 gap-[60px] mt-[64px] text-center md:text-left">
                        <Card cardImage={feature1} cardTitle="Fast and Easy to use" cardText="Easily to convert API with just a few clicks" />
                        <Card cardImage={feature2} cardTitle="Safely Security" cardText="All customer data is encrypted" />
                        <Card cardImage={feature3} cardTitle="Get Organized" cardText="From lists to boards, organize work your way. " />
                        <div>
                            <PrimaryButton text="Get Started" className="bg-[#3639A4] !text-primary hover:bg-opacity-[0.9] hover:!text-[#3639A4] " />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Features