import React from "react";
import telegram from "/assets/images/telgrrgrgrgr.webp";
import tiktok from "/assets/images/tiktok.png";
import instagram from "/assets/images/instagram.png";
import xlogoWhite from "/assets/images/x-logo-white.webp";
import Logo from "/assets/images/HashtagGTTM.png";

function Footer_Section() {
  return (
    <section className="w-full  flex flex-col lg:mt-20 justify-center items-center">
      <section className="lg:px-0 px-5 flex flex-col w-full max-w-6xl justify-center items-center">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          className="text-3xl font-semibold lg:text-6xl text-center"
        >
          Contact
        </h1>
        <a href="#">
          <img className="h-24 w-auto mt-12" src={Logo} alt="" />
        </a>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          className="flex flex-row justify-center items-center gap-10 pt-20"
        >
          <a href="https://www.tiktok.com/@g0ingt0them00n?lang=en" target="_blank">
            <img className="w-8 lg:w-10" src={tiktok} alt="tiktok" />
          </a>
          <a href="https://www.instagram.com/g0ingt0them00n/" target="_blank">
            <img className="w-8 lg:w-10" src={instagram} alt="instagram" />
          </a>
          <a href="https://twitter.com/G0ingT0TheM00n" target="_blank">
            <img className="w-8 lg:w-10" src={xlogoWhite} alt="X" />
          </a>
        </div>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          className="text-center text-xl font-light mt-20 max-w-4xl"
        >
          #gttm coin has no association with other memecoins and is a standalone project. This token is simply for everyone that wants to go to the moon.
          <br />
          <br />
          #gttm is a memecoin that carries no inherent value or promise of financial gains. It lacks an official team or development plan, rendering the coin purely for amusement and without any practical utility.
        </p>
      </section>
      {/* <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        className="text-center mt-[200px] text-sm  py-10 bg-[#090123] w-full"
      >
      </div> */}
    </section>
  );
}

export default Footer_Section;
