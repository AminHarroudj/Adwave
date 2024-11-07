import bg from "../assets/pc.jpeg";

function Project({ year, title, description }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-5xl md:text-8xl font-medium">{year}</h1>
        <div
          className="flex flex-col justify-end gap-4 border-4 border-[#BF36FF] p-6 rounded-3xl md:w-[656.48px] md:h-[385px]"
          style={{
            backgroundImage: `url('${bg}')`,
            backgroundPosition: "0 0",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: `rgba(171, 29, 238, 1)`,
            backgroundBlendMode: "multiply",
          }}
        >
          <h1 className="text-3xl md:text-5xl font-medium">{title}</h1>
          <p className="text-lg md:text-[24px] opacity-70">{description}</p>
        </div>
      </div>
    </>
  );
}

export default Project;
