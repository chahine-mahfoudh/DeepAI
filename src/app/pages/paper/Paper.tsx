import {useForm} from 'react-hook-form'
import {useState} from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import useTextAnimation from '../../utils/useTextAnimation'
import {toAbsoluteUrl} from '../../../_metronic/helpers/AssetHelpers'
import axiosInstance from '../../config/axios/axiosConfig'
import Select from 'react-select'
import {useThemeMode} from '../../../_metronic/partials/layout/theme-mode/ThemeModeProvider'

function Paper() {
  const {register, handleSubmit} = useForm()
  const {mode, menuMode, updateMode, updateMenuMode} = useThemeMode()
  const textResponse = 'Please write the details here .' // Replace this with your desired text
  const responseSpeed = 150
  const animatedPlaceholder = useTextAnimation(textResponse, responseSpeed)
  const [openPdfModal, setOpenPdfModal] = useState(false)
  const [improvmentReq, setImprovmentReq] = useState(false)
  const improveFile = () => {
    setImprovmentReq(true)
  }
  const paperFormSubmit = async ({brief, type, names, language}: any) => {
    const {data} = await axiosInstance.post('/search/api/v1/paper/', {
      brief: brief,
      type: type,
      names: names,
      language: language,
    })
    console.log(data)
  }

  const toggle = () => {
    setImprovmentReq(false)
    setOpenPdfModal(!openPdfModal)
  }
  const handleAccepterClick = () => {
    // Add your logic for accepting the file
    // For downloading the file, create a hidden anchor element and click it programmatically
    const pdfUrl = toAbsoluteUrl('/media/location_habitation.pdf')
    const downloadLink = document.createElement('a')
    downloadLink.href = pdfUrl
    downloadLink.download = 'location_habitation.pdf'
    downloadLink.click()
    toggle() // Close the modal after the download link is clicked
  }
  return (
    <form onSubmit={handleSubmit(paperFormSubmit)}>
      <div className='row mt-5 '>
        <div className='col-lg-3 p-5'>
          Pays
          <Select
            options={[
              {value: '1', label: ' 🇹🇳 Tunisia'},
              {value: '2', label: ' 🇲🇫 France'},
            ]}
            defaultValue={{value: '1', label: ' 🇹🇳 Tunisia'}}
            isSearchable
            className='react-select-container'
            classNamePrefix='react-select'
          />
        </div>
        <div className='col-lg-3 p-5'>
          Langue
          <Select
            options={[
              {value: '1', label: '  Francais'},
              {value: '2', label: '   عربي'},
            ]}
            defaultValue={{value: '1', label: '  Francais'}}
            isSearchable
            className='react-select-container'
            classNamePrefix='react-select'
          />
        </div>
        <div className='col-lg-3 p-5'>
          type de document
          <Select
            options={[{value: '1', label: 'Immobilier'}]}
            defaultValue={{value: '1', label: 'Immobilier'}}
            isSearchable
            className='react-select-container'
            classNamePrefix='react-select'
          />
        </div>
        <div className='col-lg-3 p-5'>
          Sous type de document
          <Select
            options={[{value: '1', label: 'Contrat location'}]}
            defaultValue={{value: '1', label: 'Contrat location'}}
            isSearchable
            className='react-select-container'
            classNamePrefix='react-select'
          />
        </div>
        <div className='offset-2 col-8  offset-2 p-5'>
          <textarea
            {...register('brief')}
            placeholder={animatedPlaceholder}
            className='form-control'
            name=''
            id=''
            cols={15}
            rows={10}
          ></textarea>
        </div>
        <div className='text-center'>
          <button type='submit' className='btn btn-primary'>
            Generate
          </button>
        </div>
        <Modal fullscreen size='lg' isOpen={openPdfModal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Contrat Location</ModalHeader>
          <ModalBody className=''>
            {improvmentReq && (
              <div className=''>
                <label className='fs-3 fw-semibold'>What do you like to add ?</label>
                <textarea className='form-control' placeholder='' />
                <div className='text-center py-4'>
                  <button className='btn btn-primary'>Modify Contract</button>
                </div>
              </div>
            )}
            <div className='pdf-container py-2'>
              <embed
                className='pdf-content'
                src={toAbsoluteUrl('/media/location_habitation.pdf')}
              />
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
