import React from 'react'
import profileImage from "../assets/profileImage.jpg"

function DoctorDescription() {
  return (
    <div>
      <h4 className='text-[25px] font-bold mb-10 text-secondary'>Doctor Description</h4>
      <div className='flex flex-col md:flex-row md:gap-5 lg:gap-10'>
        <img className='w-60 rounded-lg max-md:w-[60vw] mx-auto' src={profileImage} />
        <div>
          <p className='font-semibold text-xl my-4'>Mr. Ravi Ranjan</p>
          <p className='font-semibold'>Panchkarma Technician (CARI Guwahati)</p>
          <p className='text-lg font-semibold mt-4 mb-2'>About Myself</p>
          <p className='text-sm text-textColor mb-2'>I am an Ayurveda enthusiast with a deep passion for holistic healing and natural therapies. I have successfully completed my *Panchakarma Technician Course* from *CCRAS*, equipping me with profound knowledge of detoxification and rejuvenation techniques.</p>
          <p className='text-sm text-textColor mb-2'>Among various Ayurvedic treatments, my expertise and passion lie in *Leech Therapy (Jalaukavacharana)*—a powerful and time-tested method for blood purification and healing. I believe in harnessing the wisdom of Ayurveda to promote natural wellness.</p>
          <p className='text-sm text-textColor mb-2'>Additionally, I specialize in *hair care solutions* tailored to different hair types, focusing on Ayurvedic herbs and therapies to nourish and restore hair health. My goal is to help people achieve wellness through traditional yet scientifically backed Ayurvedic practices.</p>
        </div>
      </div>
    </div>
  )
}

export default DoctorDescription