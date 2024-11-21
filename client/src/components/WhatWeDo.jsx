import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import BestQuality from "./BestQuality";

function WhyChooseUs() {
  return (
    <>
      <div className="flex flex-col gap-10 items-center mt-20 lg:mt-40">
        <div className="flex flex-col gap-10">
          <div className="flex justify-center lg:justify-end text-lg lg:text-xl">
            <div className="bg-[#66019670] flex items-center py-2 px-6 gap-4 rounded-full lg:mx-12 border-2 border-[#BF36FF]">
              <p className="text-[#BF36FF]">Follow</p>
              <div className="w-[2.8px] h-10 bg-white opacity-70"></div>
              <p>scroll to read more</p>
            </div>
          </div>
          <div className="text-6xl lg:text-9xl font-semibold max-lg:text-center">
            Ce Que{" "}
            <span className="px-4 bg-[#f73cfb]">
              <span className="text-6xl lg:text-9xl font-semibold bg-[#AB1DEE]">
                Nous Faisons
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-10 lg:mt-24 px-2 lg:px-16">
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
              title={"Renforcer votre presence sur le marchè"}
              description={
                "Améliorer la visibilité, la reconnaissance et l'impact de votre entreprise dans son secteur."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <BestQuality
              num={"02"}
              title={"Augmenter votre chiffre d'affaire"}
              description={
                "Accroître les revenus générés par votre entreprise. Cela peut être réalisé en augmentant le volume des ventes."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <BestQuality
              num={"03"}
              title={"Innover continuellement dans le domaine digital"}
              description={
                "Rester à l'avant-garde des technologies et des tendances du numérique en mettant en œuvre de nouvelles idées."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <BestQuality
              num={"04"}
              title={"Positionner comme leader dans le marchè"}
              description={
                "établir une entreprise comme la référence principale dans son secteur."
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default WhyChooseUs;
