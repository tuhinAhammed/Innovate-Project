import React, { useState } from 'react'
import Container from '../Layout/Container'
import bgShape from "../../assets/bgShape.png"
import Flex from '../Layout/Flex'
import Logo from "../../assets/Logo.png"
import { menuData } from '../JsonData/menuData'
import PrimaryButton from '../Layout/PrimaryButton'
import Banner from '../Banner/Banner'
import laptopScreen from '../../assets/laptopScreen.png'
import { RxCross1, RxCross2 } from "react-icons/rx";
import { RiMenu4Fill } from "react-icons/ri";
const Header = () => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open)
    }
    const handleCross = () => {
        setOpen(!open)
    }
    return (
        <>
            <div className='md:pt-8' style={{
                backgroundImage: `url(${bgShape})`,
                backgroundSize: 'cover',  // Ensures the image covers the entire div
                backgroundPosition: 'center',  // Centers the image
                height: '100%',  // Adjust height as needed
            }}>
                <Container>
                    <div className=''>
                        <div className="md:flex justify-between items-center bg-secondary md:bg-transparent p-4 md:p-0 relative">
                            <div className="logo">
                                <img src={Logo} alt="" className=' w-[80px] md:w-[111px]' />
                            </div>
                            
                                <div  className={`${open ? "block" : "hidden"} md:block menu md:py-0 py-4`}>
                                    <div className="md:flex gap-8  items-center">
                                        {
                                            menuData.map((item) => (
                                                <p className='text-lg py-2 md:py-0 text-primary'>{item.name}</p>
                                            )
                                            )
                                        }
                                    </div>
                                </div>
                                <Flex className={`${open ? "block" : "hidden"} md:block menu md:py-0 py-4`}>
                                    <PrimaryButton text="Login" className="text-primary" />
                                    <PrimaryButton text="Register" className="bg-tertiary hover:text-primary" />
                                </Flex>
                            
                            {
                                open ?
                                <RxCross1 className='md:hidden text-primary text-2xl absolute top-0 right-0 m-6' onClick={handleCross}/>
                                :
                                <RiMenu4Fill className='md:hidden text-primary text-2xl absolute top-0 right-0 m-6' onClick={handleClick} />
                                
                            }
                        </div>

                    </div>
                </Container>
                <div className='mt-4 md:mt-[98px] h-100vh'>
                    <h1 className='text-[34px] md:text-[56px] text-primary font-bold text-center'>Get your work done with <br /> Management Tool</h1>
                    <p className='text-lg opacity-[0.7] text-primary  text-center pt-6 md:pt-[20px] py-4 md:py-0'>The world's first project management platform that <br /> connects everything</p>
                    <div className='pt-8 block relative  mx-auto w-[350px] md:w-[480px]' >
                        <input type="text" placeholder='Your business email' className=' w-full  py-5 px-6 rounded-md' />
                        <PrimaryButton text="Try for free" className="bg-tertiary !px-[28px] !py-[15px] text-lg absolute right-[4px] bottom-[3px] " />
                    </div>
                    <img src={laptopScreen} alt="" className='pt-[80px] w-full md:w-[1200px] mx-auto' />
                </div>
            </div>
        </>
    )
}

export default Header