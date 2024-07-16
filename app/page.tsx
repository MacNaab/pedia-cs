import { Carousel } from "@/components/carousel";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between py-24 px-4">
      <Carousel
        colors={[
          "bg-indigo-300",
          "bg-yellow-300",
          "bg-blue-300",
          "bg-green-300",
          "bg-purple-300",
          "bg-red-300",
        ]}
      >
        <div>
          <h2 className="text-3xl text-center font-extrabold">Pédiatrie</h2>
          <div className="text-justify text-sm mt-1">
            Mpedia est un site dédié aux parents et futurs parents, créé par
            l’Association Française de Pédiatrie Ambulatoire (AFPA). Il offre
            des conseils fiables et validés par des experts de la santé
            infantile, couvrant des sujets tels que la santé, le sommeil, les
            pleurs, l’éveil et le développement des enfants de 0 à 11 ans. Le
            site propose également un service de chat en direct avec des
            pédiatres pour répondre aux questions urgentes des parents.
          </div>
          <div className="flex justify-center my-2">
            <a
              target="_blank"
              href="https://www.mpedia.fr/"
              className="text-center mx-auto text-blue-800 italic font-semibold"
            >
              https://www.mpedia.fr/
            </a>
          </div>
          <div className="text-justify text-sm mt-1">
            Ce site, conçu par Santé publique France, vise à informer les futurs
            parents et parents d’enfants de moins de deux ans sur l’importance
            des 1000 premiers jours de vie. Il aborde des sujets variés comme la
            grossesse, l’alimentation, le développement de l’enfant et les
            interactions parent-enfant. Le site propose des articles, des
            vidéos, des conseils pratiques et des réponses aux questions
            fréquentes pour aider les parents à bien démarrer cette période
            cruciale.
          </div>
          <div className="flex justify-center my-2">
            <a
              target="_blank"
              href="https://www.1000-premiers-jours.fr"
              className="text-center mx-auto text-blue-800 italic font-semibold"
            >
              https://www.1000-premiers-jours.fr
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-3xl text-center font-extrabold">Orthophoniste</h2>
          <div className="text-justify text-sm mt-1">
            Allo Ortho est un site de prévention en orthophonie destiné au grand
            public. Il a été créé pour répondre aux questions des parents,
            aidants et patients concernant les troubles du langage, de la
            communication, de la cognition mathématique et de la déglutition. Le
            site fournit des informations de qualité pour aider à déterminer si
            une consultation en orthophonie est nécessaire et propose des
            conseils pour mieux comprendre et gérer ces troubles.
          </div>
          <div className="flex justify-center my-2">
            <a
              target="_blank"
              href="https://www.allo-ortho.com/"
              className="text-center mx-auto text-blue-800 italic font-semibold"
            >
              https://www.allo-ortho.com/
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-3xl text-center font-extrabold">
            Enurésie nocturne
          </h2>
          <div className="text-justify text-sm mt-1">
            Pipi-au-lit.net est un site dédié à l’énurésie nocturne (pipi au
            lit) chez les enfants. Il offre des conseils pratiques pour aider
            les enfants et leurs parents à surmonter ce problème. Le site
            propose des informations sur les causes de l’énurésie, des solutions
            pour y remédier, des témoignages et des outils comme un carnet de
            suivi personnel et des jeux éducatifs pour encourager les bonnes
            habitudes.
          </div>
          <div className="flex justify-center my-2">
            <a
              target="_blank"
              href="https://www.pipi-au-lit.net/"
              className="text-center mx-auto text-blue-800 italic font-semibold"
            >
              https://www.pipi-au-lit.net/
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-3xl text-center font-extrabold">Dermatologie</h2>
          <div className="text-justify text-sm mt-1">
            Dermato-Info est le site grand public de la Société Française de
            Dermatologie. Il fournit des informations sur les maladies de la
            peau, leurs traitements et la prévention. Le site est destiné aux
            patients, à leurs proches et au grand public, offrant des
            explications détaillées, des conseils pratiques et des ressources
            éducatives pour mieux comprendre et gérer les problèmes
            dermatologiques.
          </div>
          <div className="flex justify-center my-2">
            <a
              target="_blank"
              href="https://dermato-info.fr/"
              className="text-center mx-auto text-blue-800 italic font-semibold"
            >
              https://dermato-info.fr/
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-3xl text-center font-extrabold">Nutrition</h2>
          <div className="text-justify text-sm mt-1">
            Manger Bouger est le site de référence du Programme National
            Nutrition Santé (PNNS). Il vise à promouvoir une alimentation
            équilibrée et une activité physique régulière pour améliorer la
            santé publique. Le site propose des recettes, des idées d’activités,
            des conseils nutritionnels et des outils interactifs comme la
            “Fabrique à Menus” pour aider les utilisateurs à planifier des repas
            équilibrés et à adopter un mode de vie sain.
          </div>
          <div className="flex justify-center my-2">
            <a
              target="_blank"
              href="https://www.mangerbouger.fr/"
              className="text-center mx-auto text-blue-800 italic font-semibold"
            >
              https://www.mangerbouger.fr/
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-3xl text-center font-extrabold">Santé Publique</h2>
          <div className="text-justify text-sm mt-1">
            Santé Publique France est l’agence nationale de santé publique. Sa
            mission est d’améliorer et de protéger la santé des populations en
            France. Le site offre des informations sur la surveillance
            épidémiologique, la prévention des maladies, la promotion de la
            santé et la gestion des crises sanitaires. Il propose également des
            publications, des études et des outils de prévention pour les
            professionnels de santé et le grand public.
          </div>
          <div className="flex justify-center my-2">
            <a
              target="_blank"
              href="https://www.santepubliquefrance.fr/"
              className="text-center mx-auto text-blue-800 italic font-semibold"
            >
              https://www.santepubliquefrance.fr/
            </a>
          </div>
        </div>
      </Carousel>
    </main>
  );
}
