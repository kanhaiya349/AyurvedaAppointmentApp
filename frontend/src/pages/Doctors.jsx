import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doctors } from "../assets/assets";

function Doctors() {
  const { docId } = useParams();
  const [docInfo, setdocInfo] = useState([]);
  const [otherDocs,setotherDocs]=useState([]);
  const navigate=useNavigate();

  const fetchDocInfo = async () => {
    const info = doctors.find((doc) => doc._id === docId);
    setdocInfo(info);
  };

  const fetchOtherDocs=async ()=>{
    const info=doctors.filter((doc)=>doc._id!==docId)
    setotherDocs(info)
  }

  useEffect(() => {
    fetchDocInfo();
    fetchOtherDocs();
  }, [doctors, docId]);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-10 border border-secondary p-4 mb-8">
        <img
          src={docInfo.image}
          className="w-[70%] md:w-[200px] max-md:mx-auto rounded-lg"
          alt=""
        />
        <div>
          <p className="text-3xl font-semibold">{docInfo.name}</p>
          <p className="text-sm my-2">{docInfo.degree}</p>
          <p className="font-semibold">{docInfo.speciality}</p>
          <p className="text-[13px] my-2">{docInfo.about?.line1}</p>
          <p className="text-[13px] my-2">{docInfo.about?.line2}</p>
          <p className="text-[13px] my-2 md:hidden lg:block">
            {docInfo.about?.line3}
          </p>
        </div>
      </div>
      <div className="mb-20">
        <h6 className="text-2xl font-semibold mb-5">Other Doctors</h6>
        {otherDocs.map((item,index)=>(
            <div className="flex flex-col border w-60 rounded-lg border-secondary overflow-hidden" key={index}>
            <img onClick={()=>{navigate(`/doctors/${item._id}`);scrollTo(0,0)}}
              className="w-60 cursor-pointer rounded-lg hover:scale-110 transition-all ease-in-out duration-500"
              src={item.image}
            />
            <div className="px-1 py-4">
              <p className="cursor-pointer font-semibold text-xl hover:text-secondary">
                {item.name}
              </p>
              <p className="text-[13px]">{item.shortDegree}</p>
              <p className="text-sm font-semibold mt-1">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;
