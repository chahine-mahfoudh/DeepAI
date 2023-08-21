/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string
}

const TablesWidget5: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      
      {/* end::Header */}
      {/* begin::Body */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15vh' }}>
      <h3 className='card-title fw-bold text-dark' style={{ textAlign: 'center' }}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h3>
    </div>   
      {/* end::Body */}
    </div>
  )
}

export {TablesWidget5}
