/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import gif from '../../../assets/images/7IsD.gif'
type Props = {
  className: string
}

const TablesWidget9: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      
      {/* end::Header */}

      {/* begin::Body */}
      
       {/* Add your GIF here */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <img src={gif} alt='GIF' style={{ width: '750px' }}/>
    </div>

      {/* end::Body */}
    </div>

  )
}

export {TablesWidget9}
