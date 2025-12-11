import React from "react";
import { img } from "../constants";

const Proud = () => {
  return (
    <div>
      <div className="lg:p-[70px_90px] md:p-[20px_50px] sm:p-[15px_30px] p-[10px_24px] lg:flex justify-between">
        <div className="grid gap-5 pb-[50px]">
          <h1 className=" font-bold md:leading-12 md:text-[40px] text-[30px] md:w-[100px]">
            We’re compatible. Proud
          </h1>
          <p className="opacity-75 text-[18px] lg:w-[230px] font-light">
            Stream Plex from just about any phone, tablet, smart TV, gaming
            consoles, or PC.
          </p>
          <img
            className="w-[300px]"
            src="https://www.plex.tv/wp-content/uploads/2020/03/avod-device-icons-1.png"
            alt=""
          />
          <button className="button">Stream Free Now</button>
        </div>
        <img
          className="lg:w-[60%]"
          src="https://www.plex.tv/wp-content/uploads/2025/03/watch-free-compatible-devices-1440x858.png"
          alt=""
        />
      </div>
      <div className="bg-[#f9f9f9] pt-20">
        <h2 className="md:text-4xl sm:text-3xl text-[25px] font-bold text-center">
          Proud Partners with:
        </h2>

        <div className="lg:flex md:grid md:grid-cols-3 p-[20px_50px] md:p-[50px_150px] md:gap-6 grid grid-cols-3 gap-6 justify-between">
          {img.map((i) => (
            <img className="lg:w-[100px] md:w-[200px]" src={i.img} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proud;
