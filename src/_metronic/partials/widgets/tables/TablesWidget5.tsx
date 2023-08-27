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
      <div
        style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15vh'}}
      >
        <h3 className='card-title fw-bold text-dark px-2' style={{textAlign: 'center'}}>
          Naviguez dans le monde juridique en toute simplicité avec Legaly.tn! Que vous soyez un
          avocat, un étudiant en droit ou un professionnel à la recherche de conseils juridiques,
          notre plateforme alimentée par l’IA est conçue pour vous. Découvrez une nouvelle manière
          de créer des documents juridiques, de faire des recherches de textes de loi et bien plus
          encore.
        </h3>
      </div>
      {/* end::Body */}
    </div>
  )
}

export {TablesWidget5}
