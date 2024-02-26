import React from "react";
import Logo from "/assets/images/hero_img.png";
function Back_Story_Section() {
  return (
    <section
      id="about"
      className="py-5 lg:py-20 w-full px-5 lg:px-10 gap-x-20 max-w-6xl grid grid-cols-1 lg:grid-cols-2 "
    >
      <img
        className="h-[300px] w-auto object-cover lg:h-[500px] lg:w-full rounded-lg"
        src={Logo}
        alt=""
      />
      <div className="w-full">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          className="text-3xl pt-6 pb-12 lg:text-5xl font-semibold "
        >
          Back Story
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          className="text-xl lg:text-2xl w-full mt-10 font-light"
        >
          "GTTM: The Moon Odyssey" portrays Earth's dire state, leading to a visionary mission to the Moon.
          "Going to the Moon" GTTM, a memecoin, democratizes space travel, granting token holders passage to a
          self-sustaining Moon Base.
          <br />
          <br />
          This new home, away from Earth's collapse, promises a fresh start with housing, jobs, and a focus on sustainability.
          With 5% of tokens given to charity, GTTM embodies hope, making the lunar journey not just a rescue mission but a bold
          leap towards a united, hopeful future for humanity.
        </p>
      </div>
    </section>
  );
}

export default Back_Story_Section;
