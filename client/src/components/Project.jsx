import bg from "../assets/pc.jpeg";
import { motion } from "framer-motion";

function Project({ year, title, description }) {
  return (
    <>
      <motion.div
        className="flex flex-col items-center pt-10 max-lg:h-[336px]"
        initial={{
          y: 0,
        }}
        whileHover={{
          y: -30,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <h1 className="text-5xl lg:text-8xl font-medium">{year}</h1>
        <motion.div
          className="flex flex-col gap-4 border-4 border-[#BF36FF] p-6 rounded-3xl lg:w-[656.48px] h-full lg:h-[385px]"
          style={{
            backgroundImage: `url('${bg}')`,
            backgroundPosition: "0 0",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: `rgba(171, 29, 238, 1)`,
            backgroundBlendMode: "multiply",
          }}
          initial={{
            justifyContent: "end",
            textAlign: "start",
          }}
          whileHover={{
            textAlign: "center",
            justifyContent: "center",
            backgroundColor: `rgba(171, 29, 238, 0.5)`,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <motion.h1 className="text-3xl lg:text-5xl font-medium">
            {title}
          </motion.h1>
          <motion.p className="text-lg lg:text-[24px] opacity-70">
            {description}
          </motion.p>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Project;
