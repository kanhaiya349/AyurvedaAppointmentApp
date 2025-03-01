import React from 'react'
import TreatmentProgrammes from '../homePages/TreatmentProgrammes'
import DoctorDescription from '../homePages/DoctorDescription'

function Home() {
  return (
    <div className='flex flex-col'>
      <TreatmentProgrammes/>
      <DoctorDescription/>
    </div>
  )
}

export default Home