import React, { useState, useEffect, useRef } from "react";
import { navigation } from "../constants/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import Logo from "/assets/images/HashlogoGTTM.jpg";

function Header_Section() {
  const [opened, setOpened] = useState(false);
  const [link, setLink] = useState("#home");

  useEffect(() => {
    // Scroll to the top of the page when it is initially loaded
    window.scrollTo(0, 0);

    // Set the active link based on the current URL hash value
    const currentHash = window.location.hash;
    if (currentHash && navigation.some((item) => item.link === currentHash)) {
      setLink(currentHash);
    }
  }, []);
  useEffect(() => {
    // Set the active link based on the current URL hash value
    const currentHash = window.location.hash;
    if (currentHash && navigation.some((item) => item.link === currentHash)) {
      setLink(currentHash);
    }
  }, []);
  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1, // Adds stagger effect to children
        delayChildren: 0.2, // Adds a delay before animation starts
      },
    },
    closed: {
      opacity: 0,
      y: 50, // Moves menu items 50px down
    },
  };

  const menuItemVariants = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: 50,
    },
  };
  useEffect(() => {
    const currentHash = window.location.hash;
    if (currentHash) {
      // Remove the hash part from the URL
      window.history.replaceState(null, null, window.location.pathname);
    }
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setLink(`#${entry.target.id}`);
        if (currentHash !== window.location.hash) {
          history.pushState(null, null, currentHash);
        }
      }
    });
  };
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Create refs for each navigation item
    sectionRefs.current = navigation.map(() => React.createRef());
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "0px",
      threshold: 0.5,
    });

    sectionRefs.current.forEach((ref, index) => {
      const currentHash = navigation[index].link;
      const targetElement = document.getElementById(currentHash.substring(1));
      if (targetElement) {
        observer.observe(targetElement);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavLinkClick = (event, link) => {
    event.preventDefault();
    setLink(link);
    const section = document.querySelector(link);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden bg-primary z-[1000] sticky    top-0 lg:w-full w-screen flex flex-col justify-center items-center">
      <section className="lg:py-8 py-3  lg:px-0 px-5 flex flex-row justify-between items-center w-full max-w-6xl">
        <div className="left">
          <a href="#">
            <img src={Logo} className="h-16 w-auto" alt="" />
          </a>
        </div>
        <button onClick={() => setOpened(true)} className="block lg:hidden">
          <FiMenu size={32} />
        </button>
        <nav className="hidden lg:flex flex-row justify-center  items-center gap-6">
          {navigation.map((item, index) => (
            <a
              key={index}
              href={item.link}
              onClick={(event) => handleNavLinkClick(event, item.link)}
              className={
                link === item.link
                  ? " font-semibold  text-xl px-1 text-blue-400 rounded-lg py-2"
                  : "  px-1 text-xl hover:text-blue-400 font-semibold rounded-xl py-2"
              }
            >
              <h2>{item.title}</h2>
            </a>
          ))}
          <button
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            className="transition-all group hover:bg-[rgba(255,255,255,0.2)] border-2 p-3 px-8 rounded-full"
          >
            <a target="_blank" href="https://pancakeswap.finance/swap?outputCurrency=0xa24259b154f6199F881c99fCA26D7B3E8F8f2711">
            <h2 className="bg-transparent ">Buy Now</h2>
            </a>
          </button>
        </nav>
      </section>
      {/* mobile nav */}
      <motion.nav
        className={`lg:hidden ${
          opened ? "flex" : "hidden"
        } flex-col transition-all fixed z-20 h-screen top-0 bg-primary backdrop-blur-xl w-full overflow-hidden justify-center items-center gap-10`}
        variants={menuVariants}
        initial="closed"
        animate={opened ? "open" : "closed"}
      >
        <button onClick={() => setOpened(false)} className="block lg:hidden">
          <FiX size={32} />
        </button>
        {navigation.map((item, index) => (
          <motion.a
            onClick={() => setOpened(false)}
            key={index}
            href={item.link}
            variants={menuItemVariants}
          >
            <h2
              className={` ${
                link === item.link
                  ? " font-semibold  text-sm px-2 text-blue-400 rounded-lg py-3"
                  : "  px-2 text-sm font-semibold rounded-xl py-3"
              }`}
            >
              {item.title}
            </h2>
          </motion.a>
        ))}
        <button className="transition-all group hover:bg-[rgba(255,255,255,0.2)] border-2 p-3 px-8 rounded-full">
          <h1 className="bg-transparent text-[10px]">buy now</h1>
        </button>
      </motion.nav>
      <div className="w-full h-[1px] shadow-xl bg-[rgba(255,255,255,0.2)]" />
    </section>
  );
}

export default Header_Section;
