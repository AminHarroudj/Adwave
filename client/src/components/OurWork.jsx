import Work from "../components/Work";
import herfatechImg from "../assets/herfatech.png";

function OurWork() {
  return (
    <>
      <div className="flex items-center justify-center mt-24 md:mt-40">
        <div className="text-6xl md:text-9xl font-semibold max-md:text-center">
          Notre{" "}
          <span className="px-4 bg-[#f73cfb]">
            <span className="text-6xl md:text-9xl font-semibold bg-[#AB1DEE]">
              Travail
            </span>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-6 md:mt-16">
        <Work title={"Herfatech."} description={"App Mobile"}>
          <img src={herfatechImg} alt="" />
        </Work>
        <Work title={"Herfatech."} description={"App Mobile"}>
          <img src={herfatechImg} alt="" />
        </Work>
        <Work title={"Herfatech."} description={"App Mobile"}>
          <img src={herfatechImg} alt="" />
        </Work>
        <Work title={"Herfatech."} description={"App Mobile"}>
          <img src={herfatechImg} alt="" />
        </Work>
        <Work title={"Herfatech."} description={"App Mobile"}>
          <img src={herfatechImg} alt="" />
        </Work>
        <Work title={"Herfatech."} description={"App Mobile"}>
          <img src={herfatechImg} alt="" />
        </Work>
        <Work title={"Herfatech."} description={"App Mobile"}>
          <img src={herfatechImg} alt="" />
        </Work>
        <Work title={"Herfatech."} description={"App Mobile"}>
          <img src={herfatechImg} alt="" />
        </Work>
        <Work title={"Herfatech."} description={"App Mobile"}>
          <img src={herfatechImg} alt="" />
        </Work>
        <Work title={"Herfatech."} description={"App Mobile"}>
          <img src={herfatechImg} alt="" />
        </Work>
      </div>
    </>
  );
}

export default OurWork;
