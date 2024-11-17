import men2Img from "../assets/men2.png";
import devImg from "../assets/component.png";
import marketingImg from "../assets/img10.png";
import Form from "../components/Form";
import WhyChooseUs from "../components/WhatWeDo";
import bg from "../assets/background2.png";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

function Services() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('${bg}')`,
          backgroundRepeat: "no-repeat",
        }}
        className="bg-top md:bg-cover md:bg-left-top"
        id="services"
      >
        <div className="flex flex-col md:flex-row justify-between pt-32 md:ml-10 ml-2">
          <motion.div
            className="flex flex-col justify-center gap-2"
            initial={{
              x: +200,
              y: -100,
            }}
            whileInView={{
              x: 0,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <p className="text-3xl md:text-5xl">Découvrez Nos</p>
            <h1 className="text-7xl md:text-9xl font-semibold">Services.</h1>
            <p className="text-lg md:text-2xl opacity-50">
              Valoriser les marques ... Enrichir les expériences
            </p>
          </motion.div>
          <motion.div
            initial={{
              x: -200,
              y: +100,
            }}
            whileInView={{
              x: 0,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <img src={men2Img} alt="" />
          </motion.div>
        </div>

        <div className="flex md:flex-row items-center mt-20">
          <div className="w-11/12 max-lg:hidden">
            <img src={devImg} alt="" />
          </div>
          <div className="flex justify-center items-center md:items-start flex-col gap-10 md:mr-20 mx-2">
            <h1 className="text-5xl md:text-7xl font-medium text-center">
              Digital Marketing
            </h1>
            <div className="flex max-md:flex-col max-md:gap-4 items-center justify-between bg-white bg-opacity-10 py-4 px-4 md:px-10 rounded-3xl max-md:mx-2">
              <div className="flex max-md:flex-col items-center gap-2">
                <div className="flex flex-col justify-center items-center gap-2">
                  <p className="text-5xl font-medium">01</p>
                  <hr className="w-[44.82px] border-4 border-[#AB1DEE]" />
                </div>
                <h1 className="text-5xl font-medium text-center">
                  Stratégie Marketing
                </h1>
              </div>
              <p className="text-lg text-white text-opacity-50 md:w-1/2 max-md:text-center">
                Développement de stratégies marketing complètes et
                personnalisées pour répondre à vos objectifs commerciaux.
              </p>
            </div>
            <div className="flex max-md:flex-col max-md:gap-4 items-center justify-between bg-white bg-opacity-10 py-4 px-4 md:px-10 rounded-3xl max-md:mx-2">
              <div className="flex max-md:flex-col items-center gap-2">
                <div className="flex flex-col justify-center items-center gap-2">
                  <p className="text-5xl font-medium">01</p>
                  <hr className="w-[44.82px] border-4 border-[#AB1DEE]" />
                </div>
                <h1 className="text-5xl font-medium text-center">
                  Publicité en Ligne
                </h1>
              </div>
              <p className="text-lg text-white text-opacity-50 md:w-1/2 max-md:text-center">
                Gestion de campagnes publicitaires sur les réseaux sociaux et
                les moteurs de recherche pour atteindre votre public cible.
              </p>
            </div>
            <button className="text-lg md:text-xl font-medium border-2 border-[#B925FF] py-4 px-4 md:px-12 rounded-3xl bg-[#B925FF] bg-opacity-20 mt-10 hover:bg-[#B925FF] duration-300">
              Demandez une consultation gratuite
            </button>
          </div>
        </div>

        <div className="flex items-center mt-20 mx-2">
          <div className="flex justify-center items-center md:items-start flex-col gap-10 lg:ml-20">
            <h1 className="text-5xl md:text-7xl font-medium">Développement</h1>
            <div className="flex max-md:flex-col max-md:gap-4 items-center justify-between bg-white bg-opacity-10 py-4 px-4 md:px-10 rounded-3xl max-md:mx-2">
              <div className="flex max-md:flex-col items-center gap-2">
                <div className="flex flex-col justify-center items-center gap-2">
                  <p className="text-5xl font-medium">01</p>
                  <hr className="w-[44.82px] border-4 border-[#AB1DEE]" />
                </div>
                <h1 className="text-5xl font-medium text-center">Web Dev</h1>
              </div>
              <p className="text-lg text-white text-opacity-50 md:w-1/2 max-md:text-center">
                Nous créons des sites web professionnels, fonctionnels et
                esthétiques. Nos services de développement web
              </p>
            </div>
            <div className="flex max-md:flex-col max-md:gap-4 items-center justify-between bg-white bg-opacity-10 py-4 px-4 md:px-10 rounded-3xl max-md:mx-2">
              <div className="flex max-md:flex-col items-center gap-2">
                <div className="flex flex-col justify-center items-center gap-2">
                  <p className="text-5xl font-medium">01</p>
                  <hr className="w-[44.82px] border-4 border-[#AB1DEE]" />
                </div>
                <h1 className="text-5xl font-medium text-center">Mobile Dev</h1>
              </div>
              <p className="text-lg text-white text-opacity-50 md:w-1/2 max-md:text-center">
                Notre équipe de développeurs mobiles crée des applications
                natives et hybrides pour iOS et Android, conçues pour offrir une
                expérience
              </p>
            </div>
            <button className="text-lg md:text-xl font-medium border-2 border-[#B925FF] py-4 px-4 md:px-12 rounded-3xl bg-[#B925FF] bg-opacity-20 mt-10 hover:bg-[#B925FF] duration-300">
              Demandez une consultation gratuite
            </button>
          </div>
          <div className="w-11/12 max-lg:hidden">
            <img src={marketingImg} alt="" />
          </div>
        </div>

        <div className="flex items-center mt-20 mx-2">
          <div className="w-11/12 max-lg:hidden">
            <img src={devImg} alt="" />
          </div>
          <div className="flex justify-center items-center md:items-start flex-col gap-10 md:mr-20">
            <h1 className="text-5xl md:text-7xl font-medium max-md:text-center">
              Designe & Branding
            </h1>
            <div className="flex max-md:flex-col max-md:gap-4 items-center justify-between bg-white bg-opacity-10 py-4 px-4 md:px-10 rounded-3xl max-md:mx-2">
              <div className="flex max-md:flex-col items-center gap-2">
                <div className="flex flex-col justify-center items-center gap-2">
                  <p className="text-5xl font-medium">01</p>
                  <hr className="w-[44.82px] border-4 border-[#AB1DEE]" />
                </div>
                <h1 className="text-5xl font-medium text-center">
                  Design Graphique
                </h1>
              </div>
              <p className="text-lg text-white text-opacity-50 md:w-1/2 max-md:text-center">
                Création de logos, identités visuelles, et supports de
                communication variés.
              </p>
            </div>
            <div className="flex max-md:flex-col max-md:gap-4 items-center justify-between bg-white bg-opacity-10 py-4 px-4 md:px-10 rounded-3xl max-md:mx-2">
              <div className="flex max-md:flex-col items-center gap-2">
                <div className="flex flex-col justify-center items-center gap-2">
                  <p className="text-5xl font-medium">01</p>
                  <hr className="w-[44.82px] border-4 border-[#AB1DEE]" />
                </div>
                <h1 className="text-5xl font-medium text-center">
                  UI/UX Design
                </h1>
              </div>
              <p className="text-lg text-white text-opacity-50 md:w-1/2 max-md:text-center">
                Conception d&apos;interfaces utilisateur intuitives et
                attractives pour améliorer l&apos;expérience utilisateur.
              </p>
            </div>
            <button className="text-lg md:text-xl font-medium border-2 border-[#B925FF] py-4 px-4 md:px-12 rounded-3xl bg-[#B925FF] bg-opacity-20 mt-10 hover:bg-[#B925FF] duration-300">
              Demandez une consultation gratuite
            </button>
          </div>
        </div>

        <WhyChooseUs />
        <Form />
        <Footer />
      </div>
    </>
  );
}

export default Services;
