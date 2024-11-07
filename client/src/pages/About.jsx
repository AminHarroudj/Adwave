import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Project from "../components/Project";
import Member from "../components/Member";
import zakiImg from "../assets/zaki.png";
import menImg from "../assets/men.png";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import locationImg from "../assets/location.png";
import logo from "../assets/logo.png";

function About() {
  return (
    <>
      <div className="flex flex-col items-center mt-44">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-9xl font-semibold">About Adwave</h1>
          <p className="text-2xl opacity-50">
            Empowring Brands ... Enriching Experiences
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-72 gap-36">
        <div className="flex flex-col gap-10">
          <div className="flex justify-end text-xl">
            <div className="bg-[#66019670] flex items-center py-2 px-6 gap-4 rounded-full mx-20 border-2 border-[#BF36FF]">
              <p className="text-[#BF36FF]">Follow</p>
              <div className="w-[2.8px] h-10 bg-white opacity-70"></div>
              <p>scroll to read more</p>
            </div>
          </div>
          <div className="text-9xl font-semibold">
            Who{" "}
            <span className="px-4 bg-[#f73cfb]">
              <span className="text-9xl font-semibold bg-[#AB1DEE]">
                Are We
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={2}
          slidesPerView={1.9}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <Project
              year={"2021"}
              title={"Delta"}
              description={
                "Fondée En 2021 Sous Le Nom De 'Delta', S'est Initialement Spécialisée Dans La Formation Dans Les Domaines Du Développement Web Et Du Designe."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Project
              year={"2021"}
              title={"Delta"}
              description={
                "Fondée En 2021 Sous Le Nom De 'Delta', S'est Initialement Spécialisée Dans La Formation Dans Les Domaines Du Développement Web Et Du Designe."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Project
              year={"2021"}
              title={"Delta"}
              description={
                "Fondée En 2021 Sous Le Nom De 'Delta', S'est Initialement Spécialisée Dans La Formation Dans Les Domaines Du Développement Web Et Du Designe."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Project
              year={"2021"}
              title={"Delta"}
              description={
                "Fondée En 2021 Sous Le Nom De 'Delta', S'est Initialement Spécialisée Dans La Formation Dans Les Domaines Du Développement Web Et Du Designe."
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex flex-col gap-10 items-center mt-44">
        <div className="flex flex-col gap-10">
          <div className="flex justify-end text-xl">
            <div className="bg-[#66019670] flex items-center py-2 px-6 gap-4 rounded-full mx-2 border-2 border-[#BF36FF]">
              <p className="text-[#BF36FF]">Follow</p>
              <div className="w-[2.8px] h-10 bg-white opacity-70"></div>
              <p>scroll to read more</p>
            </div>
          </div>
          <div className="text-9xl font-semibold">
            Our{" "}
            <span className="px-4 bg-[#f73cfb]">
              <span className="text-9xl font-semibold bg-[#AB1DEE]">Team</span>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-44">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={2}
          slidesPerView={1.9}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <Member name={"Zakarya Houam"} job={"Co-Founder , CTO"}>
              <img src={zakiImg} alt="" className="rounded-3xl" />
            </Member>
          </SwiperSlide>
          <SwiperSlide>
            <Member name={"Zakarya Houam"} job={"Co-Founder , CTO"}>
              <img src={zakiImg} alt="" className="rounded-3xl" />
            </Member>
          </SwiperSlide>
          <SwiperSlide>
            <Member name={"Zakarya Houam"} job={"Co-Founder , CTO"}>
              <img src={zakiImg} alt="" className="rounded-3xl" />
            </Member>
          </SwiperSlide>
          <SwiperSlide>
            <Member name={"Zakarya Houam"} job={"Co-Founder , CTO"}>
              <img src={zakiImg} alt="" className="rounded-3xl" />
            </Member>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex gap-10 mt-72">
        <div>
          <img src={menImg} alt="" className="h-[762px]" />
        </div>
        <div className="flex flex-col justify-center gap-6 mr-28 w-[587px]">
          <h1 className="text-4xl font-medium">Please fill your infos</h1>
          <p className="text-xl text-white text-opacity-50">
            Content Content Content Content Content Content Content Content
            Content
          </p>
          <form action="" className="text-white flex flex-col items-end gap-6">
            <input
              type="text"
              placeholder="Your Full Name"
              className="bg-white bg-opacity-10 text-opacity-50 p-4 rounded-xl w-full outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-white bg-opacity-10 text-opacity-50 p-4 rounded-xl w-full outline-none"
            />
            <input
              type="number"
              placeholder="Your Phone Number"
              className="bg-white bg-opacity-10 text-opacity-50 p-4 rounded-xl w-full outline-none"
            />
            <input
              type="text"
              placeholder="Message"
              className="bg-white bg-opacity-10 text-opacity-50 p-4 rounded-xl w-full outline-none pb-[214px]"
            />
            <button className="py-2 px-16 bg-[#AB1DEE] bg-opacity-30 rounded-full border-2 border-[#BF36FF] text-xl font-medium">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="flex mx-20 gap-36 mt-72">
        <div>
          <img src={locationImg} alt="" className="w-[600px]" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-6 w-[84.18px] h-[77.74px]">
              <img src={logo} alt="" />
              <h1 className="text-5xl font-medium">Adwave.</h1>
            </div>
            <p className="text-lg text-white text-opacity-50">
              Bring Your Ideas To Life With Custom Websites That Combine
              Stunning Design With Seamless Fuctionality, Ensuring A
              User-Friendly And Optimized Online Presence.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
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
    </>
  );
}

export default About;
