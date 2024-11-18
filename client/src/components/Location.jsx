import locationImg from "../assets/location.png";
import logo from "../assets/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

function Location() {
  return (
    <>
      <div className="flex items-center justify-center max-md:text-center mx-2 md:mx-20 gap-10 md:gap-36 mt-24 md:mt-44 max-md:flex-col-reverse">
        <motion.div
          whileHover={{
            y: -30,
            scale: 1.1,
          }}
          className="md:ml-10 flex flex-col gap-4 justify-center items-center text-xl"
        >
          <img src={locationImg} alt="" className="w-[300px] md:w-[600px]" />
          <p>Location : Borj Kiffan-Alger</p>
        </motion.div>
        <div className="flex flex-col gap-10 max-md:text-center max-md:justify-center max-md:items-center">
          <div className="flex max-md:items-center flex-col gap-4">
            <div className="flex items-center gap-6 md:w-[84.18px] md:h-[77.74px]">
              <img src={logo} alt="" />
              <h1 className="text-5xl font-medium">Adwave.</h1>
            </div>
            <p className="text-lg text-white text-opacity-50">
              Bring Your Ideas To Life With Custom Websites That Combine
              Stunning Design With Seamless Fuctionality, Ensuring A
              User-Friendly And Optimized Online Presence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4 justify-center items-start">
              <div className="bg-[#AB1DEE] p-2 rounded-full">
                <FaPhoneAlt className="text-2xl" />
              </div>
              <div>
                <p>+213 655 819 211</p>
                <p>+213 656 569 260</p>
                <p>+213 540 487 930</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-center items-start">
              <div className="bg-[#AB1DEE] p-2 rounded-full">
                <IoMail className="text-2xl" />
              </div>
              <p>Contact@adwave.agency</p>
            </div>
            <div className="flex flex-col gap-4 justify-center items-start">
              <h1 className="text-2xl">Follow us</h1>
              <div className="flex gap-4">
                <div className="bg-[#AB1DEE] bg-opacity-50 cursor-pointer p-2 rounded-full hover:bg-[#B925FF] duration-300 hover:scale-125">
                  <AiFillInstagram className="text-xl" />
                </div>
                <div className="bg-[#AB1DEE] bg-opacity-50 cursor-pointer p-2 rounded-full hover:bg-[#B925FF] duration-300 hover:scale-125">
                  <FaFacebook className="text-xl" />
                </div>
                <div className="bg-[#AB1DEE] bg-opacity-50 cursor-pointer p-2 rounded-full hover:bg-[#B925FF] duration-300 hover:scale-125">
                  <BsTwitterX className="text-xl" />
                </div>
                <div className="bg-[#AB1DEE] bg-opacity-50 cursor-pointer p-2 rounded-full hover:bg-[#B925FF] duration-300 hover:scale-125">
                  <FaLinkedin className="text-xl" />
                </div>
                <div className="bg-[#AB1DEE] bg-opacity-50 cursor-pointer p-2 rounded-full hover:bg-[#B925FF] duration-300 hover:scale-125">
                  <FaTiktok className="text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Location;
