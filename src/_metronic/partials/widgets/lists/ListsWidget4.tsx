/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'
import clsx from 'clsx'
import image from '../../../assets/images/image2.jpg'
import {useNavigate} from 'react-router-dom'
import imageThree from '../../../assets/legaly/ready.jpg'

type Props = {
  className: string
  items?: number
}

const ListsWidget4: React.FC<Props> = ({className, items = 6}) => {
  const navigate = useNavigate()
  return (
    <div className={clsx('card', className)}>
      {/* begin::Header */}
      <div className='card-header align-items-center border-0 mt-3'>
        <h3 className='card-title text-center align-items-center flex-column'>
          <span className='fw-bolder text-dark fs-3'>Modèles de contrats</span>
          <span className='text-gray-400 mt-2 fw-bold fs-6'></span>
        </h3>
        {/* <div className='card-toolbar'>
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
        </div> */}
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className='card-body pt-5'>
        <div className='h-100 w-100 d-flex jsutify-content-center align-items-center '>
          <img alt='' className='w-100' src={imageThree} />
        </div>
      </div>

      <div className='card-footer'>
        <div>
          <button type='button' className='btn btn-primary' onClick={() => navigate('/ready')}>
          Choisir
          </button>
        </div>
        {/* end::Footer */}
      </div>
    </div>
  )
}

export {ListsWidget4}
