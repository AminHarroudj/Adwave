import menImg from "../assets/men.png";
import { useState } from "react";
import emailjs from "emailjs-com";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_6m28qc3";
    const templateID = "template_mckatkq";
    const userID = "nXo8QqN0gsytkEchp";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send email. Please try again.");
      });
  };

  return (
    <>
      <div className="">
        <div className="flex flex-col gap-10 items-center mt-20 lg:mt-44">
          <div className="flex flex-col gap-10">
            <div className="flex justify-center lg:justify-start text-lg lg:text-xl">
              <div className="bg-[#66019670] flex items-center py-2 px-6 gap-4 rounded-full lg:mx-24 border-2 border-[#BF36FF]">
                <p className="text-[#BF36FF]">Follow</p>
                <div className="w-[2.8px] h-10 bg-white opacity-70"></div>
                <p>scroll to read more</p>
              </div>
            </div>
            <div className="text-6xl lg:text-9xl font-semibold max-lg:text-center">
              <span className="px-4 bg-[#f73cfb]">
                <span className="text-6xl lg:text-9xl font-semibold bg-[#AB1DEE]">
                  Contactez
                </span>
              </span>{" "}
              Nous
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row max-lg:justify-center max-lg:items-center gap-10 lg:mt-24 max-lg:px-6">
          <div>
            <img src={menImg} alt="" className="lg:h-[762px]" />
          </div>
          <div className="flex flex-col justify-center gap-6 lg:mr-28 lg:w-[587px]">
            <h1 className="text-4xl font-medium">
              Veuillez remplir vos informations
            </h1>
            <p className="text-xl text-white text-opacity-50">
              Merci de bien vouloir compléter vos informations afin que nous
              puissions mieux vous assister et vous offrir un service de
              qualité.
            </p>
            <form
              action=""
              className="text-white flex flex-col items-end gap-6"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                placeholder="Votre nom complet"
                className="bg-white bg-opacity-10 text-opacity-50 p-4 rounded-xl w-full outline-none"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Votre Email"
                className="bg-white bg-opacity-10 text-opacity-50 p-4 rounded-xl w-full outline-none"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="number"
                name="phone"
                placeholder="Votre numéro de téléphone"
                className="bg-white bg-opacity-10 text-opacity-50 p-4 rounded-xl w-full outline-none"
                required
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type="text"
                name="message"
                placeholder="Message"
                className="bg-white bg-opacity-10 text-opacity-50 p-4 rounded-xl w-full outline-none pb-[214px]"
                required
                value={formData.message}
                onChange={handleChange}
              />
              <button
                className="py-2 px-16 bg-[#AB1DEE] bg-opacity-30 rounded-full border-2 border-[#BF36FF] text-xl font-medium hover:bg-[#B925FF] duration-300"
                type="submit"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
