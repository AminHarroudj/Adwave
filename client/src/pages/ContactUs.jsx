import Form from "../components/Form";
import Location from "../components/Location";

function ContactUs() {
  return (
    <>
      <div className="flex flex-col items-center pt-24 md:pt-44">
        <div className="flex flex-col justify-center text-center items-center gap-4">
          <h1 className="text-7xl md:text-9xl font-semibold">Contact Us</h1>
          <p className="text-lg md:text-2xl opacity-50">
            Empowring Brands ... Enriching Experiences
          </p>
        </div>
      </div>
      <Form />
      <Location />
    </>
  );
}

export default ContactUs;
