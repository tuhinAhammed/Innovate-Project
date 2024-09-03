import React from 'react'

const MidTitle = ({text , className}) => {
  return (
    <h1 className={`text-[20px] md:text-[24px] font-bold ${className}`}>{text}</h1>
  )
}

export default MidTitle