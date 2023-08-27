/* eslint-disable react/jsx-no-target-blank */
import {FC} from 'react'
import {KTIcon} from '../../../../helpers'
import {AuthorsTab} from './AuthorsTab'
import {MenuTab} from './MenuTab'
import {HistoryTab} from './HistoryTab'
import {ProjectsTab} from './ProjectsTab'
import {SubscriptionsTab} from './SubscriptionsTab'
import {TasksTab} from './TasksTab'
import DashboardTab from './DashboardTab'
type Props = {
  link: string
}

const SelectedTab: FC<Props> = ({link}) => {
  switch (link) {
    case 'dashboard':
      return <DashboardTab />
    case 'search':
      return <HistoryTab />
    case 'menu':
      return <MenuTab />
    case 'paper':
      return <SubscriptionsTab />
    case 'ready':
      return <TasksTab />
    default:
      return <DashboardTab />
  }
}

const TabsBase: FC<Props> = ({link}) => {
  return (
    <div className='d-flex h-100 flex-column'>
      {/* begin::Wrapper */}
      <div
        className='flex-column-fluid hover-scroll-y'
        data-kt-scroll='true'
        data-kt-scroll-activate='true'
        data-kt-scroll-height='auto'
        data-kt-scroll-wrappers='#kt_aside_wordspace'
        data-kt-scroll-dependencies='#kt_aside_secondary_footer'
        data-kt-scroll-offset='0px'
      >
        {/* begin::Tab content */}
        <div className='tab-content'>
          <div
            className='tab-pane fade active show'
            id={`kt_aside_nav_tab_${link}`}
            role='tabpanel'
          >
            <SelectedTab link={link} />
          </div>
        </div>
        {/* end::Tab content */}
      </div>
      {/* end::Wrapper */}
      {/* begin::Footer */}
      <div className='flex-column-auto pt-10 px-5' id='kt_aside_secondary_footer'>
        <a
          href='https://legaly.tn/'
          target='_blank'
          className='btn btn-bg-light btn-color-gray-600 btn-flex btn-active-color-body flex-center w-100'
          data-bs-toggle='tooltip'
          data-bs-custom-class='tooltip-dark'
          data-bs-trigger='hover'
          data-bs-offset='0,5'
          data-bs-dismiss-='click'
        >
          <span className='btn-label'>legaly.tn</span>
          <KTIcon iconName='document' className='btn-icon fs-4 ms-2' />
        </a>
      </div>
      {/* end::Footer */}
    </div>
  )
}

export {TabsBase}
