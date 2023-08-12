/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState, useEffect} from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'
import {getUserByToken, register} from '../core/_requests'
import {Link, useNavigate} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {PasswordMeterComponent} from '../../../../_metronic/assets/ts/components'
import { useForm } from 'react-hook-form'
import { useAppDispatch } from '../../../store/hooks/reduxHooks'
import { signIn, signUp } from '../../../store/reducers/authReducer'

// const initialValues = {
//   firstname: '',
//   lastname: '',
//   email: '',
//   password: '',
//   changepassword: '',
//   acceptTerms: false,
// }

// const registrationSchema = Yup.object().shape({
//   firstname: Yup.string()
//     .min(3, 'Minimum 3 symbols')
//     .max(50, 'Maximum 50 symbols')
//     .required('First name is required'),
//   email: Yup.string()
//     .email('Wrong email format')
//     .min(3, 'Minimum 3 symbols')
//     .max(50, 'Maximum 50 symbols')
//     .required('Email is required'),
//   lastname: Yup.string()
//     .min(3, 'Minimum 3 symbols')
//     .max(50, 'Maximum 50 symbols')
//     .required('Last name is required'),
//   password: Yup.string()
//     .min(3, 'Minimum 3 symbols')
//     .max(50, 'Maximum 50 symbols')
//     .required('Password is required'),
//   changepassword: Yup.string()
//     .min(3, 'Minimum 3 symbols')
//     .max(50, 'Maximum 50 symbols')
//     .required('Password confirmation is required')
//     .oneOf([Yup.ref('password')], "Password and Confirm Password didn't match"),
//   acceptTerms: Yup.bool().required('You must accept the terms and conditions'),
// })

export function Registration() {
  const dispatch = useAppDispatch()
  const {register, handleSubmit, reset} = useForm()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleRegister = (values: any) => {
    setLoading(true)
    dispatch(signUp(values))
      .then((res) => {
        if (res.payload.username) {
          dispatch(signIn(values))
      .then((res) => {
        if (res.payload.access) {
          localStorage.setItem('token', res.payload.access)        
          setTimeout(() => {
            reset()
            setLoading(false)
            navigate("/")
          }, 1000)
        }
      })
      .catch((err) => {
       
      })
      .finally(() => {
      
      })
        }
     
      })
      .catch((err) => {
        setLoading(false)
      })
  }
  useEffect(() => {
    PasswordMeterComponent.bootstrap()
  }, [])

  return (
    <form
      className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
      noValidate
      id='kt_login_signup_form'
      onSubmit={handleSubmit(handleRegister)}
    >
      {/* begin::Heading */}
      <div className='text-center '>
        {/* begin::Title */}
        <h1 className='text-dark fw-bolder mb-3'>Sign Up</h1>
        {/* end::Title */}

        {/* <div className='text-gray-500 fw-semibold fs-6'>Your Social Campaigns</div> */}
      </div>
      {/* end::Heading */}
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
      {/* <div className='separator separator-content my-14'>
        <span className='w-125px text-gray-500 fw-semibold fs-7'>Or with email</span>
      </div> */}
      {/* {formik.status && (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{formik.status}</div>
        </div>
      )} */}
      {/* begin::Form group Firstname */}
      <div className='fv-row mb-4'>
        <label className='form-label fw-bolder text-dark fs-6'>First name</label>
        <input
          placeholder='First name'
          type='text'
          autoComplete='off'
          {...register('first_name')}
          className={clsx(
            'form-control bg-transparent form-control-sm',
            // {
            //   'is-invalid': formik.touched.firstname && formik.errors.firstname,
            // },
            // {
            //   'is-valid': formik.touched.firstname && !formik.errors.firstname,
            // }
          )}
        />
        {/* {formik.touched.firstname && formik.errors.firstname && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.firstname}</span>
            </div>
          </div>
        )} */}
      </div>
      {/* end::Form group */}
      <div className='fv-row mb-4'>
        {/* begin::Form group Lastname */}
        <label className='form-label fw-bolder text-dark fs-6'>Last name</label>
        <input
          placeholder='Last name'
          type='text'
          autoComplete='off'
          {...register('last_name')}
          className={clsx(
            'form-control bg-transparent form-control-sm',
            // {
            //   'is-invalid': formik.touched.lastname && formik.errors.lastname,
            // },
            // {
            //   'is-valid': formik.touched.lastname && !formik.errors.lastname,
            // }
          )}
        />
        {/* {formik.touched.lastname && formik.errors.lastname && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.lastname}</span>
            </div>
          </div>
        )} */}
        {/* end::Form group */}
      </div>
      {/* begin::Form group Email */}
      <div className='fv-row mb-4'>
        <label className='form-label fw-bolder text-dark fs-6'>Email</label>
        <input
          placeholder='Email'
          type='email'
          {...register('email')}
          className={clsx(
            'form-control bg-transparent form-control-sm',
            // {'is-invalid': formik.touched.email && formik.errors.email},
            // {
            //   'is-valid': formik.touched.email && !formik.errors.email,
            // }
          )}
        />
        {/* {formik.touched.email && formik.errors.email && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.email}</span>
            </div>
          </div>
        )} */}
      </div>
      {/* end::Form group */}
      {/* begin::Form group Password */}
      <div className='fv-row mb-4' data-kt-password-meter='true'>
        <div className='mb-1'>
          <label className='form-label fw-bolder text-dark fs-6'>Password</label>
          <div className='position-relative mb-3'>
            <input
              type='password'
              placeholder='Password'
              {...register('password')}
              className={clsx(
                'form-control bg-transparent form-control-sm',
                // {
                //   'is-invalid': formik.touched.password && formik.errors.password,
                // },
                // {
                //   'is-valid': formik.touched.password && !formik.errors.password,
                // }
              )}
            />
            {/* {formik.touched.password && formik.errors.password && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.password}</span>
                </div>
              </div>
            )} */}
          </div>
          {/* begin::Meter */}
          <div
            className='d-flex align-items-center mb-3'
            data-kt-password-meter-control='highlight'
          >
            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px'></div>
          </div>
          {/* end::Meter */}
        </div>
        <div className='text-muted'>
          Use 8 or more characters with a mix of letters, numbers & symbols.
        </div>
      </div>
      {/* end::Form group */}
      {/* begin::Form group Confirm password */}
      {/* <div className='fv-row mb-5'>
        <label className='form-label fw-bolder text-dark fs-6'>Confirm Password</label>
        <input
          type='password'
          placeholder='Password confirmation'
          {...register('changepassword')}
          className={clsx(
            'form-control bg-transparent form-control-sm',
            {
              'is-invalid': formik.touched.changepassword && formik.errors.changepassword,
            },
            {
              'is-valid': formik.touched.changepassword && !formik.errors.changepassword,
            }
          )}
        />
        {formik.touched.changepassword && formik.errors.changepassword && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.changepassword}</span>
            </div>
          </div>
        )}
      </div> */}
      {/* end::Form group */}

      {/* begin::Form group */}
      {/* <div className='fv-row mb-4'>
        <label className='form-check form-check-inline' htmlFor='kt_login_toc_agree'>
          <input
            className='form-check-input'
            type='checkbox'
            id='kt_login_toc_agree'
            {...register('acceptTerms')}
          />
          <span>
            I Accept the{' '}
            <a
              href='https://keenthemes.com/metronic/?page=faq'
              target='_blank'
              className='ms-1 link-primary'
            >
              Terms
            </a>
            .
          </span>
        </label>
        {formik.touched.acceptTerms && formik.errors.acceptTerms && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.acceptTerms}</span>
            </div>
          </div>
        )}
      </div> */}
      {/* end::Form group */}
      {/* begin::Form group */}
      <div className='text-center'>
        <button
          type='submit'
          id='kt_sign_up_submit'
          className='btn btn-lg btn-primary w-100 mb-5'
        >
          {!loading && <span className='indicator-label'>Submit</span>}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              Please wait...{' '}
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
        <Link to='/auth/login'>
          <button
            type='button'
            id='kt_login_signup_form_cancel_button'
            className='btn btn-lg btn-light-primary w-100 mb-5'
          >
            Cancel
          </button>
        </Link>
      </div>
      {/* end::Form group */}
    </form>
  )
}
