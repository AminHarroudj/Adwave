import logo from "../assets/logo.png";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState("");
  return (
    <>
      <div className="flex items-center justify-between px-10 py-2 mx-10 border-[#B925FF] border-2 rounded-full relative top-8">
        <img src={logo} alt="" className="w-8" />
        <ul
          className={`${
            open ? "flex" : "hidden"
          } md:flex flex-col md:flex-row max-md:absolute top-16 right-0 left-0 items-center justify-center text-center gap-2 md:gap-8 bg-purple-400 md:bg-transparent rounded-full max-md:py-4 z-50`}
        >
          <li className="text-[#FFFFFF] md:opacity-60 hover:opacity-100">
            <a href="#">Home</a>
          </li>
          <li className="text-[#FFFFFF] md:opacity-60 hover:opacity-100">
            <a href="#">Services</a>
          </li>
          <li className="text-[#FFFFFF] md:opacity-60 hover:opacity-100">
            <a href="#">Pricing</a>
          </li>
          <li className="text-[#FFFFFF] md:opacity-60 hover:opacity-100">
            <a href="#">Why Choose Us</a>
          </li>
          <li className="text-[#FFFFFF] md:opacity-60 hover:opacity-100">
            <a href="#">Blogs</a>
          </li>
          <li className="text-[#FFFFFF] md:opacity-60 hover:opacity-100">
            <a href="#">Contact</a>
          </li>
          <li className="text-[#FFFFFF] md:opacity-60 hover:opacity-100">
            <a href="#">About Us</a>
          </li>
        </ul>
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
