import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaReact, FaWhatsapp } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Contact Me
          </h2>
          <div className="flex gap-4">
          <a href="https://www.facebook.com/JairamOfficail/">
          <span h className="bannerIcon">
            <FaFacebookF />
          </span>
          </a>
           <a href=" https://wa.me/+923033355927">
          <span className="bannerIcon">
            <FaWhatsapp />
          </span>
          </a>
          <a href="https://www.linkedin.com/in/jai-kumar110/">
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
          </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media