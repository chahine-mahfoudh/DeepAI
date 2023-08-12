import React, {useEffect, useState} from 'react'
import justiceWoman from '../../../../assets/legaly/Legaly-Intro.webp'
import useTextAnimation from '../../../../../app/utils/useTextAnimation'

const DashboardTab = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const listOfQuotes = [
    '"Injustice anywhere is a threat to justice everywhere." -Martin Luther King, Jr.',
    '"It is the spirit and not the form of law that keeps justice alive." -Earl Warren ',
    '"If you want peace, work for justice." -Pope Paul VI',
    '"Justice delayed is justice denied." -Martin Luther King, Jr.',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex(Math.floor(Math.random() * listOfQuotes.length))
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='mx-5'>
      <h3 className='fw-bolder text-dark mb-10 mx-0'>Dashboard</h3>
      <div className='pt-12'>
        <img className='w-100 h-100' src={justiceWoman} alt='' />
      </div>
      <div className='pt-12 '>
        <label className='text-dark fs-3 fw-semibold ' htmlFor=''>
          <em>{useTextAnimation(listOfQuotes[selectedIndex], 80)}</em>
        </label>
      </div>
    </div>
  )
}

export default DashboardTab
