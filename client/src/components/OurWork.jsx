import Work from "../components/Work";
import herfatechImg from "../assets/herfatech.png";

function OurWork() {
  return (
    <>
      <div className="flex items-center justify-center mt-20 md:mt-44">
        <div className="text-6xl md:text-9xl font-semibold max-md:text-center">
          Our{" "}
          <span className="px-4 bg-[#f73cfb]">
            <span className="text-6xl md:text-9xl font-semibold bg-[#AB1DEE]">
              Work
            </span>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-16">
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
    </>
  );
}

export default OurWork;
