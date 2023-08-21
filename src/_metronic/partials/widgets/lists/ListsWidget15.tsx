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
        <p className='text-dark fs-3  text-start px-5 first-letter-big'>
          Explorez notre bibliothèque complète de documents juridiques préétablis. Adaptez les
          champs modifiables à vos besoins et obtenez votre copie PDF personnalisée en un seul clic.
          Avec Legaly.tn, la préparation de documents juridiques n’a jamais été aussi simple et
          rapide.
        </p>
      </div>

      {/* end::Body */}

      {/* begin::Footer */}
      <div className='card-footer'>
        <div
          style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '8vh'}}
        >
          <button type='button' className='btn btn-primary'>
          Choisissez votre modèle
          </button>
        </div>
      </div>
      {/* end::Footer */}
    </div>
  )
}

export {ListsWidget15}
