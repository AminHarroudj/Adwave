import { motion } from "framer-motion";

function Work({ children, title, description }) {
  return (
    <>
      <motion.div className="flex flex-col justify-center items-center text-center cursor-pointer"
      whileHover={{
        y:-20
      }}
      transition={{
        duration:0.5
      }}>
        <div>{children}</div>
        <h1 className="text-2xl md:text-3xl font-medium">{title}</h1>
        <p className="text-lg text-opacity-50 text-white">{description}</p>
      </motion.div>
    </>
  );
}

export default Work;
