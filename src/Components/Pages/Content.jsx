import React from 'react'
import Flex from '../Layout/Flex'
import laptopScreen from "../../assets/laptopScreen.png"
import content1 from "../../assets/content1.png"
import content2 from "../../assets/content2.png"
import content3 from "../../assets/content3.png"
import MidTitle from '../Layout/midTitle'
import MinTitle from '../Layout/MinTitle'
import Features from './Features'
const contentCardData = [
    {
        image: content1,
        title: "Login or sign up to be able use our platform",
        text: "This quickstart shows you how to use Identity Platform to sign in a user with an email and password."
    },
    {
        image: content2,
        title: "Connect your website with just a few click",
        text: "Once your website is online, you can configure it, I will show you how to put your website online"
    },
    {
        image: content3,
        title: "Take some sales data that you want",
        text: "Sell your data directly: The most straightforward method is to sell your data directly to another"
    },

]
const Content = () => {
    return (
        <div className='mt-6 md:mt-[160px]'>

            <div className="grid grid-cols-2 gap-x-10">
                <h1 className="text-[46px] text-extrabold ">How simple is it to use our platform?</h1>
                <p className='text-lg opacity-0.7 '>This Innovate Con guide explores the most popular platforms and walks you through how to use them to grow your business.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-[200px] mt-[116px]'>
                {

                    contentCardData.map((item , index) => (
                        <div key={index}>
                            <img src={item.image} alt="" className='mx-auto' />
                            <MidTitle text={item.title} className='text-center py-[26px]' />
                            <MinTitle text={item.text} className='text-center' />
                        </div>
                    ))
                }
            </div>
            <Features/>
        </div>
    )
}

export default Content