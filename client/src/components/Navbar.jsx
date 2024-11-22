import logo from "../assets/logo.png";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import { Link } from "react-router-dom";
import responsiveLogo from "../assets/responsiveNavbarLogo.png";
import { IoIosClose } from "react-icons/io";

function Navbar() {
  const [open, setOpen] = useState("");
  return (
    <>
      <div className="flex items-center justify-between px-10 py-2 mx-2 lg:mx-10 border-[#B925FF] border-2 rounded-full fixed left-0 right-0 top-8 z-50 bg-[#B925FF] bg-opacity-20 backdrop-blur-md">
        <img src={logo} alt="" className="w-8" />
        <div
          className={`${
            open ? "flex" : "hidden"
          } lg:flex flex-col max-lg:absolute top-[-34px] right-[-10px] left-36 justify-start gap-8 bg-[#0C0012] lg:bg-transparent max-lg:pt-16 z-50 max-lg:h-screen`}
        >
          <IoIosClose
            className="text-3xl absolute top-3 left-3 lg:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          />
          <div className="lg:hidden flex flex-col justify-center items-center text-center">
            <img src={responsiveLogo} alt="" />
            <h1 className="text-3xl font-medium">Adwave.</h1>
            <p className="text-white text-opacity-50">Be special</p>
          </div>
          <ul
            className={`flex flex-col lg:flex-row lg:gap-8 items-end text-end text-lg`}
          >
            <Link
              to={"/"}
              className="text-[#FFFFFF] lg:opacity-60 hover:opacity-100 duration-200 max-lg:py-4 max-lg:px-6 max-lg:w-full hover:max-lg:bg-[#B925FF] hover:max-lg:bg-opacity-20 hover:max-lg:border-t-2 hover:max-lg:border-b-2 hover:max-lg:border-[#B925FF]"
            >
              <li>Home</li>
            </Link>
            <Link
              to={"/services"}
              className="text-[#FFFFFF] lg:opacity-60 hover:opacity-100 duration-200 max-lg:py-4 max-lg:px-6 max-lg:w-full hover:max-lg:bg-[#B925FF] hover:max-lg:bg-opacity-20 hover:max-lg:border-t-2 hover:max-lg:border-b-2 hover:max-lg:border-[#B925FF]"
            >
              <li>Services</li>
            </Link>
            <Link
              to={"/contact"}
              className="text-[#FFFFFF] lg:opacity-60 hover:opacity-100 duration-200 max-lg:py-4 max-lg:px-6 max-lg:w-full hover:max-lg:bg-[#B925FF] hover:max-lg:bg-opacity-20 hover:max-lg:border-t-2 hover:max-lg:border-b-2 hover:max-lg:border-[#B925FF]"
            >
              <li>Contact</li>
            </Link>
            <Link
              to={"/about"}
              className="text-[#FFFFFF] lg:opacity-60 hover:opacity-100 duration-200 max-lg:py-4 max-lg:px-6 max-lg:w-full hover:max-lg:bg-[#B925FF] hover:max-lg:bg-opacity-20 hover:max-lg:border-t-2 hover:max-lg:border-b-2 hover:max-lg:border-[#B925FF]"
            >
              <li>About Us</li>
            </Link>
          </ul>
        </div>
        <div className="lg:hidden">
          <TiThMenu
            className="text-3xl"
            onClick={() => {
              setOpen(!open);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
