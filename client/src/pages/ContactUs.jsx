import Form from "../components/Form";
import Location from "../components/Location";
import bg from "../assets/background3.png";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

function ContactUs() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('${bg}')`,
          backgroundRepeat: "no-repeat",
        }}
        className="bg-top lg:bg-cover lg:bg-left-top"
      >
        <motion.div className="flex flex-col items-center pt-72 lg:pt-48">
          <motion.div
            className="flex flex-col justify-center text-center items-center gap-4"
            initial={{
              y: -50,
            }}
            whileInView={{
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <h1 className="text-7xl lg:text-9xl font-semibold">Contact Us</h1>
            <p className="text-lg lg:text-2xl opacity-50">
              Valoriser les marques ... Enrichir les expériences
            </p>
          </motion.div>
        </motion.div>
        <Form />
        <Location />
        <Footer />
      </div>
    </>
  );
}

export default ContactUs;
