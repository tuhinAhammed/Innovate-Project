import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
const SecondaryButton = ({className , text}) => {
  return (
    <div className={`text-lg text-secondary rounded-full bg-transparent  flex  gap-x-6 items-center ${className}`}>  
        <a href="#">{text}</a>
        <FaLongArrowAltRight />
     </div>
  )
}

export default SecondaryButton