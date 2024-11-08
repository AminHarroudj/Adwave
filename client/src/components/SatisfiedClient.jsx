import clientsImg from "../assets/Vector.png";

function SatisfiedClient() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center gap-2 bg-[#66019670] border-[#66019670] py-4 px-8 rounded-3xl cursor-pointer hover:border-[#B925FF] border-2 hover:bg-[#B925FF] hover:bg-opacity-80 hover:scale-125 duration-300">
        <img src={clientsImg} alt="" className="w-[115.77px] h-[82.08px]"/>
        <h1 className="text-4xl font-semibold">300+</h1>
        <p className="text-xl opacity-50">Satisfied Client</p>
      </div>
    </>
  );
}

export default SatisfiedClient;
