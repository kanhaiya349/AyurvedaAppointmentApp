import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import dropdown from "../assets/dropdown_icon.svg";
import userImage from "../assets/upload_area.png";
import logo from "../assets/logo1.jpg"

function Navbar() {
  const [login, setLogin] = useState(true);
  const navigate=useNavigate()
  return (
    <div className="flex flex-col md:flex-row justify-between py-2 md:py-5 mb-5 items-center max-md:text-[11px] text-sm border-b border-b-[#ADADAD]">
      <img onClick={()=>navigate("/")} src={logo} alt="Company_logo" className="w-40 cursor-pointer max-md:mb-2 rounded-full w-10" />
      <ul className="flex md:items-center flex gap-5  font-medium transition-all ease-in-out duration-500">
        <NavLink to={"/"}>
          <li className="hover:font-bold hover:text-secondary">Home</li>
        </NavLink>
        <NavLink to={"/all-programmes"}>
          <li className="hover:font-bold hover:text-secondary">Programmes</li>
        </NavLink>
        <NavLink to={"/about-us"}>
          <li className="hover:font-bold hover:text-secondary">About us</li>
        </NavLink>
        <NavLink to={"/contact-us"}>
          <li className="hover:font-bold hover:text-secondary">Contact us</li>
        </NavLink>
        <div className="flex text-center items-center gap-4">
          {login ? (
            <div className="flex h-full item-center gap-2 cursor-pointer relative group">
              <img
                src={userImage}
                alt="user"
                className="w-7 rounded-full cursor-pointer"
              />
              <img src={dropdown} className="w-2.5" />
              <div
                className={`pt-10 absolute top-0 right-0 h-[170px] w-40 text-left rounded-lg text-[15px] font-semibold hidden group-hover:block`}
              >
                <div className="z-10 bg-white shadow-3xl flex flex-col item-center h-[100%]">
                  <p onClick={()=>navigate("/my-profile")} className="flex items-center hover:bg-secondary hover:text-white pl-4 h-1/3 transition-all ease-in-out duration-500">
                    My Profile
                  </p>
                  <p onClick={()=>navigate("/my-appointments")} className="flex items-center hover:bg-secondary hover:text-white pl-4 h-1/3 transition-all ease-in-out duration-500">
                    My Appointment
                  </p>
                  <p onClick={()=>setLogin(false)} className="flex items-center hover:bg-secondary hover:text-white pl-4 h-1/3 transition-all ease-in-out duration-500">
                    Log Out
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button onClick={()=>{navigate("/login")}} className="px-4 py-2 bg-secondary rounded-full hover:bg-red-900 text-white transition-all ease-in-out duration-500 cursor-pointer">
              Login
            </button>
          )}
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
