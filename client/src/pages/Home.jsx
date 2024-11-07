import SatisfiedClient from "../components/SatisfiedClient";
import Project from "../components/Project";
import Service from "../components/Service";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import BestQuality from "../components/BestQuality";
import Work from "../components/Work";
import herfatechImg from "../assets/herfatech.png";
import Client from "../components/Client";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";
import img9 from "../assets/9.png";
import img10 from "../assets/10.png";
import menImg from "../assets/men.png";

function Home() {
  return (
    <>
      <div className="flex flex-col items-center mt-32 gap-36">
        <div className="flex flex-col justify-center items-center text-center gap-2">
          <p className="text-5xl">We Are</p>
          <h1 className="text-9xl font-semibold">Adwave.</h1>
          <p className="text-2xl opacity-50">
            Empowring Brands ... Enriching Experiences
          </p>
          <button className="text-xl font-medium border-2 border-[#B925FF] py-4 px-12 rounded-3xl bg-[#B925FF] bg-opacity-20 mt-10">
            Demand Free Consultation
          </button>
        </div>
        <div className="grid grid-cols-4 gap-36">
          <SatisfiedClient />
          <SatisfiedClient />
          <SatisfiedClient />
          <SatisfiedClient />
        </div>
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
      <div className="flex justify-center items-center mt-24">
        <button className="text-3xl font-medium  border-2 border-[#BF36FF] py-4 px-28 rounded-3xl bg-[#B925FF] bg-opacity-20">
          Contact Us
        </button>
      </div>
      <div className="flex flex-col gap-10 items-center mt-44">
        <div className="flex flex-col gap-10">
          <div className="flex justify-end text-xl">
            <div className="bg-[#66019670] flex items-center py-2 px-6 gap-4 rounded-full mx-20 border-2 border-[#BF36FF]">
              <p className="text-[#BF36FF]">Follow</p>
              <div className="w-[2.8px] h-10 bg-white opacity-70"></div>
              <p>scroll to read more</p>
            </div>
          </div>
          <div className="text-9xl font-semibold">
            Our{" "}
            <span className="px-4 bg-[#f73cfb]">
              <span className="text-9xl font-semibold bg-[#AB1DEE]">
                Services
              </span>
            </span>
          </div>
        </div>
        <div>
          <Service
            num={"01"}
            title={"Web Dev"}
            description={`Bring Your Ideas To Life With Custom Websites That Combine Stunning Design With Seamless Functionality, Ensuring A User-Friendly And Optimized Online Presence`}
          />
          <Service
            num={"01"}
            title={"Web Dev"}
            description={`Bring Your Ideas To Life With Custom Websites That Combine Stunning Design With Seamless Functionality, Ensuring A User-Friendly And Optimized Online Presence`}
          />
          <Service
            num={"01"}
            title={"Web Dev"}
            description={`Bring Your Ideas To Life With Custom Websites That Combine Stunning Design With Seamless Functionality, Ensuring A User-Friendly And Optimized Online Presence`}
          />
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
      <div className="flex items-center justify-center mt-72">
        <div className="text-9xl font-semibold">
          Our{" "}
          <span className="px-4 bg-[#f73cfb]">
            <span className="text-9xl font-semibold bg-[#AB1DEE]">Work</span>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2 mt-16">
        <Work title={"Herfatech."}>
          <img src={herfatechImg} alt="" />
        </Work>
        <Work title={"Herfatech."}>
          <img src={herfatechImg} alt="" />
        </Work>
        <Work title={"Herfatech."}>
          <img src={herfatechImg} alt="" />
        </Work>
        <Work title={"Herfatech."}>
          <img src={herfatechImg} alt="" />
        </Work>
        <Work title={"Herfatech."}>
          <img src={herfatechImg} alt="" />
        </Work>
        <Work title={"Herfatech."}>
          <img src={herfatechImg} alt="" />
        </Work>
        <Work title={"Herfatech."}>
          <img src={herfatechImg} alt="" />
        </Work>
        <Work title={"Herfatech."}>
          <img src={herfatechImg} alt="" />
        </Work>
        <Work title={"Herfatech."}>
          <img src={herfatechImg} alt="" />
        </Work>
        <Work title={"Herfatech."}>
          <img src={herfatechImg} alt="" />
        </Work>
      </div>
      <div className="flex items-center justify-center mt-40">
        <div className="text-9xl font-semibold">
          Our{" "}
          <span className="px-4 bg-[#f73cfb]">
            <span className="text-9xl font-semibold bg-[#AB1DEE]">Clients</span>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-5 p-16 mt-6 gap-10">
        <Client>
          <img src={img1} alt="" />
        </Client>
        <Client>
          <img src={img2} alt="" />
        </Client>
        <Client>
          <img src={img3} alt="" />
        </Client>
        <Client>
          <img src={img4} alt="" />
        </Client>
        <Client>
          <img src={img5} alt="" />
        </Client>
        <Client>
          <img src={img6} alt="" />
        </Client>
        <Client>
          <img src={img7} alt="" />
        </Client>
        <Client>
          <img src={img8} alt="" />
        </Client>
        <Client>
          <img src={img9} alt="" />
        </Client>
        <Client>
          <img src={img10} alt="" />
        </Client>
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

export default Home;
