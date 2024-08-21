import React from 'react'
import MidTitle from './MidTitle'
import MinTitle from './MinTitle'

const Card = ({ className, cardImage, cardTitle, cardText }) => {
    return (
        <div>
            <img src={cardImage} alt="" className='w-[50px] h-[50px] mx-auto md:mx-[0px]' />
            <MidTitle text={cardTitle} className=' text-[22px] font-bold py-[10px]' />
            <MinTitle text={cardText} className='text-lg text-[#645E76]' />
        </div>
    )
}

export default Card