import men2Img from "../assets/men2.png";
import devImg from "../assets/component.png";
import marketingImg from "../assets/img10.png";
import Form from "../components/Form";
import WhyChooseUs from "../components/WhyChooseUs";

function Services() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between mt-24 md:ml-10 ml-2">
        <div className="flex flex-col justify-center gap-2">
          <p className="text-3xl md:text-5xl">Discover Our</p>
          <h1 className="text-7xl md:text-9xl font-semibold">Services.</h1>
          <p className="text-lg md:text-2xl opacity-50">
            Empowring Brands ... Enriching Experiences
          </p>
        </div>
        <div>
          <img src={men2Img} alt="" />
        </div>
      </div>

      <div className="flex md:flex-row items-center mt-20">
        <div className="w-11/12 max-lg:hidden">
          <img src={devImg} alt="" />
        </div>
        <div className="flex justify-center items-center md:items-start flex-col gap-10 md:mr-20 mx-2">
          <h1 className="text-5xl md:text-7xl font-medium">Devlopment</h1>
          <div className="flex max-md:flex-col max-md:gap-4 items-center justify-between bg-white bg-opacity-10 py-4 px-4 md:px-10 rounded-3xl max-md:mx-2">
            <div className="flex max-md:flex-col items-center gap-4">
              <div className="flex flex-col justify-center items-center gap-2">
                <p className="text-5xl font-medium">01</p>
                <hr className="w-[44.82px] border-4 border-[#AB1DEE]" />
              </div>
              <h1 className="text-5xl font-medium">Web Dev</h1>
            </div>
            <p className="text-lg text-white text-opacity-50 md:w-1/2 max-md:text-center">
              Bring Your Ideas To Life With Custom Websites That Combine
              Stunning Design With Seamless Fuctionality, Ensuring A
              User-Friendly And Optimized Online Presence.
            </p>
          </div>
          <div className="flex max-md:flex-col max-md:gap-4 items-center justify-between bg-white bg-opacity-10 py-4 px-4 md:px-10 rounded-3xl max-md:mx-2">
            <div className="flex max-md:flex-col items-center gap-4">
              <div className="flex flex-col justify-center items-center gap-2">
                <p className="text-5xl font-medium">01</p>
                <hr className="w-[44.82px] border-4 border-[#AB1DEE]" />
              </div>
              <h1 className="text-5xl font-medium">Web Dev</h1>
            </div>
            <p className="text-lg text-white text-opacity-50 md:w-1/2 max-md:text-center">
              Bring Your Ideas To Life With Custom Websites That Combine
              Stunning Design With Seamless Fuctionality, Ensuring A
              User-Friendly And Optimized Online Presence.
            </p>
          </div>
          <button className="text-lg md:text-xl font-medium border-2 border-[#B925FF] py-4 px-4 md:px-12 rounded-3xl bg-[#B925FF] bg-opacity-20 mt-10">
            Demand Free Consultation
          </button>
        </div>
      </div>

      <div className="flex items-center mt-20 mx-2">
        <div className="flex justify-center items-center md:items-start flex-col gap-10 lg:ml-20">
          <h1 className="text-5xl md:text-7xl font-medium">Devlopment</h1>
          <div className="flex max-md:flex-col max-md:gap-4 items-center justify-between bg-white bg-opacity-10 py-4 px-4 md:px-10 rounded-3xl max-md:mx-2">
            <div className="flex max-md:flex-col items-center gap-4">
              <div className="flex flex-col justify-center items-center gap-2">
                <p className="text-5xl font-medium">01</p>
                <hr className="w-[44.82px] border-4 border-[#AB1DEE]" />
              </div>
              <h1 className="text-5xl font-medium">Web Dev</h1>
            </div>
            <p className="text-lg text-white text-opacity-50 md:w-1/2 max-md:text-center">
              Bring Your Ideas To Life With Custom Websites That Combine
              Stunning Design With Seamless Fuctionality, Ensuring A
              User-Friendly And Optimized Online Presence.
            </p>
          </div>
          <div className="flex max-md:flex-col max-md:gap-4 items-center justify-between bg-white bg-opacity-10 py-4 px-4 md:px-10 rounded-3xl max-md:mx-2">
            <div className="flex max-md:flex-col items-center gap-4">
              <div className="flex flex-col justify-center items-center gap-2">
                <p className="text-5xl font-medium">01</p>
                <hr className="w-[44.82px] border-4 border-[#AB1DEE]" />
              </div>
              <h1 className="text-5xl font-medium">Web Dev</h1>
            </div>
            <p className="text-lg text-white text-opacity-50 md:w-1/2 max-md:text-center">
              Bring Your Ideas To Life With Custom Websites That Combine
              Stunning Design With Seamless Fuctionality, Ensuring A
              User-Friendly And Optimized Online Presence.
            </p>
          </div>
          <button className="text-lg md:text-xl font-medium border-2 border-[#B925FF] py-4 px-4 md:px-12 rounded-3xl bg-[#B925FF] bg-opacity-20 mt-10">
            Demand Free Consultation
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
          <h1 className="text-5xl md:text-7xl font-medium">
            Designe & Branding
          </h1>
          <div className="flex max-md:flex-col max-md:gap-4 items-center justify-between bg-white bg-opacity-10 py-4 px-4 md:px-10 rounded-3xl max-md:mx-2">
            <div className="flex max-md:flex-col items-center gap-4">
              <div className="flex flex-col justify-center items-center gap-2">
                <p className="text-5xl font-medium">01</p>
                <hr className="w-[44.82px] border-4 border-[#AB1DEE]" />
              </div>
              <h1 className="text-5xl font-medium">Web Dev</h1>
            </div>
            <p className="text-lg text-white text-opacity-50 md:w-1/2 max-md:text-center">
              Bring Your Ideas To Life With Custom Websites That Combine
              Stunning Design With Seamless Fuctionality, Ensuring A
              User-Friendly And Optimized Online Presence.
            </p>
          </div>
          <div className="flex max-md:flex-col max-md:gap-4 items-center justify-between bg-white bg-opacity-10 py-4 px-4 md:px-10 rounded-3xl max-md:mx-2">
            <div className="flex max-md:flex-col items-center gap-4">
              <div className="flex flex-col justify-center items-center gap-2">
                <p className="text-5xl font-medium">01</p>
                <hr className="w-[44.82px] border-4 border-[#AB1DEE]" />
              </div>
              <h1 className="text-5xl font-medium">Web Dev</h1>
            </div>
            <p className="text-lg text-white text-opacity-50 md:w-1/2 max-md:text-center">
              Bring Your Ideas To Life With Custom Websites That Combine
              Stunning Design With Seamless Fuctionality, Ensuring A
              User-Friendly And Optimized Online Presence.
            </p>
          </div>
          <button className="text-lg md:text-xl font-medium border-2 border-[#B925FF] py-4 px-4 md:px-12 rounded-3xl bg-[#B925FF] bg-opacity-20 mt-10">
            Demand Free Consultation
          </button>
        </div>
      </div>

      <WhyChooseUs />
      <Form />
    </>
  );
}

export default Services;
