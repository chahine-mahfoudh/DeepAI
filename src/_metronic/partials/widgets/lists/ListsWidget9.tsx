/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import React from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'
import image from '../../../assets/images/image2.jpg'



type Props = {
  className: string
}

const ListsWidget9: React.FC<Props> = ({className}) => {
  return (
    <div className={clsx('card', className)}>
      {/* begin::Header */}
      <div className='card-header align-items-center border-0 mt-3'>
      <h3 className='card-title text-center align-items-center flex-column'>
      <span className='fw-bolder text-dark fs-3'>Paper</span>
      <span className='text-gray-400 mt-2 fw-bold fs-6'></span>
    </h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary me-n3'
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
      <div className='card-body pt-5'>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
    <img src={image} alt='paper' style={{ width: '180px' }} />
    </div>


      {/* end::Body */}

      {/* begin::Footer */}
      <div className='card-footer'>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '8vh' }}>
    <button type='button' className='btn btn-primary'>
      Generate Paper
    </button>
  </div>
  </div>

  {/* end::Footer */}
    </div>
    </div>

  )
}

export {ListsWidget9}
