import {RiSearchLine} from 'react-icons/ri'
import {useState, useEffect} from 'react'
import {
  Input,
  InputGroup,
  InputGroupText,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import axiosInstance from '../../config/axios/axiosConfig'
import {nanoid} from '@reduxjs/toolkit'

function Search() {
  const typingSpeed = 250
  const responseSpeed = 40
  const placeholderText = 'Posez question ici à notre IA et elle vous répondra'
  const [animatedText, setAnimatedText] = useState('')
  const [selectedCountry, setSelectedCounytry] = useState('TN')
  const [searchAlreadyClicked, setSearchAlredyClicked] = useState(false)
  const [textResponse, setTextResponse] = useState('')
  const [reponseIsLoading, setReponseIsLoading] = useState(false)
  const [animatedTextResponse, setAnimatedTextResponse] = useState('')
  const [question, setQuestion] = useState('')
  const [selectedDomain, setSelectedDomain] = useState('LAW')
  const [showedReferenceCount, setShowedReferenceCount] = useState(3)
  const [showAllSuggestions, setShowAllSuggestions] = useState(false)

  const suggestion = [
    'Qui est exonéré des frais de timbre ?',
    'Quel est le montant du SMIC en Tunisie ?',
    'من كتب دستور تونس 1959؟',
    'Amendes Finances tunisie, combien?',
  ]
  const [references, setReferences] = useState([])
  const [reponseSuggestion, setReponseSuggestion] = useState([])
  const [selectedReference, setSelectedReference]: any = useState()
  function handleTextareaKeyDown(event: {target: any}) {
    const textarea = event.target
    textarea.style.height = 'auto'
    textarea.style.height = `${textarea.scrollHeight}px`
  }
  const handleShowMoreReferences = () => {
    setShowAllSuggestions(true)
    setShowedReferenceCount(references.length)
  }
  const handleShowLessReferences = () => {
    setShowAllSuggestions(false)
    setShowedReferenceCount(3)
  }
  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % (placeholderText.length + 1)
      setAnimatedText(placeholderText.slice(0, currentIndex))
    }, typingSpeed)

    return () => clearInterval(interval)
  }, [placeholderText, typingSpeed])

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < textResponse.length) {
        currentIndex++
        setAnimatedTextResponse(textResponse.slice(0, currentIndex))
      } else {
        clearInterval(interval) // Stop the animation when currentIndex reaches the end.
      }
    }, responseSpeed)
    return () => clearInterval(interval)
  }, [textResponse])
  const handleSearch = async () => {
    setReponseIsLoading(true)
    const inputSearchValue = (document.getElementById('search-input')! as HTMLInputElement).value
    setQuestion(inputSearchValue)
    axiosInstance
      .post(`/search/api/v1/answer/`, {
        question: inputSearchValue,
        query_type: 'general',
        language: 'French',
      })
      .then(({data}) => {
        setTextResponse(data.answer[0].text)
        axiosInstance
          .post(`/search/api/v1/search?question=${inputSearchValue}&ask_type=legal`)
          .then(({data}) => {
            setReferences(data.documents)
            setReponseIsLoading(false)
            axiosInstance.post(`/search/api/v1/suggest/`,{
              query: inputSearchValue,
              language: 'French',
            }).then(({data})=>{
              setReponseSuggestion(data.suggestions)
            })
          })
      })
    if (!searchAlreadyClicked) {
      document.getElementById('search-accordion-header')?.click()
      setSearchAlredyClicked(true)
    }
  }
  const trimedText = (text: string) => text?.substring(text.indexOf(':') + 1).trim()

  return (
    <div className='w-100'>
      <div className='d-flex flex-column justify-content-center align-items-center flex-wrap gap-5'>
        <div className='h1 fw-semibold  py-5'>IA Recherche Juridique</div>
        <div className='row w-lg-50  pt-5 gap-5'>
          <div className='col'>
            <label className='fs-2' htmlFor=''>
              Pays :
            </label>
          </div>
          <div className='col'>
            <label
              htmlFor='tn-country'
              className='form-check form-check-custom form-check-solid cursor-pointer'
            >
              <span className='accordion-icon'>
                <KTSVG className='svg-icon svg-icon-2x' path='/media/flags/tunisia.svg' />
              </span>
              <h3 className='fs-4 text-gray-800 fw-bold mb-0 mx-4'>TN</h3>
              <input
                id='tn-country'
                className='form-check-input '
                type='radio'
                value={'TN'}
                name='country'
                checked={selectedCountry === 'TN'}
                onChange={() => setSelectedCounytry('TN')}
              />
            </label>
          </div>
          <div className='col '>
            <label
              htmlFor='fr-country'
              className='form-check form-check-custom form-check-solid cursor-pointer'
            >
              <span className='accordion-icon'>
                <KTSVG className='svg-icon svg-icon-2x' path='/media/flags/france.svg' />
              </span>
              <h3 className='fs-4 text-gray-800 fw-bold mb-0 mx-4'>FR</h3>
              <input
                id='fr-country'
                className='form-check-input'
                type='radio'
                value={'FR'}
                name='country'
                checked={selectedCountry === 'FR'}
                onChange={() => setSelectedCounytry('FR')}
              />
            </label>
          </div>
        </div>
        <div className='row w-lg-50 '>
          <div className='col'>
            <label className='fs-2 ' htmlFor=''>
              Type :{' '}
            </label>
          </div>
          <div className='col '>
            <label
              htmlFor='law-domain'
              className='form-check form-check-custom form-check-solid cursor-pointer'
            >
              <span className='accordion-icon'>
                <img
                  alt=''
                  className='svg-icon svg-icon-2x'
                  src={toAbsoluteUrl('/media/law.png')}
                  width={35}
                  height={35}
                />
              </span>
              <h3 className='fs-4 text-gray-800 fw-bold mb-0 mx-4'>Juridique</h3>
              <input
                id='law-domain'
                className='form-check-input'
                type='radio'
                value={'LAW'}
                name='domain'
                checked={selectedDomain === 'LAW'}
                onChange={() => setSelectedDomain('LAW')}
              />
            </label>
          </div>
          <div className='col'>
            <label
              htmlFor='general-domain'
              className='form-check form-check-custom form-check-solid cursor-pointer'
            >
              <span className='accordion-icon'>
                <img
                  alt=''
                  className='svg-icon svg-icon-2x'
                  src={toAbsoluteUrl('/media/paper.png')}
                  width={35}
                  height={35}
                />
              </span>
              <h3 className='fs-4 text-gray-800 fw-bold mb-0 mx-4'>Général</h3>
              <input
                id='general-domain'
                className='form-check-input'
                type='radio'
                value={'GENERAL'}
                name='domain'
                checked={selectedDomain === 'GENERAL'}
                onChange={() => setSelectedDomain('GENERAL')}
              />
            </label>
          </div>
        </div>
        <div className='w-lg-75'>
          <div className=' accordion accordion-icon-toggle show' id='kt_accordion_2'>
            <div className='mb-5 w-100 '>
              <div
                className='accordion-header py-3 d-flex'
                data-bs-toggle='collapse'
                data-bs-target='#kt_accordion_2_item_1'
                id='search-accordion-header'
              >
                <span className='accordion-icon'>
                  <KTSVG
                    className='svg-icon svg-icon-4'
                    path='/media/icons/duotune/arrows/arr064.svg'
                  />
                </span>
                <h3 className='fs-4 text-gray-800 fw-bold mb-0 ms-4'>
                  Découvrir les sujets populaires
                </h3>
              </div>
              <div
                id='kt_accordion_2_item_1'
                className='fs-6 collapse show ps-10'
                data-bs-parent='#kt_accordion_2'
              >
                <div>
                  {suggestion.map((s, i) => (
                    <p dir='auto'>
                      <div className='p-2 rounded-3 bg-secondary'>{s}</div>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex flex-column gap-3 w-100'>
          <div className=' bg-body rounded'>
            <InputGroup>
              <Input
                rows={1}
                type='textarea'
                placeholder={animatedText}
                onKeyDown={handleTextareaKeyDown}
                style={{resize: 'vertical'}}
                id='search-input'
              />
              <span className='w-110px'>
                <Input id='exampleSelect' name='select' type='select' className=''>
                  <option>française</option>
                  <option dir='auto'>عربي</option>
                </Input>
              </span>
              <InputGroupText className='cursor-pointer' onClick={handleSearch}>
                <RiSearchLine />
              </InputGroupText>
            </InputGroup>
          </div>
          {/* <div  className='d-flex justify-content-evenly gap-3 flex-wrap w-100 m-2'>
            <FormGroup switch>
              <Input type='switch' role='switch' />
              <Label check> Tunis</Label>
            </FormGroup>
            <div>|</div>
            <FormGroup switch>
              <Input type='switch' role='switch' />
              <Label check> France</Label>
            </FormGroup>
          </div> */}
        </div>
        <div className=' card w-100'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='card h-100 card-xl-stretch mb-5 mb-xl-8 '>
                <div className='card-header'>
                  <div className='w-100 card-title'>
                    <div className='w-100 h-100 d-flex justify-content-between align-items-center'>
                      <div>
                        <label htmlFor=''>Objet: {question}</label>
                      </div>
                      {animatedTextResponse && (
                        <div className='d-flex  align-items-center'>
                          <div className='p-1'>
                            <span className='accordion-icon'>
                              <i className='bi bi-hand-thumbs-up-fill fs-2x'></i>
                            </span>
                          </div>
                          <div className='px-2 pt-2'>
                            <span className='accordion-icon'>
                              <i className='bi bi-hand-thumbs-down-fill fs-2x'></i>
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className='card-body'>{animatedTextResponse}</div>
                {animatedTextResponse && (
                  <div className='card-footer'>
                    <div className='w-lg-75'>
                      <div className='accordion accordion-icon-toggle ' id='kt_accordion_2-related'>
                        <div className='mb-5 w-100 '>
                          <div
                            className='accordion-header py-3 d-flex'
                            data-bs-toggle='collapse'
                            data-bs-target='#kt_accordion_2_item_1-related'
                            id='search-accordion-header-related'
                          >
                            <span className='accordion-icon'>
                              <KTSVG
                                className='svg-icon svg-icon-4'
                                path='/media/icons/duotune/arrows/arr064.svg'
                              />
                            </span>
                            <h3 className='fs-7 text-gray-800 fw-bold mb-0 ms-4'>
                              Questions liée:
                            </h3>
                          </div>
                          <div
                            id='kt_accordion_2_item_1-related'
                            className='fs-6 collapse show  ps-10'
                            data-bs-parent='#kt_accordion_2-related'
                          >
                            <div>
                              {reponseSuggestion.map((s, i) => (
                                <p dir='auto'>
                                  <div className='p-2 rounded-3 fs-7 bg-secondary'>{s}</div>
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className='col-lg-4'>
              {animatedTextResponse && (
                <div className='card p-3'>
                  <div className='card-header'>
                    <div className='card-title'>Références</div>
                  </div>
                  <div className='card-body'>
                    {references.slice(0, showedReferenceCount).map((reference: any, i) => (
                      <div key={i}>
                        <div className='d-flex gap-2'>
                          <button
                            type='button'
                            data-bs-toggle='modal'
                            data-bs-target='#reference_content'
                            onClick={() => setSelectedReference(reference)}
                            className='btn btn-icon  flex-center bg-light btn-color-primary btn-active-color-primary h-40px'
                          >
                            <KTSVG
                              path='/media/icons/duotune/coding/cod002.svg'
                              className='svg-icon svg-icon-3x'
                            />
                          </button>
                          <p className='p-2 rounded-3 bg-secondary' dir='auto'>
                            {reference.metadata.doc_title}
                          </p>
                        </div>
                      </div>
                    ))}
                    {showAllSuggestions ? (
                      <button
                        type='button'
                        onClick={handleShowLessReferences}
                        className='btn btn-link'
                      >
                        Voir moins
                      </button>
                    ) : (
                      <button
                        type='button'
                        onClick={handleShowMoreReferences}
                        className='btn btn-link'
                      >
                        Voir plus
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='modal fade' tabIndex={-1} id='reference_content'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>
                {`${trimedText(selectedReference?.metadata?.meta_infos)} n°${trimedText(
                  selectedReference?.metadata?.meta_infos_2
                )} du ${trimedText(selectedReference?.metadata?.meta_infos_3)}   
                
                `}
              </h5>
              <div
                className='btn btn-icon btn-sm btn-active-light-primary ms-2'
                data-bs-dismiss='modal'
                aria-label='Close'
              >
                <KTSVG
                  path='/media/icons/duotune/arrows/arr061.svg'
                  className='svg-icon svg-icon-2x'
                />
              </div>
            </div>
            <div className='modal-body' style={{overflowY: 'auto'}}>
              <p>{selectedReference?.page_content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
