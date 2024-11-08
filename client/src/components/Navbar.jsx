import logo from "../assets/logo.png";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import { Link } from 'react-router-dom';


function Navbar() {
  const [open, setOpen] = useState("");
  return (
    <>
      <div className="flex items-center justify-between px-10 py-2 mx-2 md:mx-10 border-[#B925FF] border-2 rounded-full fixed left-0 right-0 top-8 z-50 bg-[#B925FF] bg-opacity-20">
        <img src={logo} alt="" className="w-8" />
        <ul
          className={`${
            open ? "flex" : "hidden"
          } md:flex flex-col md:flex-row max-md:absolute top-16 right-0 left-0 items-center justify-center text-center gap-2 md:gap-8 bg-purple-400 md:bg-transparent rounded-3xl max-md:py-4 z-50`}
        >
          <li className="text-[#FFFFFF] md:opacity-60 hover:opacity-100 duration-200">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="text-[#FFFFFF] md:opacity-60 hover:opacity-100 duration-200">
            <Link to={"/services"}>Services</Link>
          </li>
          <li className="text-[#FFFFFF] md:opacity-60 hover:opacity-100 duration-200">
            <Link to={"/"}>Pricing</Link>
          </li>
          <li className="text-[#FFFFFF] md:opacity-60 hover:opacity-100 duration-200">
            <Link to={"/"}>Why Choose Us</Link>
          </li>
          <li className="text-[#FFFFFF] md:opacity-60 hover:opacity-100 duration-200">
            <Link to={"/"}>Blogs</Link>
          </li>
          <li className="text-[#FFFFFF] md:opacity-60 hover:opacity-100 duration-200">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="text-[#FFFFFF] md:opacity-60 hover:opacity-100 duration-200">
            <Link to={"/about"}>About Us</Link>
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
