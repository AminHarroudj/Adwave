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
      <div className="flex items-center justify-between px-10 py-2 mx-2 md:mx-10 border-[#B925FF] border-2 rounded-full fixed left-0 right-0 top-8 z-50 bg-[#B925FF] bg-opacity-20">
        <img src={logo} alt="" className="w-8" />
        <div
          className={`${
            open ? "flex" : "hidden"
          } md:flex flex-col max-md:absolute top-[-34px] right-[-10px] left-36 justify-start gap-8 bg-[#0C0012] md:bg-transparent max-md:pt-16 z-50 max-md:h-screen`}
        >
          <IoIosClose className="text-3xl absolute top-3 left-3" onClick={() => {
              setOpen(!open);
            }}/>
          <div className="md:hidden flex flex-col justify-center items-center text-center">
            <img src={responsiveLogo} alt="" />
            <h1 className="text-3xl font-medium">Adwave.</h1>
            <p className="text-white text-opacity-50">Be special</p>
          </div>
          <ul
            className={`flex flex-col md:flex-row md:gap-8 items-end text-end text-lg`}
          >
            <Link
              to={"/"}
              className="text-[#FFFFFF] md:opacity-60 hover:opacity-100 duration-200 max-md:py-4 max-md:px-6 max-md:w-full hover:max-md:bg-[#B925FF] hover:max-md:bg-opacity-20 hover:max-md:border-t-2 hover:max-md:border-b-2 hover:max-md:border-[#B925FF]"
            >
              <li>Home</li>
            </Link>
            <Link
              to={"/services"}
              className="text-[#FFFFFF] md:opacity-60 hover:opacity-100 duration-200 max-md:py-4 max-md:px-6 max-md:w-full hover:max-md:bg-[#B925FF] hover:max-md:bg-opacity-20 hover:max-md:border-t-2 hover:max-md:border-b-2 hover:max-md:border-[#B925FF]"
            >
              <li>Services</li>
            </Link>
            <Link
              to={"/contact"}
              className="text-[#FFFFFF] md:opacity-60 hover:opacity-100 duration-200 max-md:py-4 max-md:px-6 max-md:w-full hover:max-md:bg-[#B925FF] hover:max-md:bg-opacity-20 hover:max-md:border-t-2 hover:max-md:border-b-2 hover:max-md:border-[#B925FF]"
            >
              <li>Contact</li>
            </Link>
            <Link
              to={"/about"}
              className="text-[#FFFFFF] md:opacity-60 hover:opacity-100 duration-200 max-md:py-4 max-md:px-6 max-md:w-full hover:max-md:bg-[#B925FF] hover:max-md:bg-opacity-20 hover:max-md:border-t-2 hover:max-md:border-b-2 hover:max-md:border-[#B925FF]"
            >
              <li>About Us</li>
            </Link>
          </ul>
        </div>
        <div className="md:hidden">
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
