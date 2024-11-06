import { FaAngleRight } from "react-icons/fa6";

function Service({ num, title, description }) {
  return (
    <div className="flex justify-around items-center px-16 border-t-4 border-b-4 border-[#AB1DEE] h-[273px]  bg-[#B925FF] bg-opacity-20">
      <div className="flex flex-col items-start">
        <h1 className="text-7xl font-medium">{num}</h1>
        <hr className="w-[75.72px] border-4 border-[#AB1DEE]" />
      </div>
      <h1 className="text-8xl font-medium">{title}</h1>
      <p className="text-lg w-[28%]">{description}</p>
      <div className="w-[75px] h-[75px] flex justify-center items-center text-4xl border-2 border-white border-opacity-50 bg-white bg-opacity-10 rounded-3xl cursor-pointer">
        <FaAngleRight />
      </div>
    </div>
  );
}

export default Service;
