import React from "react";
import cmc from "/assets/images/cmc.webp";
import dextools from "/assets/images/dextools.webp";
import bscscan from "/assets/images/bscscan.png";
import pancake from "/assets/images/pancake.webp";
import Logo from "/assets/images/hero_img.png";
import coins from "../constants/coins";
import hero_img from "/assets/images/HashtagGTTM.png";
import tiktok from "/assets/images/tiktok.png";
import instagram from "/assets/images/instagram.png";
import xlogoWhite from "/assets/images/x-logo-white.webp";

const links = [
  {
    name: tiktok,
    url: "https://www.tiktok.com/@g0ingt0them00n?lang=en"
  },
  {
    name: instagram,
    url: "https://www.instagram.com/g0ingt0them00n/"
  },
  {
    name: dextools,
    url: "https://www.dextools.io/app/en/bnb/pair-explorer/0xd69512d1f9e96b2691d69e7c7d6ee363edab7c47"
  },
  {
    name: bscscan,
    url: "https://bscscan.com/token/0xa24259b154f6199f881c99fca26d7b3e8f8f2711"
  },
  {
    name: cmc,
    url: "https://coinmarketcap.com/dexscan/bsc/0xd69512d1f9e96b2691d69e7c7d6ee363edab7c47/"
  },
  {
    name: pancake,
    url: "https://pancakeswap.finance/swap?outputCurrency=0xa24259b154f6199F881c99fCA26D7B3E8F8f2711"
  },
  {
    name: xlogoWhite,
    url: "https://twitter.com/G0ingT0TheM00n"
  },
];

function Banner_Section() {
  return (
    <section className=" w-full flex flex-col justify-center items-center ">
      <section
        id="home"
        className="w-full px-5 herobg bg-transparent lg:px-10 max-w-6xl py-32 lg:py-6"
      >
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          className="text-2xl pt-6 pb-12 lg:text-3xl font-semibold"
        >
          The Hottest Memcoin in 2024
        </h2>
        <section className="gap-x-20 flex lg:flex-row flex-col justify-center items-center pb-10 ">
          <div className="w-full">

            <a href="#">
              <img className="h-32 w-auto" src={Logo} alt="" />
            </a>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              className="text-2xl mt-5 font-light lg:pr-20"
            >
              The most impactful memecoin in existence. Come along for the journey, we're going to the moon!
            </p>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              className="flex flex-row  flex-wrap lg:flex-nowrap w-fit justify-center lg:justify-start mt-10 items-center gap-5"
            >
              {links.map((item, index) => (
                <a href={item.url} target="_blank">
                  <img src={item.name} className="w-8 lg:w-10" key={index} />
                </a>
              ))}
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-delay="500"
            className=" sm:w-full  hidden lg:flex flex-col justify-start items-center"
          >
            <img
              src={hero_img}
              className=" object-contain   h-full w-auto"
              alt=" hero image"
            />
          </div>
        </section>
        <br></br>
        <div>
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            className="text-2xl pt-6 pb-12 lg:text-2xl font-semibold "
          >
            Vote for #GTTM future exchange listing
          </h2>
        </div>

        <div className="grid gap-5 mt-5 lg:mt-0 grid-cols-1 lg:grid-cols-3">
          {coins.map((coin, index) => (
            <button
              key={index}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 10}
              data-aos-once="true"
              className="flex flex-row  bg-[rgba(19,19,19,0.2)] backdrop-blur-xl justify-between items-center transition-all group hover:bg-[rgba(255,255,255,0.2)] border-[rgba(255,255,255,0.2)] border-[0.2px] p-3 px-8 rounded-full"
            >
              <h1 className="bg-transparent ">{coin.title}</h1>
              <img src={coin.logo} alt="coin" className="bg-transparent" />
            </button>
          ))}
        </div>
        <div className="w-full lg:hidden lg:mt-10 mt-24 flex flex-col justify-center items-center">
          <img
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-delay="500"
            src={hero_img}
            className=" object-contain lg:hidden block lg:w-auto sm:h-full  h-96 w-96 mx-auto mt-10 "
            alt=" hero image"
          />
        </div>
      </section>
    </section>
  );
}

export default Banner_Section;
