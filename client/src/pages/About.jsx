import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Member from "../components/Member";
import zakiImg from "../assets/zaki.png";
import WhoWeAre from "../components/WhoWeAre";
import Form from "../components/Form";
import Location from "../components/Location";
import bg from "../assets/background4.png";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('${bg}')`,
          backgroundRepeat: "no-repeat",
        }}
        className="bg-top md:bg-cover md:bg-left-top"
        id="about"
      >
        <div className="flex flex-col items-center pt-56 md:pt-48 md:pb-40">
          <motion.div
            className="flex flex-col justify-center items-center text-center gap-4"
            initial={{
              y: -50,
            }}
            whileInView={{
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <h1 className="text-7xl md:text-9xl font-semibold">About Adwave</h1>
            <p className="text-lg md:text-2xl opacity-50">
              Valoriser les marques ... Enrichir les expériences
            </p>
          </motion.div>
        </div>
        <WhoWeAre />
        <div className="flex flex-col gap-10 items-center mt-24 md:mt-44">
          <div className="flex flex-col gap-10">
            <div className="flex justify-center md:justify-end text-xl">
              <div className="bg-[#66019670] flex items-center py-2 px-6 gap-4 rounded-full mx-2 border-2 border-[#BF36FF]">
                <p className="text-[#BF36FF]">Follow</p>
                <div className="w-[2.8px] h-10 bg-white opacity-70"></div>
                <p>scroll to read more</p>
              </div>
            </div>
            <div className="text-7xl md:text-9xl font-semibold text-center">
              Notre{" "}
              <span className="px-4 bg-[#f73cfb]">
                <span className="text-7xl md:text-9xl font-semibold bg-[#AB1DEE]">
                  Equipe
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-24">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={180}
            slidesPerView={1}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            breakpoints={{
              1300: {
                slidesPerView: 1.8,
                spaceBetween: 20,
              },

              480: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
            }}
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
        <Form />
        <Location />
        <Footer />
      </div>
    </>
  );
}

export default About;
