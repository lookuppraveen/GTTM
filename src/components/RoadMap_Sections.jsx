import React from "react";
import free from "/assets/images/free.webp";
import free2 from "/assets/images/free2.webp";
function RoadMap_Sections() {
  return (
    <section
      id="roadmap"
      className="py-40  lg:py-24  w-full px-5 lg:px-10 lg:gap-x-20 max-w-6xl flex flex-col lg:flex-row justify-center items-center gap-10 "
    >
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        data-aos-delay="500"
        className="  w-full flex flex-col justify-center items-center text-black"
      >
        <img
          src={free}
          className="object-cover lg:h-full w-auto h-[15rem]"
          alt="hero image"
        />
      </div>
      <div className="w-full lg:h-[30rem] flex flex-col justify-center items-center ">
        <div className="pb-10 w-full ">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            className="text-2xl pt-6 pb-12 font-semibold lg:text-6xl text-center"
          >
            roadmap
          </h1>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          className="w-full flex font-light shadow-xl shadow-black p-8 py-10 my-4 flex-row justify-center items-center gap-10 bg-[#1f1f1f] border-2  rounded-tr-[50px]  rounded-bl-[50px]"
        >
          <p className="text-xl">
            Launch sequence to the moon!! <br />
            Stage 1 – mission control we have lift off <br />
            Stage 2 – we’re in the clouds<br />
            stage 3 – we are leaving earth’s atmosphere<br />
            stage 4 – we’re in space<br />
            stage 5 – we’re going to the moon!<br />
          </p>
        </div>
      </div>
      <div className="  w-full flex flex-col justify-center items-center text-black">
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay="500"
          src={free2}
          className="object-cover w-auto lg:h-full h-[15rem]"
          alt="hero image"
        />
      </div>
    </section>
  );
}

export default RoadMap_Sections;
