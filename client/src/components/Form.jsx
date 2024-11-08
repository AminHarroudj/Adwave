import menImg from "../assets/men.png";

function Form() {
  return (
    <>
      <div className="flex flex-col gap-10 items-center mt-20 md:mt-44">
        <div className="flex flex-col gap-10">
          <div className="flex justify-center md:justify-start text-lg md:text-xl">
            <div className="bg-[#66019670] flex items-center py-2 px-6 gap-4 rounded-full md:mx-24 border-2 border-[#BF36FF]">
              <p className="text-[#BF36FF]">Follow</p>
              <div className="w-[2.8px] h-10 bg-white opacity-70"></div>
              <p>scroll to read more</p>
            </div>
          </div>
          <div className="text-6xl md:text-9xl font-semibold max-md:text-center">
            <span className="px-4 bg-[#f73cfb]">
              <span className="text-6xl md:text-9xl font-semibold bg-[#AB1DEE]">
                Contact
              </span>
            </span>{" "}
            Us
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row max-md:justify-center max-md:items-center gap-10 md:mt-24 max-md:px-6">
        <div>
          <img src={menImg} alt="" className="md:h-[762px]" />
        </div>
        <div className="flex flex-col justify-center gap-6 md:mr-28 md:w-[587px]">
          <h1 className="text-4xl font-medium">Please fill your infos</h1>
          <p className="text-xl text-white text-opacity-50">
            Content Content Content Content Content Content Content Content
            Content
          </p>
          <form action="" className="text-white flex flex-col items-end gap-6">
            <input
              type="text"
              placeholder="Your Full Name"
              className="bg-white bg-opacity-10 text-opacity-50 p-4 rounded-xl w-full outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-white bg-opacity-10 text-opacity-50 p-4 rounded-xl w-full outline-none"
            />
            <input
              type="number"
              placeholder="Your Phone Number"
              className="bg-white bg-opacity-10 text-opacity-50 p-4 rounded-xl w-full outline-none"
            />
            <input
              type="text"
              placeholder="Message"
              className="bg-white bg-opacity-10 text-opacity-50 p-4 rounded-xl w-full outline-none pb-[214px]"
            />
            <button className="py-2 px-16 bg-[#AB1DEE] bg-opacity-30 rounded-full border-2 border-[#BF36FF] text-xl font-medium hover:bg-[#B925FF] duration-300">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
