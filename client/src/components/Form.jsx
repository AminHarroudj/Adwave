import menImg from "../assets/men.png";
import { useState } from "react";
import Swal from "sweetalert2";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c0409d2f-79cd-41d3-88b1-9fed84b40d9e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Successe!",
        text: "Your message sent successeful!",
        icon: "success",
      });
    }
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
              onSubmit={onSubmit}
            >
              <input
                type="text"
                name="name"
                placeholder="Votre nom complet"
                className="bg-white bg-opacity-10 text-opacity-50 p-4 rounded-xl w-full outline-none"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Votre Email"
                className="bg-white bg-opacity-10 text-opacity-50 p-4 rounded-xl w-full outline-none"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <input
                type="number"
                name="phone"
                placeholder="Votre numéro de téléphone"
                className="bg-white bg-opacity-10 text-opacity-50 p-4 rounded-xl w-full outline-none"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                required
              />
              <input
                type="text"
                name="message"
                placeholder="Message"
                className="bg-white bg-opacity-10 text-opacity-50 p-4 rounded-xl w-full outline-none pb-[214px]"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                required
              />
              <button className="py-2 px-16 bg-[#AB1DEE] bg-opacity-30 rounded-full border-2 border-[#BF36FF] text-xl font-medium hover:bg-[#B925FF] duration-300">
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
