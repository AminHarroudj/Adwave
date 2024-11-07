import men2Img from "../assets/men2.png";
import devImg from "../assets/component.png";
import marketingImg from "../assets/img10.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import BestQuality from "../components/BestQuality";
import menImg from "../assets/men.png";

function Services() {
  return (
    <>
      <div className="flex justify-between mt-24 ml-10">
        <div className="flex flex-col justify-center gap-2">
          <p className="text-5xl">Discover Our</p>
          <h1 className="text-9xl font-semibold">Services.</h1>
          <p className="text-2xl opacity-50">
            Empowring Brands ... Enriching Experiences
          </p>
        </div>
        <div>
          <img src={men2Img} alt="" />
        </div>
      </div>

      <div className="flex items-center mt-20">
        <div className="w-11/12">
          <img src={devImg} alt="" />
        </div>
        <div className="flex justify-center items-start flex-col gap-10 mr-20">
          <h1 className="text-7xl font-medium">Devlopment</h1>
          <div className="flex items-center justify-between bg-white bg-opacity-10 py-4 px-10 rounded-3xl">
            <div className="flex items-center gap-4">
              <div className="flex flex-col justify-center items-center gap-2">
                <p className="text-5xl font-medium">01</p>
                <hr className="w-[44.82px] border-4 border-[#AB1DEE]" />
              </div>
              <h1 className="text-5xl font-medium">Web Dev</h1>
            </div>
            <p className="text-lg text-white text-opacity-50 w-1/2">
              Bring Your Ideas To Life With Custom Websites That Combine
              Stunning Design With Seamless Fuctionality, Ensuring A
              User-Friendly And Optimized Online Presence.
            </p>
          </div>
          <div className="flex items-center justify-between bg-white bg-opacity-10 py-4 px-10 rounded-3xl">
            <div className="flex items-center gap-4">
              <div className="flex flex-col justify-center items-center gap-2">
                <p className="text-5xl font-medium">02</p>
                <hr className="w-[44.82px] border-4 border-[#AB1DEE]" />
              </div>
              <h1 className="text-5xl font-medium">Mobile Dev</h1>
            </div>
            <p className="text-lg text-white text-opacity-50 w-1/2">
              Bring Your Ideas To Life With Custom Websites That Combine
              Stunning Design With Seamless Fuctionality, Ensuring A
              User-Friendly And Optimized Online Presence.
            </p>
          </div>
          <button className="text-xl font-medium border-2 border-[#B925FF] py-4 px-12 rounded-3xl bg-[#B925FF] bg-opacity-20">
            Demand Free Consultation
          </button>
        </div>
      </div>

      <div className="flex items-center mt-20">
        <div className="flex justify-center items-start flex-col gap-10 ml-20">
          <h1 className="text-7xl font-medium">Devlopment</h1>
          <div className="flex items-center justify-between bg-white bg-opacity-10 py-4 px-10 rounded-3xl">
            <div className="flex items-center gap-4">
              <div className="flex flex-col justify-center items-center gap-2">
                <p className="text-5xl font-medium">01</p>
                <hr className="w-[44.82px] border-4 border-[#AB1DEE]" />
              </div>
              <h1 className="text-5xl font-medium">Web Dev</h1>
            </div>
            <p className="text-lg text-white text-opacity-50 w-1/2">
              Bring Your Ideas To Life With Custom Websites That Combine
              Stunning Design With Seamless Fuctionality, Ensuring A
              User-Friendly And Optimized Online Presence.
            </p>
          </div>
          <div className="flex items-center justify-between bg-white bg-opacity-10 py-4 px-10 rounded-3xl">
            <div className="flex items-center gap-4">
              <div className="flex flex-col justify-center items-center gap-2">
                <p className="text-5xl font-medium">02</p>
                <hr className="w-[44.82px] border-4 border-[#AB1DEE]" />
              </div>
              <h1 className="text-5xl font-medium">Mobile Dev</h1>
            </div>
            <p className="text-lg text-white text-opacity-50 w-1/2">
              Bring Your Ideas To Life With Custom Websites That Combine
              Stunning Design With Seamless Fuctionality, Ensuring A
              User-Friendly And Optimized Online Presence.
            </p>
          </div>
          <button className="text-xl font-medium border-2 border-[#B925FF] py-4 px-12 rounded-3xl bg-[#B925FF] bg-opacity-20">
            Demand Free Consultation
          </button>
        </div>
        <div className="w-11/12">
          <img src={marketingImg} alt="" />
        </div>
      </div>

      <div className="flex items-center mt-20">
        <div className="w-11/12">
          <img src={devImg} alt="" />
        </div>
        <div className="flex justify-center items-start flex-col gap-10 mr-20">
          <h1 className="text-7xl font-medium">Design & Branding</h1>
          <div className="flex items-center justify-between bg-white bg-opacity-10 py-4 px-10 rounded-3xl">
            <div className="flex items-center gap-4">
              <div className="flex flex-col justify-center items-center gap-2">
                <p className="text-5xl font-medium">01</p>
                <hr className="w-[44.82px] border-4 border-[#AB1DEE]" />
              </div>
              <h1 className="text-5xl font-medium">Web Dev</h1>
            </div>
            <p className="text-lg text-white text-opacity-50 w-1/2">
              Bring Your Ideas To Life With Custom Websites That Combine
              Stunning Design With Seamless Fuctionality, Ensuring A
              User-Friendly And Optimized Online Presence.
            </p>
          </div>
          <div className="flex items-center justify-between bg-white bg-opacity-10 py-4 px-10 rounded-3xl">
            <div className="flex items-center gap-4">
              <div className="flex flex-col justify-center items-center gap-2">
                <p className="text-5xl font-medium">02</p>
                <hr className="w-[44.82px] border-4 border-[#AB1DEE]" />
              </div>
              <h1 className="text-5xl font-medium">Mobile Dev</h1>
            </div>
            <p className="text-lg text-white text-opacity-50 w-1/2">
              Bring Your Ideas To Life With Custom Websites That Combine
              Stunning Design With Seamless Fuctionality, Ensuring A
              User-Friendly And Optimized Online Presence.
            </p>
          </div>
          <button className="text-xl font-medium border-2 border-[#B925FF] py-4 px-12 rounded-3xl bg-[#B925FF] bg-opacity-20">
            Demand Free Consultation
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-10 items-center mt-44">
        <div className="flex flex-col gap-10">
          <div className="flex justify-end text-xl">
            <div className="bg-[#66019670] flex items-center py-2 px-6 gap-4 rounded-full mx-32 border-2 border-[#BF36FF]">
              <p className="text-[#BF36FF]">Follow</p>
              <div className="w-[2.8px] h-10 bg-white opacity-70"></div>
              <p>scroll to read more</p>
            </div>
          </div>
          <div className="text-9xl font-semibold">
            Why{" "}
            <span className="px-4 bg-[#f73cfb]">
              <span className="text-9xl font-semibold bg-[#AB1DEE]">
                Choose Us
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-24 px-16">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={2.8}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <BestQuality
              num={"01"}
              title={"Best Quality"}
              description={
                "Content Content Content Content Content Content Content Content Content Content Content Content Content "
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <BestQuality
              num={"01"}
              title={"Best Quality"}
              description={
                "Content Content Content Content Content Content Content Content Content Content Content Content Content "
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <BestQuality
              num={"01"}
              title={"Best Quality"}
              description={
                "Content Content Content Content Content Content Content Content Content Content Content Content Content "
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <BestQuality
              num={"01"}
              title={"Best Quality"}
              description={
                "Content Content Content Content Content Content Content Content Content Content Content Content Content "
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex flex-col gap-10 items-center mt-72">
        <div className="flex flex-col gap-10">
          <div className="flex justify-stard text-xl">
            <div className="bg-[#66019670] flex items-center py-2 px-6 gap-4 rounded-full mx-24 border-2 border-[#BF36FF]">
              <p className="text-[#BF36FF]">Follow</p>
              <div className="w-[2.8px] h-10 bg-white opacity-70"></div>
              <p>scroll to read more</p>
            </div>
          </div>
          <div className="text-9xl font-semibold">
            <span className="px-4 bg-[#f73cfb]">
              <span className="text-9xl font-semibold bg-[#AB1DEE]">
                Contact
              </span>
            </span>{" "}
            Us
          </div>
        </div>
      </div>
      <div className="flex gap-10 mt-24">
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
    </>
  );
}

export default Services;
