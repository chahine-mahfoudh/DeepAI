import {useForm} from 'react-hook-form'
import useTextAnimation from '../../../utils/useTextAnimation'

function Paper() {
  const {register, handleSubmit} = useForm()
  const textResponse = 'Please write the details here .' // Replace this with your desired text
  const responseSpeed = 150
  const animatedPlaceholder = useTextAnimation(textResponse, responseSpeed)
  const paperFormSubmit = (data:any) => {
    console.log();
    
  }
  return (
    <div className='row mt-5 '>
      <form onSubmit={handleSubmit(paperFormSubmit)}>
      <div className='col-lg-3 p-5'>
        Pays
        <select
          {...register('country')}
          className='form-select'
          aria-label='Default select example'
        >
          <option value='1' selected>
            🇹🇳 Tunisia
          </option>
          <option value='2'>🇲🇫 France</option>
        </select>
      </div>
      <div className='col-lg-3 p-5'>
        Langue
        <select
          {...register('language')}
          className='form-select'
          aria-label='Default select example'
        >
          <option value='1' selected>
            Francais
          </option>
          <option value='2'>عربي</option>
        </select>
      </div>
      <div className='col-lg-3 p-5'>
        type de document
        <select
          {...register('docType')}
          className='form-select'
          aria-label='Default select example'
        >
          <option value='1' selected>
            One
          </option>
          <option value='2'>Two</option>
          <option value='3'>Three</option>
        </select>
      </div>
      <div className='col-lg-3 p-5'>
        Sous type de document
        <select
          {...register('subDocType')}
          className='form-select'
          aria-label='Default select example'
        >
          <option value='1' selected>
            One
          </option>
          <option value='2'>Two</option>
          <option value='3'>Three</option>
        </select>
      </div>
      <div className='offset-2 col-8  offset-2 p-5'>
        <textarea
          {...register('details')}
          placeholder={animatedPlaceholder}
          className='form-control'
          name=''
          id=''
          cols={15}
          rows={10}
        ></textarea>
      </div>
      <div className='text-center'>
        <button type='submit' className='btn btn-primary'>generate</button>
      </div>
      </form>
    </div>
  )
}

export default Paper
