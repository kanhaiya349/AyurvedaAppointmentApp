import { useNavigate } from "react-router-dom"

function Footer() {
    const navigate=useNavigate();
  return (
    <div className="flex flex-col mt-10">
        <div className="border-b mb-5 pb-6 border-grey-300 flex flex-col md:flex-row justify-between">
            <div className="md:w-1/3">
                <img onClick={()=>{navigate("/");scrollTo(0,0)}} src="" alt="Company_logo" className="w-40 mb-5 cursor-pointer" />
                <p className="text-sm text-[#5C5C5C] font-normal">About Company</p>
            </div>
            <div className="lg:ml-20">
                <h5 className="text-xl font-semibold mb-5 mt-10 md:mt-0">COMPANY</h5>
                <p onClick={()=>{navigate("/");scrollTo(0,0)}} className="text-sm text-[#5C5C5C] font-semibold mb-2 cursor-pointer hover:text-secondary relative hover:left-0.5 transition-all ease-in-out duration-500">Home</p>
                <p onClick={()=>{navigate("/about-us");scrollTo(0,0)}} className="text-sm text-[#5C5C5C] font-semibold mb-2 cursor-pointer hover:text-secondary relative hover:left-0.5 transition-all ease-in-out duration-500">About us</p>
                <p onClick={()=>{navigate("/accomodation");scrollTo(0,0)}} className="text-sm text-[#5C5C5C] font-semibold mb-2 cursor-pointer hover:text-secondary relative hover:left-0.5 transition-all ease-in-out duration-500">Accomodation</p>
                <p onClick={()=>{navigate("/contact-us");scrollTo(0,0)}} className="text-sm text-[#5C5C5C] font-semibold mb-2 cursor-pointer hover:text-secondary relative hover:left-0.5 transition-all ease-in-out duration-500">Contact</p>
                <p onClick={()=>{navigate("/privacy-policy");scrollTo(0,0)}} className="text-sm text-[#5C5C5C] font-semibold mb-2 cursor-pointer hover:text-secondary relative hover:left-0.5 transition-all ease-in-out duration-500">Privacy Policy</p>
                <p onClick={()=>{navigate("/terms");scrollTo(0,0)}} className="text-sm text-[#5C5C5C] font-semibold mb-2 cursor-pointer hover:text-secondary relative hover:left-0.5 transition-all ease-in-out duration-500">Terms & Conditions</p>
            </div>
            <div className="lg:mr-20">
                <p className="text-xl font-semibold mb-5 mt-10 md:mt-0">GET IN TOUCH</p>
                <p onClick={()=>window.location.href="tel:+919117961659"} className="text-sm text-[#5C5C5C] font-semibold mb-2 cursor-pointer hover:text-secondary hover:underline decoration-secondary transition-all ease-in-out duration-500">+91-911-796-1659</p>
                <p onClick={()=>window.location.href="mailto:ashoniayurveda5944@gmail.com"} className="text-sm text-[#5C5C5C] font-semibold mb-2 cursor-pointer hover:text-secondary hover:underline decoration-secondary transition-all ease-in-out duration-500">ashoniayurveda5944@gmail.com</p>
            </div>
        </div>
        <div className="flex justify-center items-center mb-5 text-sm text-[#5C5C5C] font-semibold">Copyright 2024 @ Company Name - All Right Reserved.</div>
    </div>
  )
}

export default Footer