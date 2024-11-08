import { FaAngleRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import bg from "../assets/pc.jpeg";

function Service({ num, title, description }) {
  return (
    <motion.div
      className="flex flex-col max-md:gap-4 max-md:py-4 md:flex-row justify-around items-center px-2 md:px-16 border-t-4 border-b-4 border-[#AB1DEE] md:h-[273px]  bg-[#B925FF] bg-opacity-20"
      whileHover={{
        backgroundImage: `url('${bg}')`,
        backgroundPosition: "0 0",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <div className="flex flex-col items-start">
        <h1 className="text-5xl md:text-7xl font-medium">{num}</h1>
        <hr className="w-[52.72px] md:w-[75.72px] border-4 border-[#AB1DEE]" />
      </div>
      <h1 className="text-5xl md:text-8xl font-medium max-md:text-center">
        {title}
      </h1>
      <p className="md:text-lg md:w-[28%] max-md:text-center">{description}</p>
      <div className="w-[75px] h-[75px] flex justify-center items-center text-4xl border-2 border-white border-opacity-50 bg-white bg-opacity-10 rounded-3xl cursor-pointer">
        <FaAngleRight />
      </div>
    </motion.div>
  );
}

export default Service;
