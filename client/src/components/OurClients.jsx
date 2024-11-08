import Client from "../components/Client";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";
import img9 from "../assets/9.png";
import img10 from "../assets/10.png";

function OurClients() {
  return (
    <>
      <div className="flex items-center justify-center mt-20 md:mt-44">
        <div className="text-6xl md:text-9xl font-semibold max-md:text-center">
          Our{" "}
          <span className="px-4 bg-[#f73cfb]">
            <span className="text-6xl md:text-9xl font-semibold bg-[#AB1DEE]">
              Clients
            </span>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 p-16 mt-6 gap-10">
        <Client>
          <img src={img1} alt="" />
        </Client>
        <Client>
          <img src={img2} alt="" />
        </Client>
        <Client>
          <img src={img3} alt="" />
        </Client>
        <Client>
          <img src={img4} alt="" />
        </Client>
        <Client>
          <img src={img5} alt="" />
        </Client>
        <Client>
          <img src={img6} alt="" />
        </Client>
        <Client>
          <img src={img7} alt="" />
        </Client>
        <Client>
          <img src={img8} alt="" />
        </Client>
        <Client>
          <img src={img9} alt="" />
        </Client>
        <Client>
          <img src={img10} alt="" />
        </Client>
      </div>
    </>
  );
}

export default OurClients;
