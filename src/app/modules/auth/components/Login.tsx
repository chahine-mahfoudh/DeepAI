/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {useForm} from 'react-hook-form'
import {useAppDispatch} from '../../../store/hooks/reduxHooks'
import {signIn} from '../../../store/reducers/authReducer'

export function Login({toggle}: any) {
  const {register, handleSubmit, reset} = useForm()
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)
  const handleRegister = (values: any) => {
    setLoading(true)
    dispatch(signIn(values))
      .then((res) => {
        if (res.payload.access) {
          localStorage.setItem('token', res.payload.access)        
          setTimeout(() => {
            reset()
            setLoading(false)
            toggle()
          }, 1000)
        }
      })
      .catch((err) => {
       
      })
      .finally(() => {
      
      })
  }

  return (
    <form
      className='form w-100'
      onSubmit={handleSubmit(handleRegister)}
      noValidate
      id='kt_login_signin_form'
    >
      {/* begin::Heading */}
      <div className='text-center mb-11'>
        <h1 className='text-dark fw-bolder mb-3'>Sign In</h1>
        {/* <div className='text-gray-500 fw-semibold fs-6'>Your Social Campaigns</div> */}
      </div>
      {/* begin::Heading */}
      {/* begin::Login options */}
      {/* <div className='row g-3 mb-9'>
        <div className='col-md-6'>
          <a
            href='#'
            className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100'
          >
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/svg/brand-logos/google-icon.svg')}
              className='h-15px me-3'
            />
            Sign in with Google
          </a>
        </div>
        <div className='col-md-6'>
          <a
            href='#'
            className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100'
          >
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/svg/brand-logos/apple-black.svg')}
              className='theme-light-show h-15px me-3'
            />
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/svg/brand-logos/apple-black-dark.svg')}
              className='theme-dark-show h-15px me-3'
            />
            Sign in with Apple
          </a>
        </div>
      </div> */}
      {/* end::Login options */}
      {/* begin::Separator */}
      {/* <div className='separator separator-content my-14'>
        <span className='w-125px text-gray-500 fw-semibold fs-7'>Or with email</span>
      </div> */}
      {/* end::Separator */}
      {/* {formik.status ? (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{formik.status}</div>
        </div>
      ) : (
        <div className='mb-10 bg-light-info p-8 rounded'>
          <div className='text-info'>
            Use account <strong>admin@demo.com</strong> and password <strong>demo</strong> to
            continue.
          </div>
        </div>
      )} */}

      {/* begin::Form group */}
      <div className='fv-row mb-8'>
        <label className='form-label fs-6 fw-bolder text-dark'>Email</label>
        <input
          placeholder='Email'
          className={clsx('form-control bg-transparent')}
          type='email'
          {...register('email')}
        />

        {/* <div className='fv-plugins-message-container'>
            <span role='alert'></span>
          </div> */}
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='fv-row mb-3'>
        <label className='form-label fw-bolder text-dark fs-6 mb-0'>Password</label>
        <input
          type='password'
          {...register('password')}
          className={clsx('form-control bg-transparent')}
        />

        {/* <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'></span>
            </div>
          </div> */}
      </div>
      {/* end::Form group */}

      {/* begin::Wrapper */}

      {/* end::Wrapper */}

      {/* begin::Action */}
      <div className='d-grid mb-10'>
        <button type='submit' id='kt_sign_in_submit' className='btn btn-primary'>
          {!loading && <span className='indicator-label'>Continue</span>}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
      </div>
      {/* end::Action */}

      <div className='text-gray-500 text-center fw-semibold fs-6'>
        Not a Member yet?{' '}
        <Link to='/auth/registration' className='link-primary'>
          Sign up
        </Link>
      </div>
    </form>
  )
}
