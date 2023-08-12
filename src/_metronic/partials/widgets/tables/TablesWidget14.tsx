/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import searchDemo from '../../../assets/videos/searchDemo.webm'
type Props = {
  className: string
}

const TablesWidget14: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      <div className='h-100 d-flex justify-content-center align-items-center '>
        <video className='w-100' src={searchDemo} autoPlay={true} controls />
      </div>
    </div>
  )
}

export {TablesWidget14}
