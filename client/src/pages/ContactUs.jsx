import Form from "../components/Form";
import Location from "../components/Location";
import bg from "../assets/background3.png";
import Footer from "../components/Footer";

function ContactUs() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('${bg}')`,
          backgroundPosition: "0 0",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center pt-32 md:pt-72">
          <div className="flex flex-col justify-center text-center items-center gap-4">
            <h1 className="text-7xl md:text-9xl font-semibold">Contact Us</h1>
            <p className="text-lg md:text-2xl opacity-50">
              Empowring Brands ... Enriching Experiences
            </p>
          </div>
        </div>
        <Form />
        <Location />
        <Footer />
      </div>
    </>
  );
}

export default ContactUs;
