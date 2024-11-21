import Service from "../components/Service";

function Plan() {
  return (
    <>
      <div className="flex flex-col gap-10 items-center mt-20 lg:mt-40">
        <div className="flex flex-col gap-10">
          <div className="flex justify-center lg:justify-end text-lg lg:text-xl">
            <div className="bg-[#66019670] flex items-center py-2 px-6 gap-4 rounded-full lg:mx-20 border-2 border-[#BF36FF]">
              <p className="text-[#BF36FF]">Follow</p>
              <div className="w-[2.8px] h-10 bg-white opacity-70"></div>
              <p>scroll to read more</p>
            </div>
          </div>
          <div className="text-6xl lg:text-9xl font-semibold max-lg:text-center">
            Notre{" "}
            <span className="px-4 bg-[#f73cfb]">
              <span className="text-6xl lg:text-9xl font-semibold bg-[#AB1DEE]">
                Plan
              </span>
            </span>
          </div>
        </div>
        <div>
          <Service
            num={"01"}
            title={"Analyse et Audit"}
            description={`Nous commençons par une analyse approfondie de votre situation actuelle et de vos besoins, en identifiant les faiblesses et les opportunités.`}
          />
          <Service
            num={"02"}
            title={"Stratégie sur Mesure"}
            description={`Ensuite, nous élaborons une stratégie digitale personnalisée, incluant la création de contenu, l'optimisation des réseaux sociaux, et le développement web, pour vous positionner comme un leader dans votre secteur.`}
          />
          <Service
            num={"03"}
            title={"Exécution et Suivi"}
            description={`Enfin, nous mettons en oeuvre la stratégie avec un suivi régulier, ajustant les actions en fonction des résultats pour garantir que vous atteignez vos objectifs.`}
          />
        </div>
      </div>
    </>
  );
}

export default Plan;
