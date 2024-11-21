import Project from "../components/Project";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

function WhoWeAre() {
  return (
    <>
      <div className="flex flex-col gap-10 items-center mt-24 lg:mt-72">
        <div className="flex justify-center lg:justify-end text-lg lg:text-xl">
          <div className="bg-[#66019670] flex items-center py-2 px-6 gap-4 rounded-full lg:ml-72 border-2 border-[#BF36FF]">
            <p className="text-[#BF36FF]">Follow</p>
            <div className="w-[2.8px] h-10 bg-white opacity-70"></div>
            <p>scroll to read more</p>
          </div>
        </div>
        <div className="text-6xl lg:text-9xl font-semibold max-lg:text-center">
          Qui{" "}
          <span className="px-4 bg-[#f73cfb]">
            <span className="text-6xl lg:text-9xl font-semibold bg-[#AB1DEE]">
              Sommes-nous
            </span>
          </span>
        </div>
      </div>
      <div className="mt-10 lg:mt-24 mx-2">
        <Swiper
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
              year={"2022"}
              title={"Delta"}
              description={
                "En 2022, nous avons élargi nos services pour inclure la création de sites web."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Project
              year={"2023"}
              title={"Delta"}
              description={
                "En 2023, nous avons réinventé notre entreprise sous le nom 'Adwave', marquant notre entrée sur le marché avec détermination en proposant une gamme complète de services."
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex justify-center items-center mt-10 lg:mt-24">
        <Link to={"/contact"}>
          <button className="text-lg lg:text-3xl font-medium  border-2 border-[#BF36FF] py-4 px-10 lg:px-28 rounded-3xl bg-[#B925FF] bg-opacity-20 hover:bg-[#B925FF] duration-300">
            Contactez-nous
          </button>
        </Link>
      </div>
    </>
  );
}

export default WhoWeAre;
