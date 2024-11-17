import Service from "../components/Service";

function OurServices() {
  return (
    <>
      <div className="flex flex-col gap-10 items-center mt-20 md:mt-56">
        <div className="flex flex-col gap-10">
          <div className="flex justify-center md:justify-end text-lg md:text-xl">
            <div className="bg-[#66019670] flex items-center py-2 px-6 gap-4 rounded-full md:mx-20 border-2 border-[#BF36FF]">
              <p className="text-[#BF36FF]">Follow</p>
              <div className="w-[2.8px] h-10 bg-white opacity-70"></div>
              <p>scroll to read more</p>
            </div>
          </div>
          <div className="text-6xl md:text-9xl font-semibold max-md:text-center">
            Our{" "}
            <span className="px-4 bg-[#f73cfb]">
              <span className="text-6xl md:text-9xl font-semibold bg-[#AB1DEE]">
                Services
              </span>
            </span>
          </div>
        </div>
        <div>
          <Service
            num={"14"}
            title={"Digital Marketing"}
            description={`Nous élaborons des stratégies de marketing digital pour accroître votre visibilité en ligne et attirer plus de clients`}
          />
          <Service
            num={"03"}
            title={"Web Dev"}
            description={`Nous créons des sites web professionnels, fonctionnels et esthétiques. Nos services de développement web.`}
          />
          <Service
            num={"07"}
            title={"Mobile Dev"}
            description={`Notre équipe de développeurs mobiles crée des applications natives et hybrides pour iOS et Android, conçues pour offrir une expérience`}
          />
          <Service
            num={"09"}
            title={"Graphic Design"}
            description={`Nous croyons que le design est au coeur de toute bonne communication visuelle. Nos services de design`}
          />
        </div>
      </div>
    </>
  );
}

export default OurServices;
