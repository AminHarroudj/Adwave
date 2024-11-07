import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Member({ children, name, job, description }) {
  return (
    <>
      <div className="w-[750px] flex flex-col gap-4 items-end ml-10 pt-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-medium">{name}</h1>
          <div className="flex items-center gap-4">
            <p className="text-xl text-white text-opacity-50">{job}</p>
            <div className="flex items-center">
              <hr className="w-[285px] border-2 border-[#AB1DEE]" />
              <div className="bg-[#AB1DEE] p-2 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="absolute w-[469px] h-[626px]">{children}</div>
          <div className="flex gap-72 bg-[#66019670] bg-opacity-30 py-6 px-4 rounded-3xl border-2 border-[#AB1DEE]">
            <div></div>
            <div className="flex flex-col gap-16">
              <p className="leading-loose">
                Bring Your Ideas To Life With Custom Websites That Combine
                Stunning Design With Seamless Fuctionality, Ensuring A
                User-Friendly And Optimized Online Presence.
              </p>
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-medium">Social Media</h1>
                <div className="flex gap-4">
                  <div className="bg-[#AB1DEE] bg-opacity-50 cursor-pointer p-2 rounded-full">
                    <AiFillInstagram className="text-xl" />
                  </div>
                  <div className="bg-[#AB1DEE] bg-opacity-50 cursor-pointer p-2 rounded-full">
                    <FaFacebook className="text-xl" />
                  </div>
                  <div className="bg-[#AB1DEE] bg-opacity-50 cursor-pointer p-2 rounded-full">
                    <BsTwitterX className="text-xl" />
                  </div>
                  <div className="bg-[#AB1DEE] bg-opacity-50 cursor-pointer p-2 rounded-full">
                    <FaLinkedin className="text-xl" />
                  </div>
                  <div className="bg-[#AB1DEE] bg-opacity-50 cursor-pointer p-2 rounded-full">
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
