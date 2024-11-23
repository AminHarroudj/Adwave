import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Member from "../components/Member";
import WhoWeAre from "../components/WhoWeAre";
import Form from "../components/Form";
import Location from "../components/Location";
import bg from "../assets/background4.png";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('${bg}')`,
          backgroundRepeat: "no-repeat",
        }}
        className="bg-top lg:bg-cover lg:bg-left-top"
      >
        <div className="flex flex-col items-center pt-56 lg:pt-48 pb-10 lg:pb-40">
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
            <h1 className="text-7xl lg:text-9xl font-semibold">About Adwave</h1>
            <p className="text-lg lg:text-2xl opacity-50">
              Valoriser les marques ... Enrichir les expériences
            </p>
          </motion.div>
        </div>
        <WhoWeAre />
        <div className="flex flex-col gap-10 items-center mt-24 lg:mt-44">
          <div className="flex flex-col gap-10">
            <div className="text-7xl lg:text-9xl font-semibold text-center">
              Notre{" "}
              <span className="px-4 bg-[#f73cfb]">
                <span className="text-7xl lg:text-9xl font-semibold bg-[#AB1DEE]">
                  Equipe
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-24">
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
              1120: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              920: {
                slidesPerView: 1.8,
                spaceBetween: 20,
              },
              732: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              584: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <Member
                name={"Houam Zakaria"}
                job={"Co-Founder"}
                description={
                  "Passionné par les technologies modernes il est le responsable technique d'Adwave. Expert en développement web et solutions numériques, il assure la création de plateformes innovantes adaptées aux besoins des clients, tout en garantissant des standards de qualité élevés."
                }
              >
                <Link
                  to={"https://www.instagram.com/houamzakaria/"}
                  target="_blank"
                >
                  <div className="bg-[#AB1DEE] bg-opacity-50 cursor-pointer p-2 rounded-full hover:bg-[#B925FF] duration-300 hover:scale-125">
                    <AiFillInstagram className="text-xl" />
                  </div>
                </Link>
                <Link
                  to={"https://www.linkedin.com/in/zakaria-houam-a8a493209/"}
                  target="_blank"
                >
                  <div className="bg-[#AB1DEE] bg-opacity-50 cursor-pointer p-2 rounded-full hover:bg-[#B925FF] duration-300 hover:scale-125">
                    <FaLinkedin className="text-xl" />
                  </div>
                </Link>
              </Member>
            </SwiperSlide>
            <SwiperSlide>
              <Member
                name={"Djaalab Zakaria"}
                job={"Co-Founder"}
                description={
                  "Avec un œil artistique unique et une approche centrée sur l’utilisateur il transforme les idées en designs captivants et fonctionnels. Son rôle est d’apporter une identité visuelle forte et un impact esthétique à tous les projets d’Adwave."
                }
              >
                <Link
                  to={"https://www.linkedin.com/in/zakaria-djaalab-a580622a4"}
                  target="_blank"
                >
                  <div className="bg-[#AB1DEE] bg-opacity-50 cursor-pointer p-2 rounded-full hover:bg-[#B925FF] duration-300 hover:scale-125">
                    <FaLinkedin className="text-xl" />
                  </div>
                </Link>
              </Member>
            </SwiperSlide>
            <SwiperSlide>
              <Member
                name={"Kobzili Oussama"}
                job={"Co-Founder"}
                description={
                  "Expert en stratégie digitale, il conçoit et met en œuvre des campagnes marketing performantes. Il accompagne les entreprises dans leur transformation numérique en leur offrant une visibilité optimale sur le marché algérien et au-delà."
                }
              >
                <Link
                  to={"https://www.linkedin.com/in/oussama-kobzili-b6b380201"}
                  target="_blank"
                >
                  <div className="bg-[#AB1DEE] bg-opacity-50 cursor-pointer p-2 rounded-full hover:bg-[#B925FF] duration-300 hover:scale-125">
                    <FaLinkedin className="text-xl" />
                  </div>
                </Link>
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
