function SatisfiedClient({ children, number, title }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center gap-2 bg-[#66019670] border-[#66019670] py-3 px-4 lg:px-6 rounded-3xl cursor-pointer hover:border-[#B925FF] border-2 hover:bg-[#B925FF] hover:bg-opacity-80 hover:scale-125 duration-300">
        <div className="flex flex-col justify-between items-center gap-2">
          <div>{children}</div>
          <div>
            <h1 className="text-3xl lg:text-4xl font-semibold">{number}</h1>
            <p className="text-lg lg:text-xl opacity-50">{title}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SatisfiedClient;
