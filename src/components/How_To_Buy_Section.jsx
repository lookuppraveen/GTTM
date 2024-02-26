import React from "react";
import { how_to_buy } from "../constants/howtobuy";
import hero_img from "/assets/images/hero_img.png";
import Logo from "/assets/images/HashtagGTTM.png";

function How_To_Buy_Section() {
  return (
    <section id="buy" className="w-full my-20 max-w-6xl">
      <div className="pb-24">
        <h1
          className="text-3xl pt-6 pb-12 font-semibold lg:text-6xl text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          How to buy
        </h1>
      </div>
      <div className="px-5 flex flex-col justify-start items-start gap-10 lg:px-0">
        {how_to_buy.map((item, index) => (
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            className="flex shadow-xl shadow-black p-5 py-10  flex-col lg:flex-row justify-center items-center gap-10 bg-[#1f1f1f] border-2  rounded-tr-[50px]  rounded-bl-[50px]"
            key={index}
          >
            <img src={item.logo} alt="how to image" />
            <div>
              <h1 className="text-2xl">{item.title}</h1>
              <p className="text-xl pt-5 font-light"> {item.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <section className="py-24 w-full px-5 lg:px-10 gap-x-20 gap-y-10 lg:gap-y-0 max-w-6xl grid lg:grid-cols-2 ">
        <img
          className="h-[300px] w-auto object-cover lg:h-[500px] lg:w-full rounded-lg"
          src={Logo} 
          alt=""
        />
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
          className="w-full flex flex-col justify-center items-center text-black"
        >
          <img src={hero_img} className="w-auto h-full" alt="hero image" />
        </div>
      </section>
    </section>
  );
}

export default How_To_Buy_Section;
