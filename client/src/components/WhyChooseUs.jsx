import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import BestQuality from "../components/BestQuality";

function WhyChooseUs() {
  return (
    <>
      <div className="flex flex-col gap-10 items-center mt-80">
        <div className="flex flex-col gap-10">
          <div className="flex justify-center md:justify-end text-lg md:text-xl">
            <div className="bg-[#66019670] flex items-center py-2 px-6 gap-4 rounded-full md:mx-12 border-2 border-[#BF36FF]">
              <p className="text-[#BF36FF]">Follow</p>
              <div className="w-[2.8px] h-10 bg-white opacity-70"></div>
              <p>scroll to read more</p>
            </div>
          </div>
          <div className="text-6xl md:text-9xl font-semibold max-md:text-center">
            Why{" "}
            <span className="px-4 bg-[#f73cfb]">
              <span className="text-6xl md:text-9xl font-semibold bg-[#AB1DEE]">
                Choose Us
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-24 px-2 md:px-16">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            768: {
              slidesPerView: 2.8,
              spaceBetween: 20,
            },

            480: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
          }}
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
    </>
  );
}

export default WhyChooseUs;
