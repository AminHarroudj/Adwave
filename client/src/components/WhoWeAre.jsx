import Project from "../components/Project";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function WhoWeAre() {
  return (
    <>
      <div className="flex flex-col gap-10 items-center mt-24 md:mt-44">
        <div className="flex justify-center md:justify-end text-lg md:text-xl">
          <div className="bg-[#66019670] flex items-center py-2 px-6 gap-4 rounded-full md:ml-72 border-2 border-[#BF36FF] max-md:">
            <p className="text-[#BF36FF]">Follow</p>
            <div className="w-[2.8px] h-10 bg-white opacity-70"></div>
            <p>scroll to read more</p>
          </div>
        </div>
        <div className="text-6xl md:text-9xl font-semibold max-md:text-center">
          Who{" "}
          <span className="px-4 bg-[#f73cfb]">
            <span className="text-6xl md:text-9xl font-semibold bg-[#AB1DEE]">
              Are We
            </span>
          </span>
        </div>
      </div>
      <div className="mt-10 md:mt-24 mx-2">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={2}
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            1300: {
              slidesPerView: 1.9,
              spaceBetween: 20,
            },

            480: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
          }}
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
      <div className="flex justify-center items-center mt-10 md:mt-24">
        <button className="text-lg md:text-3xl font-medium  border-2 border-[#BF36FF] py-4 px-10 md:px-28 rounded-3xl bg-[#B925FF] bg-opacity-20 hover:bg-[#B925FF] duration-300">
          Contact Us
        </button>
      </div>
    </>
  );
}

export default WhoWeAre;
