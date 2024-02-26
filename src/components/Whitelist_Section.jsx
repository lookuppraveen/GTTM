import React from "react";
import Logo from "/assets/images/hero_img.png";

function Whitelist_Section() {
  return (
    <section
      id="whitelist"
      className="py-5 lg:py-20 w-full px-5 lg:px-10 gap-x-20 max-w-6xl grid grid-cols-1 lg:grid-cols-2 "
    >
      <div className="w-full">
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          className="text-2xl pt-6 pb-12 lg:text-2xl font-semibold "
        >
          Whitelist Private Sale
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          className="text-xl lg:text-2xl w-full mt-10 font-light"
        >
          To celebrate the launch of #GTTM we’re inviting our community to join
          the white list and be one of the lucky ones at take off and be in with
          the chance of getting #GTTM. We will be releasing 5% of the #GTTM tokens
          over the next 4 weeks starting every Monday. To be in with the chance of
          getting #GTTM early  in our white list private sale just register here.
          {/* ‘sorry we have already taken off! you have missed out on the white list
           private sales but its not too late you can still get on board and get #GTTM here’
          (this hyperlinks back to the ‘buy now’ button.) */}
          <br/>
          <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          className="text-1xl pt-3 pb-6 lg:text-1xl font-semibold "
        >
          Whitelist Private Sale – Completed 26th February 2024
          </h2>
        </p>
        <h6></h6>
      </div>
      <img
        className="h-[300px] w-auto object-cover lg:h-[500px] lg:w-full rounded-lg"
        src={Logo}
        alt=""
      />
    </section>
  );
}

export default Whitelist_Section;
