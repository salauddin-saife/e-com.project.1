import React, { Children } from 'react'
import { Link } from 'react-router-dom'

const Li = ({li_text,li_link,li_class}) => {
  return (
    <div>
        <Link to={li_link}><li className={li_class}>{li_text}</li></Link>
    </div>
  )
}

export default Li