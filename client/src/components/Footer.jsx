import logo from "../assets/logo.png";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="flex flex-col max-md:items-center max-md:text-center gap-10 md:gap-28 bg-black py-10 md:py-28 px-16 border-t-4 border-[#BF36FF] mt-44">
        <div className="grid grid-cols-1 md:grid-cols-4 max-md:gap-6">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl">Home</h1>
            <ul className="flex flex-col gap-2">
              <li className="text-white text-opacity-50 text-lg cursor-pointer hover:text-opacity-100 duration-300">
                Qui Sommes-nous
              </li>
              <li className="text-white text-opacity-50 text-lg cursor-pointer hover:text-opacity-100 duration-300">
                Ce Que Nous Faisons
              </li>
              <li className="text-white text-opacity-50 text-lg cursor-pointer hover:text-opacity-100 duration-300">
                Nos Services
              </li>
              <li className="text-white text-opacity-50 text-lg cursor-pointer hover:text-opacity-100 duration-300">
                Notre Plan
              </li>
              <li className="text-white text-opacity-50 text-lg cursor-pointer hover:text-opacity-100 duration-300">
                Notre Travail
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl">Services</h1>
            <ul className="flex flex-col gap-2">
              <li className="text-white text-opacity-50 text-lg cursor-pointer hover:text-opacity-100 duration-300">
                Digital Marketing
              </li>
              <li className="text-white text-opacity-50 text-lg cursor-pointer hover:text-opacity-100 duration-300">
                Développement
              </li>
              <li className="text-white text-opacity-50 text-lg cursor-pointer hover:text-opacity-100 duration-300">
                Designe & Branding
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl">Contact</h1>
            <ul className="flex flex-col gap-2">
              <li className="text-white text-opacity-50 text-lg cursor-pointer hover:text-opacity-100 duration-300">
                Contact
              </li>
              <li className="text-white text-opacity-50 text-lg cursor-pointer hover:text-opacity-100 duration-300">
                Contactez Nous
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl">About Us</h1>
            <ul className="flex flex-col gap-2">
              <li className="text-white text-opacity-50 text-lg cursor-pointer hover:text-opacity-100 duration-300">
                Qui Sommes-nous
              </li>
              <li className="text-white text-opacity-50 text-lg cursor-pointer hover:text-opacity-100 duration-300">
                Notre Equipe
              </li>
              <li className="text-white text-opacity-50 text-lg cursor-pointer hover:text-opacity-100 duration-300">
                Contactez Nous
              </li>
              <li className="text-white text-opacity-50 text-lg cursor-pointer hover:text-opacity-100 duration-300">
                Location
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-56 items-center">
          <div className="flex flex-col max-md:items-center gap-10">
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
                z_houam@adwave.agency
              </li>
              <li className="text-lg text-white text-opacity-50">0656569260</li>
              <li className="text-lg text-white text-opacity-50">0540487930</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center text-center">
          <div className="flex gap-6 text-4xl">
            <PiInstagramLogoFill className="text-white text-opacity-50 cursor-pointer hover:scale-125 duration-300" />
            <FaXTwitter className="text-white text-opacity-50 cursor-pointer hover:scale-125 duration-300" />
            <FaYoutube className="text-white text-opacity-50 cursor-pointer hover:scale-125 duration-300" />
            <BsLinkedin className="text-white text-opacity-50 cursor-pointer hover:scale-125 duration-300" />
            <FaFacebook className="text-white text-opacity-50 cursor-pointer hover:scale-125 duration-300" />
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
