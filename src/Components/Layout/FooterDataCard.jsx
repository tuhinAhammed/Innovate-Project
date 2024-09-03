import React from 'react'
import MidTitle from './MidTitle'
import MinTitle from './MinTitle'

const FooterDataCard = ({heading , items}) => {
  return (
    <div>
        <MinTitle text={items} className="py-3 !text-base"/>
    </div>
  )
}

export default FooterDataCard