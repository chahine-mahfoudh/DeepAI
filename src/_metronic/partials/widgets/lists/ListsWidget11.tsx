/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import React from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'
import image from '../../../assets/images/image2.jpg'
import {useNavigate} from 'react-router-dom'
import imageTwo from '../../../assets/legaly/recherche.jpg'

type Props = {
  className: string
}

const ListsWidget11: React.FC<Props> = ({className}) => {
  const navigator = useNavigate()
  return (
    <div className={clsx('card', className)}>
      {/* begin::Header */}
      <div className='card-header align-items-center border-0 mt-3'>
        <h3 className='card-title text-center align-items-center flex-column'>
          <span className='fw-bolder text-dark fs-3'>Recherche Juridique</span>
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

      <div className='card-body pt-5'>
        <div className='h-100 w-100 d-flex jsutify-content-center align-items-center '>
          <img alt='' className='w-100' src={imageTwo} />
        </div>
      </div>
      <div className='card-footer'>
        <div>
          <button type='button' className='btn btn-primary' onClick={() => navigator('/search')}>
          Rechercher
          </button>
        </div>
      </div>

      {/* end::Footer */}
    </div>
  )
}

export default ListsWidget11
