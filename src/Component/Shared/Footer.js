import React from "react";
import { FaGooglePlus } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { MdLocalPhone, MdMarkEmailRead } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialSkype,
  TiSocialTwitter,
  TiSocialVimeo,
  TiSocialYoutube
} from "react-icons/ti";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="font-mono bg-slate-200 text-black pt-10">
      <div className="md:flex justify-between mx-28 items-center">
        <div className="">
          <h1 className="text-xl font-semibold text-center border-b-2 pb-3">
            Contact us
          </h1>
          <p className="text-2xl font-bold font-serif text-center mt-5">
          AutoParts
          </p>
          <p className="flex items-center space-x-2">
            <span>
              <ImLocation2 />
            </span>
            <span>
              Barmis Market, cox's Bazar, <br /> Bangladesh
            </span>
          </p>
          <p className="flex items-center space-x-2">
            <span>
              <MdLocalPhone />
            </span>
            <span>01993378477</span>
          </p>
          <p className="flex items-center space-x-2">
            <span>
              <MdMarkEmailRead />
            </span>
            <span>saddamhossain@gmail.com</span>
          </p>
        </div>
        <div className="mt-5">
          <h1 className="text-center text-2xl font-bold mb-5">
            Follow us with social
          </h1>
          <div className="flex justify-center space-x-4 text-2xl text-blue-600">
            <p>
              <TiSocialFacebook />
            </p>
            <p>
              <TiSocialSkype />
            </p>
            <p>
              <TiSocialTwitter />
            </p>
            <p>
              <TiSocialYoutube />
            </p>
            <p>
              <TiSocialLinkedin />
            </p>
            <p>
              <TiSocialVimeo />
            </p>
            <p>
              <FaGooglePlus />
            </p>
          </div>
        </div>
      </div>
      <p className="text-center py-6">
        <small>copyright &#169; {year}</small>
      </p>
    </div>
  );
};

export default Footer;
