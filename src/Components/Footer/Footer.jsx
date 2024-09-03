import React from 'react'
import logo from "../../assets/darkLogo.png"
import MinTitle from '../Layout/MinTitle'
import { FaGoogle, FaTwitter } from 'react-icons/fa'
import { FaSquareInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import FooterDataCard from '../Layout/FooterDataCard';
import PrimaryButton from '../Layout/PrimaryButton';
import { BiLogoTelegram } from "react-icons/bi";
const productDataFooter = [
    {
        title: "Landing pages",
        link: "#",

    },
    {
        title: "Pricing",
        link: "#"
    },
    {
        title: "Benefits",
        link: "#"
    },
    {
        title: "Features",
        link: "#"
    },
]
const companyDataFooter = [
    {
        title: "About",
        link: "#",

    },
    {
        title: "Privacy Policy",
        link: "#"
    },
    {
        title: "Terms & Conditions",
        link: "#"
    },
    {
        title: "Partners",
        link: "#"
    },
    {
        title: "Contact",
        link: "#"
    },
]
const resourcesDataFooter = [
    {
        title: "Guides and resources",
        link: "#",

    },
    {
        title: "Blog",
        link: "#"
    },
    {
        title: "Tools",
        link: "#"
    },
    {
        title: "Support",
        link: "#"
    },
]
const Footer = () => {
    return (

        <>
            <div className='grid grid-cols-1 md:grid-cols-7 gap-10 py-[80px] '>
                <div className="col-span-2 ">
                    <img src={logo} alt="" />
                    <MinTitle text="Build a modern and creative website with Innovate." className="py-6 " />
                    <div className="flex items-center gap-x-4">
                        <FaGoogle className='text-[40px] rounded-full w-[60px] h-[60px] p-5 bg-[#eee] hover:bg-secondary hover:text-primary cursor-pointer duration-300' />
                        <FaTwitter className='text-[40px] rounded-full w-[60px] h-[60px] p-5 bg-[#eee] hover:bg-secondary hover:text-primary cursor-pointer duration-300' />
                        <FaSquareInstagram className='text-[40px] rounded-full w-[60px] h-[60px] p-5 bg-[#eee] hover:bg-secondary hover:text-primary cursor-pointer duration-300' />
                        <CiLinkedin className='text-[40px] rounded-full w-[60px] h-[60px] p-5 bg-[#eee] hover:bg-secondary hover:text-primary cursor-pointer duration-300' />
                    </div>
                </div>
                <div className="col-span-3 ">
                    <div className="grid grid-cols-1 md:grid-cols-3 ">
                        <div>
                            <p className="pb-[6px] text-lg">Product</p>
                            {
                                productDataFooter.map((item, index) => (
                                    <>
                                        <FooterDataCard heading={item.heading} items={item.title} />
                                    </>

                                    // <p key={index}>{item.title}</p>
                                ))
                            }
                        </div>

                        <div>
                            <p className="pb-[6px] text-lg">Company</p>
                            {
                                companyDataFooter.map((item, index) => (
                                    <>
                                        <FooterDataCard heading={item.heading} items={item.title} />
                                    </>

                                    // <p key={index}>{item.title}</p>
                                ))
                            }
                        </div>
                        <div>
                            <p className="pb-[6px] text-lg">Resources</p>
                            {
                                resourcesDataFooter.map((item, index) => (
                                    <>
                                        <FooterDataCard heading={item.heading} items={item.title} />
                                    </>

                                    // <p key={index}>{item.title}</p>
                                ))
                            }

                        </div>
                    </div>
                </div>
                <div className="col-span-2 ">
                    <p className="pb-[6px] text-lg">Get Latest Updates</p>
                    <MinTitle text="Subscribe to our newsletter and get many interesting things every week" className="py-6" />
                    <div className='pt-8 block relative  mx-auto md:w-full' >
                        <input type="text" placeholder='Your business email' className=' w-full  py-5 px-6 rounded-md border-2 border-secondary' />
                        <BiLogoTelegram className="bg-secondary  text-[60px] p-3 rounded-lg absolute right-[4px] bottom-[3px] text-primary" />
                    </div>
                </div>
            </div>

            <div className="copyRight py-6 text-md text-[#645E76] w-full border-t-2 ">© 2024 Innovate - All Right Reserved
            </div>
        </>
    )
}

export default Footer