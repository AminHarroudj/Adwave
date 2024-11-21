function Client({ children }) {
  return (
    <>
      <div className="bg-[#66019670] border-2 border-[#AB1DEE] rounded-2xl py-2 px-6 flex justify-center items-center h-[90px] max-lg:h-[90px] hover:bg-[#AB1DEE] hover:bg-opacity-50 duration-300 cursor-pointer">{children}</div>
    </>
  );
}

export default Client;
