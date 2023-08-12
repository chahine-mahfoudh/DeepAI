/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import clsx from 'clsx'
import {Dispatch, FC, SetStateAction, useEffect} from 'react'
import {KTIcon} from '../../../helpers'
import { Link, useNavigate } from 'react-router-dom';

const tabs: ReadonlyArray<{link: string; icon: string; tooltip: string}> = [
  {
    link: 'dashboard',
    icon: 'element-11',
    tooltip: 'Dashboard',
  },
  {
    link: 'search',
    icon: 'briefcase',
    tooltip: 'Search',
  },
  {
    link: 'paper',
    icon: 'chart-simple',
    tooltip: 'Paper',
  },
  {
    link: 'ready',
    icon: 'shield-tick',
    tooltip: 'Ready',
  },
  // {
  //   link: 'notifications',
  //   icon: 'abstract-26',
  //   tooltip: 'Notifications',
  // },
  // {
  //   link: '/crafted/widgets/search',
  //   icon: 'add-files',
  //   tooltip: 'Authors',
  // },
]

type Props = {
  link: string
  setLink: Dispatch<SetStateAction<string>>
}

const AsideTabs: FC<Props> = ({link, setLink}) => { 
  const navigate = useNavigate()


  useEffect(() => {
console.log(link)
  }, [link])
  
  return (
  <div
    className='hover-scroll-y mb-10'
    data-kt-scroll='true'
    data-kt-scroll-activate='{default: false, lg: true}'
    data-kt-scroll-height='auto'
    data-kt-scroll-wrappers='#kt_aside_nav'
    data-kt-scroll-dependencies='#kt_aside_logo, #kt_aside_footer'
    data-kt-scroll-offset='0px'
  >
    {/* begin::Nav */}
    <ul className='nav flex-column gap-2' id='kt_aside_nav_tabs'>
      
      {/* begin::Nav item */}
      {tabs.map((t) => (
          <li key={t.link}>
            {/* begin::Nav link */}
            <a
              className={clsx(
                'nav-link btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light',
                {active:  window.location.pathname.includes(t.link) }
              )}
              onClick={() => {navigate(t.link) ; setLink(t.link)}}
            >
              <KTIcon iconName={t.icon} className='fs-2x' />
            </a>
            {/* end::Nav link */}
          </li>
      ))}
      {/* end::Nav link */}
    </ul>
    {/* end::Tabs */}
  </div>
)}

export {AsideTabs}
