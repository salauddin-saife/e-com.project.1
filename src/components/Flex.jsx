import React, { Children } from 'react'

const Flex = ({children,flex_class}) => {
  return (
    <div className={`flex ${flex_class}`}>{children}</div>
  )
}

export default Flex