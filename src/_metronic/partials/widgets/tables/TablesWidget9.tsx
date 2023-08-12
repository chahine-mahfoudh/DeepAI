/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import paperDemo from '../../../assets/videos/paperDemo.webm'
type Props = {
  className: string
}
const TablesWidget9: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      <div className='h-100 d-flex justify-content-center align-items-center' >
        <video className='w-100' src={paperDemo} autoPlay={true} controls />
      </div>
    </div>
  )
}

export {TablesWidget9}
