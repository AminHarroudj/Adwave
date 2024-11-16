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
            num={"01"}
            title={"Sites Vitrines"}
            description={`Présentez votre entreprise et vos services de manière attrayante et efficace.`}
          />
          <Service
            num={"02"}
            title={"Sites E-commerce"}
            description={`Lancez une boutique en ligne performante et sécurisée pour augmenter vos ventes et élargir votre marché.`}
          />
          <Service
            num={"03"}
            title={"Applications Web"}
            description={`Développez des applications web personnalisées pour améliorer vos processus métier et offrir une meilleure expérience utilisateur.`}
          />
          <Service
            num={"04"}
            title={"Sites Web Personnalisés"}
            description={`Création de sites web sur mesure adaptés à votre entreprise et à vos besoins spécifiques.`}
          />
          <Service
            num={"05"}
            title={"Sites Web Dynamiques"}
            description={`Développement de sites web interactifs qui permettent une gestion facile du contenu et des fonctionnalités avancées.`}
          />
          <Service
            num={"06"}
            title={"Maintenance et Support"}
            description={`Service de maintenance continue pour assurer le bon fonctionnement et la mise à jour régulière de votre site web`}
          />
          <Service
            num={"07"}
            title={"Applications Mobiles Natives"}
            description={`Développement d'applications robustes et performantes spécifiques à chaque plateforme.`}
          />
          <Service
            num={"08"}
            title={"Applications Mobiles Hybrides"}
            description={`Développement d'applications multi-plateformes qui fonctionnent sur plusieurs systèmes d'exploitation avec un seul code source.`}
          />
          <Service
            num={"09"}
            title={"Design Graphique"}
            description={`Création de logos, identités visuelles, et supports de communication variés.`}
          />
          <Service
            num={"10"}
            title={"UI/UX Design"}
            description={`Conception d'interfaces utilisateur intuitives et attractives pour améliorer l'expérience utilisateur.`}
          />
          <Service
            num={"11"}
            title={"Vidéos Promotionnelles"}
            description={`Production et montage de vidéos pour promouvoir vos produits et services.`}
          />
          <Service
            num={"12"}
            title={"Vidéos d'Entreprise"}
            description={`Création de vidéos institutionnelles pour renforcer l'image de votre entreprise.`}
          />
          <Service
            num={"13"}
            title={"Publicité en Ligne"}
            description={`Gestion de campagnes publicitaires sur les réseaux sociaux et les moteurs de recherche pour atteindre votre public cible.`}
          />
          <Service
            num={"14"}
            title={"Stratégie Marketing"}
            description={`Développement de stratégies marketing complètes et personnalisées pour répondre à vos objectifs commerciaux.`}
          />
          <Service
            num={"15"}
            title={"Community Management"}
            description={`Gestion de vos réseaux sociaux pour créer une communauté engagée et fidéliser vos clients.`}
          />
          <Service
            num={"16"}
            title={"Création de Sites E-commerce"}
            description={`Conception et développement de boutiques en ligne performantes.`}
          />
          <Service
            num={"17"}
            title={"Optimisation des Ventes"}
            description={`Mise en place de stratégies pour augmenter vos ventes et améliorer l'expérience client.`}
          />
        </div>
      </div>
    </>
  );
}

export default OurServices;
