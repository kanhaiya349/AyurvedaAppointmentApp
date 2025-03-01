import React from 'react'
import TreatmentProgrammes from '../homePages/TreatmentProgrammes'
import DoctorDescription from '../homePages/DoctorDescription'

function Home() {
  return (
    <div className='flex flex-col'>
      <h1 className='text-center text-[40px] font-bold text-secondary mb-10 underline'>ashoni ayurveda</h1>
      <TreatmentProgrammes/>
      <DoctorDescription/>
    </div>
  )
}

export default Home