import React from "react";
import mint from "/assets/images/mint.webp";
function Tokenomics_Section() {
  return (
    <section
      id="tokenomics"
      className="w-full flex flex-col justify-center items-center  px-5 lg:px-0 max-w-6xl"
    >
      <div className="pb-24">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          className="text-2xl pt-6 pb-12 lg:text-6xl font-semibold text-center"
        >
          Tokenomics
        </h1>
      </div>

      <section className=" w-full  lg:px-10 gap-x-20 lg:max-w-6xl flex flex-col justify-center lg:grid lg:grid-cols-2 ">
        <div className="w-full h-fit lg:h-[30rem] flex flex-col justify-center items-center ">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            className="text-md lg:text-2xl text-center  !leading-loose"
          >
            Token Supply: 888,888,888,888,888
          </h1>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            className="flex shadow-xl shadow-black p-8 py-5 my-4 flex-row justify-center items-center gap-10 bg-[#1f1f1f] border-2  rounded-tr-[50px]  rounded-bl-[50px]"
          >
            <p className="text-xl">
            Public sale – 35% <br/>
            Marketing – 12% <br/>
            Liquidity CEX / DEX – 10% <br/>
            Public airdrop – 10% <br/>
            Community – 10% <br/>
            Staking – 5% <br/>
            Team (locked vesting month 12-24) – 5% <br/>
            Whitelist private sale – 5% <br/>
            Charitable causes – 5% <br/>
            Vesting 5 years – 3%
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay="500"
          className="mt-5 lg:mt-0  w-full hidden lg:flex flex-col justify-center items-center text-black"
        >
          <img
            src={mint}
            className="fancy_border object-cover w-auto h-full"
            alt="hero image"
          />
        </div>
      </section>
    </section>
  );
}

export default Tokenomics_Section;
