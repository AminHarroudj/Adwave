

function Member({ children, name, job, description }) {
  return (
    <>
      <div className="w-[500px] lg:w-[750px] flex flex-col gap-4 ml-2 lg:ml-10 pt-10">
        <div className="flex flex-col gap-2 lg:gap-4 px-6">
          <h1 className="text-4xl lg:text-5xl font-medium">{name}</h1>
          <div className="flex items-center gap-4">
            <p className="text-xl text-white text-opacity-50">{job}</p>
            <div className="flex items-center">
              <hr className="lg:w-[285px] border-2 border-[#AB1DEE]" />
              <div className="bg-[#AB1DEE] p-2 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex gap-40 lg:gap-72 bg-[#66019670] bg-opacity-30 py-6 px-6 rounded-3xl border-2 border-[#AB1DEE]">
            <div className="flex flex-col gap-2 lg:gap-6">
              <p className="leading-loose">
                {description}
              </p>
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-medium">Social Media</h1>
                <div className="flex gap-4 z-50">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Member;
