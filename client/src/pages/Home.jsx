import SatisfiedClient from "../components/SatisfiedClient";
import Form from "../components/Form";
import OurClients from "../components/OurClients";
import OurWork from "../components/OurWork";
import WhatWeDo from "../components/WhatWeDo";
import OurServices from "../components/OurServices";
import WhoWeAre from "../components/WhoWeAre";
import bg from "../assets/bg1.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Plan from "../components/Plan";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('${bg}')`,
          backgroundRepeat: "no-repeat",
        }}
        className="md:bg-cover md:bg-top max-md:bg-top"
      >
        <div className="flex flex-col items-center pt-60 md:pt-48 gap-36">
          <div className="flex flex-col justify-center items-center text-center gap-2">
            <p className="text-3xl md:text-5xl">Nous Sommes</p>
            <h1 className="text-7xl md:text-9xl font-bold">
              <ReactTyped
                strings={["Adwave."]}
                typeSpeed={60}
                backSpeed={60}
                loop
              >
                <span className="font-bold"></span>
              </ReactTyped>
            </h1>

            <p className="text-lg md:text-2xl opacity-50">
              Valoriser les marques ... Enrichir les expériences
            </p>
            <Link to={"/contact"}>
              <button className="text-lg md:text-xl font-medium border-2 border-[#B925FF] py-4 px-4 md:px-12 rounded-3xl bg-[#180023]  mt-10 hover:bg-[#B925FF] duration-300 z-50">
                Demandez une consultation gratuite
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-36 max-md:px-2">
            <SatisfiedClient />
            <SatisfiedClient />
            <SatisfiedClient />
            <SatisfiedClient />
          </div>
        </div>
        <WhoWeAre />
        <WhatWeDo />
        <OurServices />
        <Plan />
        <OurWork />
        <OurClients />
        <Form />
        <Footer />
      </div>
    </>
  );
}

export default Home;
