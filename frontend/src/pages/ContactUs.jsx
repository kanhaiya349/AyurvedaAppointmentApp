import { NavLink } from "react-router-dom"
import contactImg from "../assets/contact_image.png"

function ContactUs() {
  return (
    <div className="flex flex-col mb-20">
        <h3 className="text-2xl font-semibold my-10 text-center"><span className="text-textColor">CONTACT</span> US</h3>
        <div className="flex flex-col md:flex-row gap-10 mb-20 w-full md:justify-center">
          <img className="md:h-[350px] rounded-lg" src={contactImg} alt="" />
          <div className="flex flex-col">
            <h5 className="text-lg font-semibold text-textColor mb-6">OUR OFFICE</h5>
            <p className="text-sm text-textColor">54709 Willms Station</p>
            <p className="text-sm text-textColor mb-6">Suite 350, Washington, USA</p>
            <p className="text-sm text-textColor">Tel: (+91) 9117961659</p>
            <p className="text-sm text-textColor mb-6">Email: ashoniayurveda5944@gmail.com</p>
            <h5 className="text-lg font-semibold text-textColor mb-6">CAREERS AT ASHONI AYURVEDA</h5>
            <p className="text-sm text-textColor mb-6">Learn more about our teams and job openings.</p>
            <NavLink to={'/jobs'}>
              <button className="border border-black text-sm py-3 w-32 px-5 px-3 rounded-full hover:bg-black hover:text-white transition-all ease-in-out duration-500">Explore Jobs</button>
            </NavLink>
          </div>
        </div>
    </div>
  )
}

export default ContactUs