import {RiSearchLine} from 'react-icons/ri'
import {BsFillChatLeftTextFill} from 'react-icons/bs'
import './search.css'
import {useState, useEffect} from 'react'
import {
  ButtonDropdown,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
} from 'reactstrap'
import {toast} from 'react-toastify'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'

function Search() {
  const typingSpeed = 150
  const responseSpeed = 40
  const placeholderText = 'Ask anything here to our AI and it will answear you  ...'
  const [animatedText, setAnimatedText] = useState('')
  const [selectedCountry, setSelectedCounytry] = useState('TN')
  const [searchAlreadyClicked, setSearchAlredyClicked] = useState(false)
  const [textResponse, setTextResponse] = useState('')
  const [animatedTextResponse, setAnimatedTextResponse] = useState('')
  const [CountryDropdownOpen, setCountryDropdownOpen] = useState(false)
  const [selectedDomain, setSelectedDomain] = useState('LAW')
  
  const suggestion = [
    'Qui est exonéré des frais de timbre ?',
    'Quel est le montant du SMIC en Tunisie ?',
    'من كتب دستور تونس 1959؟',
    'Amendes Finances tunisie, combien?',
  ]
  const references = [
    "L'article 198 du Code pénal tunisien",
  ]
  const reponseSuggestion = [
    'Vol simple',
    'Vol domestique',
  ]
  const bootstrapBgColors = ['primary', 'secondary', 'success', 'danger']
  const reponseBootstrapBgColors = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]


  function handleTextareaKeyDown(event: {target: any}) {
    const textarea = event.target
    textarea.style.height = 'auto'
    textarea.style.height = `${textarea.scrollHeight}px`
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
  const handleSearch = () => {
    if (!searchAlreadyClicked) {
      document.getElementById('search-accordion-header')?.click()
      setSearchAlredyClicked(true)
      setTextResponse("Peine : L'article 198 du Code pénal tunisien prévoit que le vol qualifié est passible d'une peine de réclusion criminelle à perpétuité.")
    }
  }

  const toggle = () => setCountryDropdownOpen((prevState) => !prevState)

  return (
    <div className='w-100'>
      <div className='d-flex flex-column justify-content-center align-items-center flex-wrap gap-5'>
        <div className='h1 fw-semibold  py-5'>The AI search engine for LAW</div>
        <div className='row w-lg-50  pt-5 gap-5'>
          <div className='col'>
            <label className='fs-2' htmlFor=''>
              Country :
            </label>
          </div>
          <div className='col'>
            <div className='form-check form-check-custom form-check-solid'>
              <span className='accordion-icon'>
                <KTSVG className='svg-icon svg-icon-2x' path='/media/flags/tunisia.svg' />
              </span>
              <h3 className='fs-4 text-gray-800 fw-bold mb-0 mx-4'>TN</h3>
              <input
                className='form-check-input'
                type='radio'
                value={'TN'}
                name='country'
                checked={selectedCountry === 'TN'}
                onChange={() => setSelectedCounytry('TN')}
              />
            </div>
          </div>
          <div className='col '>
            <div className='form-check form-check-custom form-check-solid'>
              <span className='accordion-icon'>
                <KTSVG className='svg-icon svg-icon-2x' path='/media/flags/france.svg' />
              </span>
              <h3 className='fs-4 text-gray-800 fw-bold mb-0 mx-4'>FR</h3>
              <input
                className='form-check-input'
                type='radio'
                value={'FR'}
                name='country'
                checked={selectedCountry === 'FR'}
                onChange={() => setSelectedCounytry('FR')}
              />
            </div>
          </div>
        </div>
        <div className='row w-lg-50 '>
          <div className='col'>
            <label className='fs-2 ' htmlFor=''>
              Domain :{' '}
            </label>
          </div>
          <div className='col '>
            <div className='form-check form-check-custom form-check-solid'>
              <span className='accordion-icon'>
                <img
                  className='svg-icon svg-icon-2x'
                  src={toAbsoluteUrl('/media/law.png')}
                  width={35}
                  height={35}
                />
              </span>
              <h3 className='fs-4 text-gray-800 fw-bold mb-0 mx-4'>Law</h3>
              <input
                className='form-check-input'
                type='radio'
                value={'LAW'}
                name='domain'
                checked={selectedDomain === 'LAW'}
                onChange={() => setSelectedDomain('LAW')}
              />
            </div>
          </div>
          <div className='col'>
            <div className='form-check form-check-custom form-check-solid'>
              <span className='accordion-icon'>
                <img
                  className='svg-icon svg-icon-2x'
                  src={toAbsoluteUrl('/media/paper.png')}
                  width={35}
                  height={35}
                />
              </span>
              <h3 className='fs-4 text-gray-800 fw-bold mb-0 mx-4'>General</h3>
              <input
                className='form-check-input'
                type='radio'
                value={'GENERAL'}
                name='domain'
                checked={selectedDomain === 'GENERAL'}
                onChange={() => setSelectedDomain('GENERAL')}
              />
            </div>
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
                <h3 className='fs-4 text-gray-800 fw-bold mb-0 ms-4'>Explore Trending topics</h3>
              </div>
              <div
                id='kt_accordion_2_item_1'
                className='fs-6 collapse show ps-10'
                data-bs-parent='#kt_accordion_2'
              >
                <div>
                  {suggestion.map((s, i) => (
                    <p dir='auto'>
                      <div
                        className={`bg-${
                          bootstrapBgColors[i % bootstrapBgColors.length]
                        }  p-2 rounded-3`}
                      >
                        {s}
                      </div>
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
          <div className="row">
            <div className='col-lg-7'>
              <div className='card h-100 card-xl-stretch mb-5 mb-xl-8 '>
                <div className='card-header'>
                  <div className='w-100 card-title'>
                    <div className='w-100 h-100 d-flex justify-content-between align-items-center'>
                      <div>
                        <label htmlFor=''>Reponse pour:  {animatedTextResponse && "Peine du vol qualifié ?"}</label>
                      </div>
                     {animatedTextResponse && <div className='d-flex  align-items-center'>
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
                      </div>}
                    </div>
                  </div>
                </div>
                <div className='card-body'>{animatedTextResponse}</div>
           {animatedTextResponse &&     <div className='card-footer'>
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
                          <h3 className='fs-7 text-gray-800 fw-bold mb-0 ms-4'>Related Question</h3>
                        </div>
                        <div
                          id='kt_accordion_2_item_1-related'
                          className='fs-6 collapse show  ps-10'
                          data-bs-parent='#kt_accordion_2-related'
                        >
                          <div>
                            {reponseSuggestion.map((s, i) => (
                              <p dir='auto'>
                                <div
                                  className={`bg-${
                                    reponseBootstrapBgColors[i % reponseBootstrapBgColors.length]
                                  }  p-2 rounded-3 fs-7`}
                                >
                                  {s}
                                </div>
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>}
              </div>
            </div>
            <div className='col-lg-4'>
        { animatedTextResponse &&     <div className='card'>
                <div className='card-header'>
                  <div className='card-title'>References</div>
                </div>
                <div className='card-body'>
                  {references.map((s, i) => (
                    <p dir='auto'>
                      <div
                        className={`bg-${
                          bootstrapBgColors[i % bootstrapBgColors.length]
                        }  p-2 rounded-3`}
                      >
                        {s}
                      </div>
                    </p>
                  ))}
                </div>
              </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
