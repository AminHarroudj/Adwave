import clientsImg from "../assets/Vector.png";

function SatisfiedClient({ number, title }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center gap-2 bg-[#66019670] border-[#66019670] py-3 lg:py-4 px-4 lg:px-8 rounded-3xl cursor-pointer hover:border-[#B925FF] border-2 hover:bg-[#B925FF] hover:bg-opacity-80 hover:scale-125 duration-300">
        <img
          src={clientsImg}
          alt=""
          className="lg:w-[115.77px] lg:h-[82.08px] w-[80px]"
        />
        <h1 className="text-3xl lg:text-4xl font-semibold">{number}</h1>
        <p className="text-lg lg:text-xl opacity-50">{title}</p>
      </div>
    </>
  );
}

export default SatisfiedClient;
