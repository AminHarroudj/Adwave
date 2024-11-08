import { motion } from "framer-motion";
import bg from "../assets/pc.jpeg";

function BestQuality({ num, title, description }) {
  return (
    <>
      <motion.div
        className="flex flex-col mt-10 gap-4 md:gap-10 bg-[#66019670] p-6 rounded-3xl"
        whileHover={{
          y: -30,
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
        <div className="flex items-center gap-4 text-2xl">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl md:text-6xl font-medium">{num}</h1>
            <hr className="w-[40px] md:w-[60.21px] border-4 border-[#AB1DEE]" />
          </div>
          <div className="flex flex-col">
            <h1>{title}</h1>
            <div className="flex items-center">
              <hr className="w-[149px] border-2 border-[#AB1DEE]" />
              <div className="bg-[#AB1DEE] p-2 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="md:text-xl opacity-50">
          <p>{description}</p>
        </div>
      </motion.div>
    </>
  );
}

export default BestQuality;
