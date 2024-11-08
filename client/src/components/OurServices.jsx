import Service from "../components/Service";

function OurServices() {
  return (
    <>
      <div className="flex flex-col gap-10 items-center mt-56">
        <div className="flex flex-col gap-10">
          <div className="flex justify-center md:justify-end text-lg md:text-xl">
            <div className="bg-[#66019670] flex items-center py-2 px-6 gap-4 rounded-full md:mx-20 border-2 border-[#BF36FF]">
              <p className="text-[#BF36FF]">Follow</p>
              <div className="w-[2.8px] h-10 bg-white opacity-70"></div>
              <p>scroll to read more</p>
            </div>
          </div>
          <div className="text-6xl md:text-9xl font-semibold max-md:text-center">
            Our{" "}
            <span className="px-4 bg-[#f73cfb]">
              <span className="text-6xl md:text-9xl font-semibold bg-[#AB1DEE]">
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
    </>
  );
}

export default OurServices;
