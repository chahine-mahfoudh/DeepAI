/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}

const ListsWidget3: React.FC<Props> = ({className}) => {
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
        <p className='text-dark fs-3  text-start px-5 first-letter-big' >
          Élaborez des ébauches de documents juridiques de façon intuitive grâce à notre technologie
          d’IA. Notre plateforme vous accompagne à chaque étape du processus de rédaction, rendant
          la conception d’ébauches juridiques un véritable jeu d’enfant. Avec Legaly.tn, la
          complexité de la rédaction juridique est transformée en simplicité.
        </p>
      </div>

      {/* end::Body */}

      {/* begin::Footer */}
      <div className='card-footer'>
        <div
          style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '8vh'}}
        >
          <button type='button' className='btn btn-primary'>
            Créez votre document
          </button>
        </div>
      </div>
      {/* end::Footer */}
    </div>
  )
}

export {ListsWidget3}
