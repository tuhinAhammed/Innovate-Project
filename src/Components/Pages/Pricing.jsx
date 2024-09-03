import React from 'react'
import LargeTitle from '../Layout/LargeTitle'
import Flex from '../Layout/Flex'
import MidTitle from '../Layout/MidTitle'
import Toggle from "../../assets/ToggleBTN.png"
import pricingIcon1 from "../../assets/pricing1.png"
import pricingIcon2 from "../../assets/pricing2.png"
import pricingIcon3 from "../../assets/pricing3.png"
import checkIcon from "../../assets/checkIcon.png"
import MinTitle from '../Layout/MinTitle'
import PrimaryButton from '../Layout/PrimaryButton'
import Testimonial from './Testimonial'
const pricingCard = [
    {
        image: pricingIcon1,
        packageName: "Personal",
        savings: "Annual pricing (save 20%)",
        price: "$10/mth",
        features: [

            {
                text: "Calendar View"
            },
            {
                text: "Custom Templates"
            },
            {
                text: "list view"
            },
            {
                text: "board view"
            },
            {
                text: "Assignees & Due Dates"
            },

        ]

    },
    {
        image: pricingIcon2,
        packageName: "Team",
        savings: "Annual pricing (save 35%)",
        price: "$25/mth",
        features: [

            {
                text: "Timeline Review"
            },
            {
                text: "Custom fields"
            },
            {
                text: "Custom Templates"
            },
            {
                text: "Task dependencies"
            },
            {
                text: "Milestones Manage"
            },

        ]

    },
    {
        image: pricingIcon3,
        packageName: "Enterprise",
        savings: "Annual pricing (save 40%)",
        price: "$50/mth",
        features: [

            {
                text: "Data export & deletion"
            },
            {
                text: "Block native integrations"
            },
            {
                text: "Custom branding"
            },
            {
                text: "Lock custom fields"
            },
            {
                text: "Priority support"
            },

        ]

    }
]
const Pricing = () => {
    return (
        <div className='pt-[140px]'>
            <LargeTitle text="Pricing Designed To Fit Your Business" className="text-center w-full md:w-[640px] mx-auto" />
            <Flex className="justify-center items-center gap-x-6 pt-[38px]">
                <MidTitle text="Monthly" className="text-secondary" />
                <img src={Toggle} alt=""  />
                <MidTitle text="Yearly" className="text-[#645E76]" />
            </Flex>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-[70px] gap-[30px]">
                {
                    pricingCard.map((item) => (

                <div className="pricingCard px-[60px] py-[40px] rounded-2xl border-2 hover:bg-secondary group transition-all duration-300">
                    <img src={item.image} alt="" className='mx-auto'/>
                    <div className='py-[32px]'>
                        <MidTitle text ={item.packageName} className="text-secondary text-center group-hover:text-tertiary"/>
                        <LargeTitle text={item.price} className="text-center group-hover:text-primary"/>
                        <MinTitle text={item.savings} className="text-center group-hover:text-primary"/>
                    </div>
                    <div className=''>
                        {
                            item.features.map((featuresItem) => (
                                <Flex className="gap-x-4 py-4">
                                    <img src={checkIcon} alt="" />
                                    <MinTitle text={featuresItem.text} className="group-hover:text-primary"/>
                                </Flex>
                            ))
                        }
                    </div>
                    <PrimaryButton text="Purchase Now" className="bg-secondary group-hover:bg-tertiary group-hover:text-[#000] text-primary w-full mt-[40px]"/>
                </div>
                    ))
                }
            </div>
            
        </div>
    )
}

export default Pricing