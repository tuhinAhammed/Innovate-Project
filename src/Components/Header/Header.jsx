import React from 'react'
import Container from '../Layout/Container'
import bgShape from "../../assets/bgShape.png"
import Flex from '../Layout/Flex'
import Logo from "../../assets/Logo.png"
import { menuData } from '../JsonData/menuData'
import PrimaryButton from '../Layout/PrimaryButton'
import Banner from '../Banner/Banner'
const Header = () => {
    return (
        <>
            <div className='pt-8' style={{
                backgroundImage: `url(${bgShape})`,
                backgroundSize: 'cover',  // Ensures the image covers the entire div
                backgroundPosition: 'center',  // Centers the image
                height: '100vh',  // Adjust height as needed
            }}>
                <Container>
                    <div className=''>
                        <div className="md:flex justify-between items-center">
                            <div className="logo">
                                <img src={Logo} alt="" />
                            </div>
                            <div className="menu">
                                <div className="md:flex gap-8 items-center">
                                    {
                                        menuData.map((item) => (
                                            <p className='text-lg text-primary'>{item.name}</p>
                                        )
                                        )
                                    }
                                </div>
                            </div>
                            <Flex className="actionButton">
                                <PrimaryButton text ="Login" className="text-primary"/>
                                <PrimaryButton text ="Register" className="bg-tertiary hover:text-primary"/>
                            </Flex>
                        </div>
                        <Banner/>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Header