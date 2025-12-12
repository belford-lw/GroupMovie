import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { img } from "../constants/index";

const Proud = () => {

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <div>

      {/* FIRST SECTION */}
      <div 
        className="lg:p-[70px_90px] md:p-[20px_50px] sm:p-[15px_30px] p-[10px_24px] lg:flex justify-between"
        data-aos="fade-up"
      >
        <div className="grid gap-5 pb-[50px]">
          <h1 
            className="font-bold md:leading-12 md:text-[40px] text-[30px] md:w-[100px]"
            data-aos="fade-right"
          >
            We’re compatible. Proud
          </h1>

          <p 
            className="opacity-75 text-[18px] lg:w-[230px] font-light"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            Stream Plex from just about any phone, tablet, smart TV, gaming
            consoles, or PC.
          </p>

          <img
            className="w-[300px]"
            src="https://www.plex.tv/wp-content/uploads/2020/03/avod-device-icons-1.png"
            alt=""
            data-aos="zoom-in"
          />

          <button 
            className="button"
            data-aos="zoom-in-up"
          >
            Stream Free Now
          </button>
        </div>

        <img
          className="lg:w-[60%]"
          src="https://www.plex.tv/wp-content/uploads/2025/03/watch-free-compatible-devices-1440x858.png"
          alt=""
          data-aos="fade-left"
        />
      </div>

      <div className="bg-[#f9f9f9] pt-20">
        <h2 
          className="md:text-4xl sm:text-3xl text-[25px] font-bold text-center"
          data-aos="fade-up"
        >
          Proud Partners with:
        </h2>

        <div className="lg:flex md:grid md:grid-cols-3 p-[20px_50px] md:p-[50px_150px] md:gap-6 grid grid-cols-3 gap-6 justify-between">
          {img.map((i, index) => (
            <img
              key={index}
              className="lg:w-[100px] md:w-[200px]"
              src={i.img}
              alt=""
              data-aos="zoom-in"
              data-aos-delay={index * 120}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proud;
