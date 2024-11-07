import logo from "../assets/logo.png";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="flex flex-col max-md:items-center max-md:text-center gap-10 md:gap-28 bg-black py-10 md:py-28 px-16 border-t-4 border-[#BF36FF] mt-20 md:mt-44">
        <div className="grid grid-cols-1 md:grid-cols-4 max-md:gap-6">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl">About Us</h1>
            <ul className="flex flex-col gap-2">
              <li className="text-white text-opacity-50 text-lg">About Us</li>
              <li className="text-white text-opacity-50 text-lg">About Us</li>
              <li className="text-white text-opacity-50 text-lg">About Us</li>
              <li className="text-white text-opacity-50 text-lg">About Us</li>
              <li className="text-white text-opacity-50 text-lg">About Us</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl">About Us</h1>
            <ul className="flex flex-col gap-2">
              <li className="text-white text-opacity-50 text-lg">About Us</li>
              <li className="text-white text-opacity-50 text-lg">About Us</li>
              <li className="text-white text-opacity-50 text-lg">About Us</li>
              <li className="text-white text-opacity-50 text-lg">About Us</li>
              <li className="text-white text-opacity-50 text-lg">About Us</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl">About Us</h1>
            <ul className="flex flex-col gap-2">
              <li className="text-white text-opacity-50 text-lg">About Us</li>
              <li className="text-white text-opacity-50 text-lg">About Us</li>
              <li className="text-white text-opacity-50 text-lg">About Us</li>
              <li className="text-white text-opacity-50 text-lg">About Us</li>
              <li className="text-white text-opacity-50 text-lg">About Us</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl">About Us</h1>
            <ul className="flex flex-col gap-2">
              <li className="text-white text-opacity-50 text-lg">About Us</li>
              <li className="text-white text-opacity-50 text-lg">About Us</li>
              <li className="text-white text-opacity-50 text-lg">About Us</li>
              <li className="text-white text-opacity-50 text-lg">About Us</li>
              <li className="text-white text-opacity-50 text-lg">About Us</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-56 items-center">
          <div className="flex flex-col items-center gap-10">
            <img src={logo} alt="" className="w-[84.18px] h-[77.74px]" />
            <p className="text-lg">
              Bring Your Ideas To Life With Custom Websites That Combine
              Stunning Design With Seamless Functionality, Ensuring A
              User-Friendly And Optimized Online Presence.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-medium">Contact</h1>
            <ul className="flex flex-col gap-2">
              <li className="text-lg text-white text-opacity-50">
                Contact@Adwave.Com
              </li>
              <li className="text-lg text-white text-opacity-50">
                Contact@Adwave.Com
              </li>
              <li className="text-lg text-white text-opacity-50">
                Contact@Adwave.Com
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center text-center">
          <div className="flex gap-6 text-4xl">
            <PiInstagramLogoFill className="text-white text-opacity-50 cursor-pointer"/>
            <FaXTwitter className="text-white text-opacity-50 cursor-pointer"/>
            <FaYoutube className="text-white text-opacity-50 cursor-pointer"/>
            <BsLinkedin className="text-white text-opacity-50 cursor-pointer"/>
            <FaFacebook className="text-white text-opacity-50 cursor-pointer"/>
          </div>
          <div>
            <p className="text-white text-opacity-50">
              Made With Love By Amin Harroudj .All Rights Reserved To{" "}
              <span>ADWAVE.</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
