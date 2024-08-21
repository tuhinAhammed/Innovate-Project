import React from 'react'
import Illustration from "../../assets/Illustration.png"
import LargeTitle from '../Layout/LargeTitle'
import MinTitle from '../Layout/MinTitle'
const factData = [
    {
        title: "720+",
        desc: "Over 500 business powered with us"
    },
    {
        title: "4.9",
        desc: "Rating on google play and app store"
    },
    {
        title: "200+",
        desc: "Easily integrate with your favorite apps"
    },

]
const Facts = () => {
    return (
        <div className='bg-secondary w-[1400px] h-[468px] rounded-[40px] mt-[140px] p-[70px] grid grid-cols-1 md:grid-cols-2 gap-x-[40px] overflow-hidden'>
            <img src={Illustration} alt="" />
            <div className="right">
                <LargeTitle text="Trusted by 35,000+ happy customers." className="text-primary" />
                <div className="grid grid-cols-3 pt-[64px]">
                    {
                        factData.map((item) => (
                            <div >
                                <LargeTitle text={item.title} className="text-primary" />
                                <MinTitle text ={item.desc} className="pt-3 text-primary opacity-[0.7]"/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Facts