import SatisfiedClient from "../components/SatisfiedClient";
import Form from "../components/Form";
import OurClients from "../components/OurClients";
import OurWork from "../components/OurWork";
import WhyChooseUs from "../components/WhyChooseUs";
import OurServices from "../components/OurServices";
import WhoWeAre from "../components/WhoWeAre";

function Home() {
  return (
    <>
      <div className="flex flex-col items-center pt-32 gap-36">
        <div className="flex flex-col justify-center items-center text-center gap-2">
          <p className="text-3xl md:text-5xl">We Are</p>
          <h1 className="text-7xl md:text-9xl font-semibold">Adwave.</h1>
          <p className="text-lg md:text-2xl opacity-50">
            Empowring Brands ... Enriching Experiences
          </p>
          <button className="text-lg md:text-xl font-medium border-2 border-[#B925FF] py-4 px-4 md:px-12 rounded-3xl bg-[#B925FF] bg-opacity-20 mt-10 hover:bg-[#B925FF] duration-300">
            Demand Free Consultation
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-36">
          <SatisfiedClient />
          <SatisfiedClient />
          <SatisfiedClient />
          <SatisfiedClient />
        </div>
      </div>
      <WhoWeAre />
      <OurServices />
      <WhyChooseUs />
      <OurWork />
      <OurClients />
      <Form />
    </>
  );
}

export default Home;
