import React from "react";
import { doctors } from "../assets/assets";
import { useNavigate } from "react-router-dom";

function DoctorDescription() {
  const navigate=useNavigate()

  return (
    <div id="doctors" className="mb-10">
      <h4 className="text-[25px] font-bold mb-10 text-secondary">
        Doctors
      </h4>
      <div className="w-full grid grid-cols-auto gap-6">
        {doctors.map((item, index) => (
          <div className="flex flex-col border w-full rounded-lg border-secondary overflow-hidden" key={index}>
            <img onClick={()=>{navigate(`/doctors/${item._id}`);scrollTo(0,0)}}
              className="bg-[#EAEFFF] w-full cursor-pointer rounded-lg hover:scale-110 transition-all ease-in-out duration-500"
              src={item.image}
            />
            <div className="px-1 py-4">
              <p className="cursor-pointer font-semibold text-xl hover:text-secondary">
                {item.name}
              </p>
              <p className="text-sm font-semibold mt-1">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorDescription;
