import Service from "../components/Service";

function OurServices() {
  return (
    <>
      <div className="flex flex-col gap-10 items-center mt-20 lg:mt-40">
        <div className="flex flex-col gap-10">
          <div className="text-6xl lg:text-9xl font-semibold max-lg:text-center">
            Nos{" "}
            <span className="px-4 bg-[#f73cfb]">
              <span className="text-6xl lg:text-9xl font-semibold bg-[#AB1DEE]">
                Services
              </span>
            </span>
          </div>
        </div>
        <div>
          <Service
            num={"01"}
            title={"Digital Marketing"}
            description={`Nous élaborons des stratégies de marketing digital pour accroître votre visibilité en ligne et attirer plus de clients`}
          />
          <Service
            num={"02"}
            title={"Web Dev"}
            description={`Nous créons des sites web professionnels, fonctionnels et esthétiques. Nos services de développement web.`}
          />
          <Service
            num={"03"}
            title={"Mobile Dev"}
            description={`Notre équipe de développeurs mobiles crée des applications natives et hybrides pour iOS et Android, conçues pour offrir une expérience`}
          />
          <Service
            num={"04"}
            title={"Graphic Design"}
            description={`Nous croyons que le design est au coeur de toute bonne communication visuelle. Nos services de design`}
          />
        </div>
      </div>
    </>
  );
}

export default OurServices;
