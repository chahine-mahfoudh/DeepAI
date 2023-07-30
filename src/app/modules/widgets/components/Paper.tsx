import {useForm} from 'react-hook-form'
import useTextAnimation from '../../../utils/useTextAnimation'
import {useState} from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'

function Paper() {
  const {register, handleSubmit} = useForm()
  const textResponse = 'Please write the details here .' // Replace this with your desired text
  const responseSpeed = 150
  const animatedPlaceholder = useTextAnimation(textResponse, responseSpeed)
  const [openPdfModal, setOpenPdfModal] = useState(false)
  const [improvmentReq, setImprovmentReq] = useState(false)
  const improveFile = () => {
    setImprovmentReq(true)
  }
  const paperFormSubmit = (data: any) => {
    console.log()
  }

  const toggle = () => {
    setImprovmentReq(false)
    setOpenPdfModal(!openPdfModal)}
    const handleAccepterClick = () => {
      // Add your logic for accepting the file
      // For downloading the file, create a hidden anchor element and click it programmatically
      const pdfUrl = toAbsoluteUrl('/media/Issam+Baccouch.pdf');
      const downloadLink = document.createElement('a');
      downloadLink.href = pdfUrl;
      downloadLink.download = 'Issam+Baccouch.pdf';
      downloadLink.click();
      toggle(); // Close the modal after the download link is clicked
    };
  return (
    <form onSubmit={handleSubmit(paperFormSubmit)}>
      <div className='row mt-5 '>
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
              CV
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
              CV
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
          <button
            type='button'
            onClick={() => {
              setOpenPdfModal(true)
            }}
            className='btn btn-primary'
          >
            Generate
          </button>
        </div>
        <Modal fullscreen size='lg' isOpen={openPdfModal} toggle={toggle}>
      <ModalHeader toggle={toggle}>PDF</ModalHeader>
      <ModalBody className=''>
        {improvmentReq && (
          <div className=''>
            <label className="fs-3 fw-semibold">What do you like to add ?</label>
            <textarea className='form-control' placeholder='' />
            <div className='text-center py-4'>
              <button className='btn btn-primary'>Modify Contract</button>
            </div>
          </div>
        )}
        <div className='pdf-container py-2'>
          <embed className='pdf-content' src={toAbsoluteUrl('/media/Issam+Baccouch.pdf')} />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color='success' onClick={handleAccepterClick}>
          Accepter
        </Button>{' '}
        <Button color='primary' onClick={improveFile}>
          Improve
        </Button>{' '}
        <Button color='danger' onClick={toggle}>
          Reject
        </Button>{' '}
        <Button color='secondary' onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
      </div>
    </form>
  )
}

export default Paper
