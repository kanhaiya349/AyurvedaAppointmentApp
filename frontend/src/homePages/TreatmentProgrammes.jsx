import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";

function TreatmentProgrammes() {
  return (
    <div className="mb-10">
      <h4 className="text-[25px] font-bold mb-8 text-secondary">
        Treatment Programmes
      </h4>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true} // ✅ Enables infinite loop
          autoplay={{
            delay: 2000, // ✅ Slide will change every 2 seconds
            disableOnInteraction: false, // ✅ Keeps autoplay even after user interacts
          }}
        >
          <SwiperSlide>
            <div className="bg-[#DEE2FF] h-[300px] w-full">a</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#DEE2FF] h-[300px] w-full">a</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#DEE2FF] h-[300px] w-full">a</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#DEE2FF] h-[300px] w-full">a</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default TreatmentProgrammes;
