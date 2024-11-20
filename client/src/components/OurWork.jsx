import Work from "../components/Work";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
import work4 from "../assets/work4.png";
import work5 from "../assets/work5.png";
import work6 from "../assets/work6.png";
import work7 from "../assets/work7.png";
import work8 from "../assets/work8.png";
import work9 from "../assets/work9.png";
import work10 from "../assets/work10.png";
import work11 from "../assets/work11.png";
import work12 from "../assets/work12.png";
import work13 from "../assets/work13.png";
import work14 from "../assets/work14.png";
import work15 from "../assets/work15.png";
import work16 from "../assets/work16.png";
import work17 from "../assets/work17.png";
import work18 from "../assets/work18.png";
import work19 from "../assets/work19.png";
import { useState } from "react";

function OurWork() {
  const [open, setOpen] = useState("");
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 md:mt-16 mx-2">
        <Work title={"Herfatech."} description={""}>
          <img src={work1} alt="" />
        </Work>
        <Work title={"Yalla E-COM"} description={""}>
          <img src={work2} alt="" />
        </Work>
        <Work title={"CIRRUS Voyages"} description={""}>
          <img src={work3} alt="" />
        </Work>
        <Work title={"EBACOM PANEL"} description={""}>
          <img src={work4} alt="" />
        </Work>
        <Work title={"Kitible"} description={""}>
          <img src={work5} alt="" />
        </Work>
        <Work title={"Aifa Hotels"} description={""}>
          <img src={work6} alt="" />
        </Work>
        <Work title={"AZ Fulfillment"} description={""}>
          <img src={work7} alt="" />
        </Work>
        <Work title={"GME A Domicile"} description={""}>
          <img src={work8} alt="" />
        </Work>
      </div>
      <div
        className={`${
          open ? "grid" : "hidden"
        } grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 mx-2`}
      >
        <Work title={"Les Palmas Hotels"} description={""}>
          <img src={work9} alt="" />
        </Work>
        <Work title={"Care Free Roofing"} description={""}>
          <img src={work10} alt="" />
        </Work>
        <Work title={"Just Sell."} description={""}>
          <img src={work11} alt="" />
        </Work>
        <Work title={"Yinvesti"} description={""}>
          <img src={work12} alt="" />
        </Work>
        <Work title={"MSN"} description={""}>
          <img src={work13} alt="" />
        </Work>
        <Work title={"ECETECH"} description={""}>
          <img src={work14} alt="" />
        </Work>
        <Work title={"CodexAcademy"} description={""}>
          <img src={work15} alt="" />
        </Work>
        <Work title={"Moonassir"} description={""}>
          <img src={work16} alt="" />
        </Work>
        <Work title={"Esmar"} description={""}>
          <img src={work17} alt="" />
        </Work>
        <Work title={"Giolli Algerie"} description={""}>
          <img src={work18} alt="" />
        </Work>
        <Work title={"Ekrili"} description={""}>
          <img src={work19} alt="" />
        </Work>
      </div>
      <div className="flex items-center justify-center mt-6">
        <button
          className="text-lg md:text-xl font-medium border-2 border-[#B925FF] py-4 px-4 md:px-12 rounded-3xl bg-[#180023]  mt-10 hover:bg-[#B925FF] duration-300 z-50"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? "Voir Moins" : "Voir Plus"}
        </button>
      </div>
    </>
  );
}

export default OurWork;
