import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Member({ children, name, job, description }) {
  return (
    <>
      <div className="w-[500px] md:w-[750px] flex flex-col gap-4 md:items-end ml-2 md:ml-10 pt-10">
        <div className="flex flex-col gap-2 md:gap-4">
          <h1 className="text-4xl md:text-5xl font-medium">{name}</h1>
          <div className="flex items-center gap-4">
            <p className="text-xl text-white text-opacity-50">{job}</p>
            <div className="flex items-center">
              <hr className="md:w-[285px] border-2 border-[#AB1DEE]" />
              <div className="bg-[#AB1DEE] p-2 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="absolute w-[469px] h-[626px] max-md:w-[200px] max-md:h-[300px]">{children}</div>
          <div className="flex gap-40 md:gap-72 bg-[#66019670] bg-opacity-30 py-6 px-4 rounded-3xl border-2 border-[#AB1DEE]">
            <div></div>
            <div className="flex flex-col gap-2 md:gap-16">
              <p className="leading-loose">
                Bring Your Ideas To Life With Custom Websites That Combine
                Stunning Design With Seamless Fuctionality, Ensuring A
                User-Friendly And Optimized Online Presence.
              </p>
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-medium">Social Media</h1>
                <div className="flex gap-4 z-50">
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
      </div>
    </>
  );
}

export default Member;
