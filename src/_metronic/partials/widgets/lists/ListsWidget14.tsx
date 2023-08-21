/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}

const ListsWidget14: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0'>
        <h3 className='card-title fw-bold text-dark'>{''}</h3>
        {/* <div className='card-toolbar'>
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
        </div> */}
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div
        style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh'}}
      >
        <p className='text-dark fs-3 text-start px-5 first-letter-big'>
          Plongez dans un océan d’informations juridiques grâce à notre fonction de recherche
          avancée. Localisez en un instant les textes de loi, les jurisprudences, et les données
          juridiques pertinentes. Avec Legaly.tn, la recherche juridique devient une expérience
          enrichissante et efficace. Parcourez le monde du droit au bout de vos doigts.
        </p>
      </div>

      {/* end::Body */}

      {/* begin::Footer */}
      <div className='card-footer'>
        <div
          style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '8vh'}}
        >
          <button type='button' className='btn btn-primary'>
          recherchez
          </button>
        </div>
      </div>
      {/* end::Footer */}
    </div>
  )
}

export default ListsWidget14
