import { FaAngleRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import bg from "../assets/pc.jpeg";

function Service({ num, title, description }) {
  return (
    <motion.div
      className="grid grid-cols-1 gap-20 max-md:gap-4 max-md:py-4 md:grid-cols-2 justify-start items-center px-2 md:px-16 border-t-4 border-b-4 border-[#AB1DEE] md:h-[273px]  bg-[#B925FF] bg-opacity-20"
      whileHover={{
        backgroundImage: `url('${bg}')`,
        backgroundPosition: "0 0",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
        backgroundColor: `rgba(171, 29, 238, 0.8)`,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-10">
        <div className="flex flex-col items-start">
          <h1 className="text-4xl md:text-7xl font-medium">{num}</h1>
          <hr className="w-[52.72px] md:w-[75.72px] border-4 border-[#AB1DEE]" />
        </div>
        <h1 className="text-4xl md:text-6xl font-medium max-md:text-center">
          {title}
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-10">
        <p className="md:text-lg max-md:text-center md:w-3/4">
          {description}
        </p>
        <div className="w-[75px] h-[75px] flex justify-center items-center text-4xl border-2 border-white border-opacity-50 bg-white bg-opacity-10 rounded-3xl cursor-pointer">
          <FaAngleRight />
        </div>
      </div>
    </motion.div>
  );
}

export default Service;
