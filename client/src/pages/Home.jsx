import SatisfiedClient from "../components/SatisfiedClient";
import Form from "../components/Form";
import OurClients from "../components/OurClients";
import OurWork from "../components/OurWork";
import WhyChooseUs from "../components/WhyChooseUs";
import OurServices from "../components/OurServices";
import WhoWeAre from "../components/WhoWeAre";
import bg from "../assets/background1.png";
import Footer from "../components/Footer";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('${bg}')`,
          backgroundRepeat: "no-repeat",
        }}
        className="bg-top md:bg-cover md:bg-left-top"
        id="home"
      >
        <div className="flex flex-col items-center pt-56 md:pt-44 gap-36">
          <div className="flex flex-col justify-center items-center text-center gap-2">
            <p className="text-3xl md:text-5xl">We Are</p>
            <h1 className="text-7xl md:text-9xl font-semibold">
              <Typewriter
                words={["Adwave."]}
                loop={10000000}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </h1>
            <p className="text-lg md:text-2xl opacity-50">
              Empowring Brands ... Enriching Experiences
            </p>
            <Link to={"/contact"}>
              <button className="text-lg md:text-xl font-medium border-2 border-[#B925FF] py-4 px-4 md:px-12 rounded-3xl bg-[#180023]  mt-10 hover:bg-[#B925FF] duration-300 z-50">
                Demand Free Consultation
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
        <WhyChooseUs />
        <OurServices />
        <OurWork />
        <OurClients />
        <Form />
        <Footer />
      </div>
    </>
  );
}

export default Home;
