import {useAppSelector} from '../../../../app/store/hooks/reduxHooks'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import {HeaderNotificationsMenu, HeaderUserMenu, QuickLinks} from '../../../partials'

const AsideFooter = () => {
  const currentUser = useAppSelector((state) => state.auth.currentUser)
  return (
    <div
      className='aside-footer d-flex flex-column align-items-center flex-column-auto'
      id='kt_aside_footer'
    >
      {/* <div className='d-flex align-items-center mb-2'>
        <div
          className='btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light'
          data-kt-menu-trigger='click'
          data-kt-menu-overflow='true'
          data-kt-menu-placement='top-start'
          data-bs-toggle='tooltip'
          data-bs-placement='right'
          data-bs-dismiss='click'
          title='Quick links'
        >
          <KTIcon iconName='element-plus' className='fs-2 text-lg-1' />
        </div>
        <QuickLinks backgroundUrl='/media/misc/pattern-1.jpg' />
      </div>

      <div className='d-flex align-items-center mb-3'>
        <div
          className='btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light'
          data-kt-menu-trigger='click'
          data-kt-menu-overflow='true'
          data-kt-menu-placement='top-start'
          data-bs-toggle='tooltip'
          data-bs-placement='right'
          data-bs-dismiss='click'
          title='Activity Logs'
          id='kt_activities_toggle'
        >
          <KTIcon iconName='chart-simple' className='fs-2 text-lg-1' />
        </div>
      </div>

      <div className='d-flex align-items-center mb-2'>
        <div
          className='btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light'
          data-kt-menu-trigger='click'
          data-kt-menu-overflow='true'
          data-kt-menu-placement='top-start'
          data-bs-toggle='tooltip'
          data-bs-placement='right'
          data-bs-dismiss='click'
          title='Notifications'
        >
          <KTIcon iconName='element-11' className='fs-2 text-lg-1' />
        </div>
        <HeaderNotificationsMenu backgrounUrl='/media/misc/pattern-1.jpg' />
      </div> */}
      <div className='d-flex align-items-center mb-10' id='kt_header_user_menu_toggle'>
        <div
          className='cursor-pointer symbol symbol-40px'
          data-kt-menu-trigger='click'
          data-kt-menu-overflow='false'
          data-kt-menu-placement='top-start'
          title='User profile'
        >
          {currentUser?.first_name ? (
            <div className='symbol mr-3'>
              <span className='symbol-label font-size-h2'>
                {currentUser?.first_name.charAt(0).toUpperCase() +
                  currentUser?.last_name.charAt(0).toUpperCase()}
              </span>
            </div>
          ) : (
            <img src={toAbsoluteUrl('/media/avatars/blank.png')} alt='avatar' />
          )}
        </div>
        <HeaderUserMenu />
      </div>
    </div>
  )
}

export {AsideFooter}
