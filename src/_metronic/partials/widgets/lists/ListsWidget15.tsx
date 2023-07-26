/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}

const ListsWidget15: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0'>
        <h3 className='card-title fw-bold text-dark'>To do</h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTIcon iconName='category' className='fs-2' />
          </button>
          <Dropdown1 />
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
      <h3 className='card-title fw-bold text-dark' style={{ textAlign: 'center' }}>
        Your text here
      </h3>
    </div>      
    
    {/* end::Body */}

     {/* begin::Footer */}
<div className='card-footer'>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '8vh' }}>
  <button type='button' className='btn btn-primary' >
      Ready 
  </button>
  </div>
</div>
{/* end::Footer */}

    </div>
  )
}

export {ListsWidget15}
