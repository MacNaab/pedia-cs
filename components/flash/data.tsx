export const dataKeys = {
  Pédiatrie: [
    "Asthme du nourrisson",
    "Colite du nourrisson",
    "Défenses immunitaires",
    "Enurésie primaire",
    "Fontanelle",
    "Mycose buccale",
    "Vaccination",
  ],
  Dermatologie: [
    "Dermatite atopique",
    "Dermite séborrhéique du nourrisson",
    "Hyperhidrose",
    "Protection solaire",
    "Prurigo",
    "Psoriasis",
    "Tâches cafés",
    "Verrue",
  ],
  Gynécologie: ["Contraception", "Dysménorrhée"],
  Mère: ["Césarienne", "Montée de lait"],
};

export const data = {
  "Asthme du nourrisson": (
    <div>
      <p>
        <b>Ventoline :</b>
      </p>
      <p className="ml-2">- nombre de bouffées = poids / 3 sans dépasser 10</p>
      <p className="italic text-sm mt-2">
        A noter: râles transmit &quot;physiologique&quot; (ORL) jusque 6 ans,
      </p>
    </div>
  ),
  "Colite du nourrisson": (
    <div>
      <p className="text-justify">
        Les coliques du nourrisson apparaissent quelques semaines après la
        naissance. Elles sont dues à des spasmes de l’intestin. Elles se
        traduisent par des 
        <b>
          crises de pleurs survenant le plus souvent après la tétée ou le
          biberon
        </b>
        . Ces crises sont déconcertantes pour les parents, parce qu’elles
        surviennent soudainement et disparaissent d’elles-mêmes. L’origine de
        ces coliques est difficile à déterminer. Ces crises disparaissent
        généralement au cours du troisième ou du quatrième mois, aussi
        soudainement qu’elles sont apparues.
      </p>
      <div className="my-2 font-semibold text-xl">
        Comment soulager une colique du nourrisson ?
      </div>
      <ul className="list-disc ml-4">
        <li className="text-justify">
          Si vous allaitez votre enfant, vous pouvez essayer de ne plus
          consommer de lait et de produits laitiers pendant une semaine pour
          voir si les coliques du bébé se calment. Si c’est le cas, demandez à
          votre médecin de vous prescrire un complément alimentaire ou un
          médicament contenant du calcium.
        </li>
        <li className="text-justify">
          Veillez à ce que votre bébé avale le moins d’air possible lors des
          tétées en s’assurant qu’il prenne bien le téton en bouche ou en
          maintenant son biberon incliné.
        </li>
        <li className="text-justify">
          Si vous lui donnez le biberon, votre médecin vous conseillera
          peut-être d’essayer un lait sans lactose. Ne changez pas le régime
          alimentaire de votre enfant sans l’avis de votre médecin et n’utilisez
          pas de médicament sans ordonnance sans lui en parler au préalable.
        </li>
        <li className="text-justify">
          Faites-lui faire son rot après son repas et attendez un peu avant de
          le coucher.
        </li>
        <li className="text-justify">
          Une bouillotte tiède posée sur son ventre peut contribuer à calmer
          les ballonnements.
        </li>
        <li className="text-justify">
          S’il pleure, prenez-le dans vos bras, promenez-le ou bercez-le. Les
          balades en poussette ou en voiture sont parfois efficaces. Vous pouvez
          également essayer de lui masser les bras, les jambes ou le dos (en le
          mettant à plat ventre sur vos genoux).
        </li>
        <li className="text-justify">
          Si possible, évitez de paniquer ou de vous énerver, vous risqueriez de
          communiquer votre stress à votre bébé, ce qui aggraverait la
          situation. Si vous êtes épuisé par les cris et les pleurs de votre
          enfant, demandez de l’aide à vos proches pour prendre le relais et
          pouvoir vous reposer.
        </li>
      </ul>
      <div className="my-2 font-semibold text-xl">Prescription:</div>
      <div>
        <div className="italic font-bold">BIOGAIA:</div>
        <div className="ml-3">5 gouttes / jour</div>
        <div className="ml-3 italic">probiotiques non remboursés</div>
        <div className="italic">Sinon essaie changement de lait pour AC</div>
      </div>
    </div>
  ),
  "Défenses immunitaires": (
    <div>
      <p>
        <b>Possibilité de prescrire un boost des défenses immunitaires:</b>
      </p>
      <p className="ml-2">OLIGOSOL MANGANESE</p>
      <p className="ml-4">- Non remboursé</p>
      <p className="ml-4">- Cures de 15 jours x 3</p>
    </div>
  ),
  "Enurésie primaire": (
    <div>
      <p>Souvent ATCD familial ou psy</p>
      <p className="mt-2">
        <b>Traitement:</b>
      </p>
      <p className="ml-2">- hypnothérapie</p>
      <p className="ml-2">- sophrologie</p>
      <p className="ml-2">- si échec avec {"âge >"} 6 ans:</p>
      <p className="ml-4 font-semibold">MINIRINMELT 240 μg</p>
      <p className="ml-6">1 cp le soir pendant 1 mois</p>
      <p className="ml-6 italic">éviter de boire de {"l'eau"} après le diner</p>
    </div>
  ),
  Fontanelle: (
    <div>
      <p>{"Si absence de fermeture > 18 mois:"}</p>
      <p className="ml-2">- bilan thyroïdien</p>
      <p className="ml-2">- bilan phospho-calcique et vitamine D</p>
    </div>
  ),
  "Mycose buccale": (
    <div>
      <p>
        Le muguet buccal est une infection causée par la 
        <b>prolifération d’un champignon</b> de la langue, le{" "}
        <span className="italic">Candida Albicans</span>. Ce champignon est
        naturellement présent dans l’organisme (dans les muqueuses) et sa
        présence contrôlée ne constitue aucun risque sanitaire particulier.
        C’est lorsqu’il prolifère, profitant d’un affaiblissement des défenses
        immunitaires de l’organisme, que le 
        <b className="italic">Candida Albicans</b> entraîne l’infection appelée
        candidose.
      </p>
      <div className="my-2 font-semibold text-xl">Traitement:</div>
      <ol className="list-decimal ml-4">
        <li>Bicarbonate 1.4%</li>
        <div className="ml-6 italic">
          - lavage bouche + seins avec une compresse 15 min après chaque repas
        </div>
        <li>FUNGIZONE 10% nourrissons suspension buvable</li>
        <div className="ml-6 italic">- 1 ml pour 2 kg/24h</div>
        <div className="ml-6 italic">- 2 à 3 prises pendant 14-21 jours</div>
        <li>Mycostatine suspension buvable</li>
        <div className="ml-6 italic">
          - 1-2 ml 4 fois par jour pendant 14-21 jours
        </div>
      </ol>
    </div>
  ),
  Vaccination: (
    <div>
      <ul className="list-disc ml-4">
        <li>Méningocoque C</li>
        <div className="ml-6">Préférer NIMEMRIX</div>
        <div className="ml-6 italic">
          Possibilité de réaliser 5e mois NEISVAC et 12e mois NIMEMRIX
        </div>
        <li>Pneumocoque</li>
        <div className="ml-6">Préférer VAXNEUVANCE (15 valences)</div>
        <li>Si réaction locale au DTP type tétanos: pansement alcoolisé</li>
      </ul>
      <p className="mt-2">
        Multiple vaccination dans une même zone: espacer d&apos;au moins 1
        phalange (2.5 cm)
      </p>
    </div>
  ),
  "Dermatite atopique": (
    <div>
      <p className="text-justify">
        L’eczéma atopique ou dermatite atopique est une maladie cutanée
        prurigineuse (provoquant des démangeaisons) chronique, évoluant par
        poussées. Il touche principalement les nourrissons et les enfants mais
        peut persister à l’adolescence et à l’âge adulte.
      </p>
      <div className="my-2 font-semibold text-xl underline">Traitement:</div>
      <div>
        <div>
          <b>DERMALIBOUR</b> (crème réparatrice)
        </div>
        <div className="ml-3">- 1 à 3 applications par jour</div>
        <div className="ml-5 italic">peut être essayé avant AINS</div>
      </div>
      <div className="my-2">
        <div>
          <b>Préparation magistrales</b>
        </div>
        <div>
          Nécéssite la mention : « Prescription à but thérapeutique en l’absence
          de spécialités équivalentes disponibles » pour être remboursée
        </div>
        <ul className="list-disc ml-4">
          <li>
            <b>Xérose localisée ou sévère:</b>
          </li>
          <div className="my-1">
            <div className="ml-6 italic">
              - Extrêmement émolliente et apaisante
            </div>
            <div className="ml-6 italic">- Glycérolé d’amidon : 10 %</div>
            <div className="ml-4 my-1">
              <i>
                Prescription à but thérapeutique en l’absence de spécialités
                équivalentes disponibles:
              </i>
              <br />
              Glycérolé d’amidon Codexial® 20 g
              <br />
              <b>Codexial® Cold Cream qsp 200g</b>
              <br />
              OU
              <br />
              <b>Codexial® Cérat* qsp 200g</b>
              <br />
              <span className="italic text-sm">
                *Déconseillé aux enfants de moins de 3 ans
              </span>
            </div>
          </div>
          <li>
            <b>Xérose étendue:</b>
          </li>
          <div className="my-1">
            <div className="ml-6 italic">
              - Emolliente et apaisante - Fluide
            </div>
            <div className="ml-6 italic">- Glycérolé d’amidon : 10 %</div>
            <div className="ml-4 my-1">
              <i>
                Prescription à but thérapeutique en l’absence de spécialités
                équivalentes disponibles:
              </i>
              <br />
              Glycérolé d’amidon Codexial® 35 g
              <br />
              <b>Codexial® Cold Cream 300ml</b>
              <br />
              OU
              <br />
              <b>Codexial® Obase Fluide 300ml</b>
            </div>
          </div>
          <div className="my-1">
            <div className="ml-6 italic">
              - Émolliente et hydratante - Fluide
            </div>
            <div className="ml-6 italic">
              - Urée : 10% et Acide lactique : 5%
            </div>
            <div className="ml-4 my-1">
              <i>
                Prescription à but thérapeutique en l’absence de spécialités
                équivalentes disponibles:
              </i>
              <br />
              Urée 30g
              <br />
              <br />
              Acide lactique 15g
              <br />
              <br />
              Eau purifiée 30g
              <br />
              <b>Codexial® Cold Cream Fluide qsp 300g</b>
              <br />
              OU
              <br />
              <b>Codexial® Obase Fluide qsp 300g</b>
            </div>
          </div>
          <li>
            <b>Xérose du visage, des mains et des zones pileuses:</b>
          </li>
          <div className="my-1">
            <div className="ml-6 italic">- Émolliente et apaisante</div>
            <div className="ml-6 italic">- Glycérolé d’amidon : 10 %</div>
            <div className="ml-4 my-1">
              <i>
                Prescription à but thérapeutique en l’absence de spécialités
                équivalentes disponibles:
              </i>
              <br />
              Glycérolé d’amidon Codexial® 5g
              <br />
              <b>Codexial® Obase qsp 50g</b>
            </div>
          </div>
        </ul>
      </div>
      <div className="my-2">
        <div>
          <b>AINS</b>
        </div>
        <ul className="list-disc ml-4">
          <li>Corps</li>
          <li className="ml-4">DIPROSONE</li>
          <li>Visage</li>
          <li className="ml-4">TRIDESONIT</li>
          <li className="ml-4">LOCAPRED</li>
        </ul>
      </div>
      <div className="italic">
        Essaie d’un arrêt proactif: 2 / semaine pendant 3 mois
      </div>
    </div>
  ),
  "Dermite séborrhéique du nourrisson": (
    <div>
      <p className="text-justify">
        Les <b>croûtes de lait</b>, également appelées 
        <b>dermite séborrhéique du nourrisson</b>, sont une affection cutanée
        bénigne courante chez les bébés, caractérisée par des plaques squameuses
        jaunâtres ou brunâtres sur le cuir chevelu. Cette condition touche
        environ 70% des nourrissons dans les trois premiers mois de leur vie.
      </p>
      <div className="my-2 font-semibold text-xl underline">Traitement:</div>
      <div className="my-2">
        <div>
          Si <b>quelques croûtes de lait</b> sont présentes :
        </div>
        <ul className="list-disc ml-4">
          <li className="text-justify">
            Lors du bain de votre bébé, lavez lui les cheveux avec un shampoing
            doux et utilisez une brosse souple pour enlever en douceur les
            croûtes. Donnez-lui un bain quotidien, puis lorsque les croûtes ont
            disparu, espacez les bains selon vos habitudes (2 à 3 fois par
            semaine).
          </li>
          <li className="text-justify">
            Dans tous les cas, <b>évitez de gratter les plaques</b> avec vos
            ongles, un peigne ou une brosse dure : vous risqueriez de blesser le
            cuir chevelu - voire de le faire saigner - sans ôter les croûtes
            pour autant.
          </li>
        </ul>
      </div>
      <div className="my-2">
        <div>
          <b>En cas de croûtes de lait épaisses</b> agissez à chaque toilette
          quotidienne :
        </div>
        <ul className="list-disc ml-4">
          <li className="text-justify">
            appliquer de la vaseline 2 heures avant le bain et massez bien le
            cuir chevelu ;
          </li>
          <li className="text-justify">
            laver les cheveux avec un shampoing doux ;
          </li>
          <li className="text-justify">
            rincer abondamment le cuir chevelu afin de ne laisser aucune trace
            de shampoing ;
          </li>
          <li className="text-justify">
            utiliser une brosse souple pour détacher les croûtes. Ne vous
            inquiétez si les cheveux tombent avec les croûtes, ils repousseront
            naturellement par la suite ;
          </li>
          <li className="text-justify">
            brosser plusieurs fois par jour le cuir chevelu de votre bébé avec
            une brosse souple que vous laver quotidiennement à l’eau et au
            savon.
          </li>
        </ul>
        <div>
          Si ces gestes ne suffisent pas à éliminer les plaques, massez le cuir
          chevelu avec de la vaseline le soir au coucher, puis le lendemain
          matin, shampouinez les cheveux.
        </div>
      </div>
      <div className="my-2">
        <div>
          <b>KELUAL</b>
        </div>
        <ul className="list-disc ml-4">
          <li className="text-justify">
            Appliquer 1 fois par jour pendant 2 semaines
          </li>
          <li className="text-justify ml-4">
            Appliquer l’émulsion sur les squames et les croutes de lait en
            massant délicatement.
          </li>
          <li className="text-justify ml-4">
            Laisser agir 15 minutes puis rincer à l’aide d’un nettoyant doux
          </li>
        </ul>
      </div>
    </div>
  ),
  Hyperhidrose: (
    <div>
      <ul className="list-disc ml-4">
        <li>Ionophorèse</li>
        <li>Injection botox</li>
        <li>Sympathectomie</li>
      </ul>
      <p className="italic">Uniquement après adolescence</p>
    </div>
  ),
  "Protection solaire": (
    <div>
      <ul className="list-disc ml-4">
        <li>Indice 50 en MINERAL</li>
        <li className="italic ml-4">Plus adapté à la peau du nourrisson</li>
        <li>Hydratation: LIPIKAR AP+</li>
      </ul>
    </div>
  ),
  Prurigo: (
    <div>
      <ul className="list-disc ml-4">
        <li>EURAX crème</li>
        <li className="italic ml-4">
          Si en lien avec des acariens : présence de microcoupures
        </li>
      </ul>
    </div>
  ),
  Psoriasis: (
    <div>
      <p>
        Pour la population pédiatrique: rare avant 6 ans. Peut être en goutte ou
        avec de la kératose
      </p>
      <div className="my-2">
        <div>
          <b>Préparation magistrales</b>
        </div>
        <div>
          Nécéssite la mention : « Prescription à but thérapeutique en l’absence
          de spécialités équivalentes disponibles » pour être remboursée
        </div>
        <ul className="list-disc ml-4">
          <li>
            <b>Plaques localisées ou casque psoriasique:</b>
          </li>
          <div className="my-1">
            <div className="ml-6 italic">- Kératolytique</div>
            <div className="ml-6 italic">
              - Acide salicylique: 5 - 20% et Acide lactique : 5%
            </div>
            <div className="ml-4 my-1">
              <i>
                Prescription à but thérapeutique en l’absence de spécialités
                équivalentes disponibles:
              </i>
              <br />
              Acide salicylique 2,5 - 10g
              <br />
              Acide lactique 2,5g
              <br />
              <b>Codexial® Pommade qsp 50g</b>
            </div>
          </div>
          <li>
            <b>Plaques du visage et du cuir chevelu:</b>
          </li>
          <div className="my-1">
            <div className="ml-6 italic">- Kératolytique</div>
            <div className="ml-6 italic">- Acide salicylique : 5 - 20%</div>
            <div className="ml-4 my-1">
              <i>
                Prescription à but thérapeutique en l’absence de spécialités
                équivalentes disponibles:
              </i>
              <br />
              Acide salicylique 2,5 - 10g
              <br />
              <b>Codexial® Obase qsp 50g</b>
              <br />
              <span className="italic text-sm">
                Possibilité d’ajouter 1% de coaltar (soit 0,5g) ou 2% d’huile de
                cade (soit 1g) avec 10% d’acide salicylique maximum (non
                remboursé)
              </span>
            </div>
          </div>
        </ul>
      </div>
    </div>
  ),
  "Tâches cafés": (
    <div>
      <p className="text-justify">
        Vont s’agrandir avec l’enfant et peuvent devenir plus foncés.
      </p>
      <p className="text-justify">
        Attention si présence de poils, demander une consultation avec un
        dermato pédiatre.{" "}
      </p>
    </div>
  ),
  Verrue: (
    <div>
      <p className="text-justify">
        Les verrues, encore appelées papillomes viraux, sont des lésions
        cutanées bénignes, c’est-à-dire sans gravité, correspondant à des
        excroissances de peau.
      </p>
      <div className="my-2 font-semibold text-xl">
        Une guérison spontanée le plus souvent en quelques mois
      </div>
      <p className="text-justify">
        L’impossibilité d’éradiquer le virus de façon définitive explique la
        fréquence des récidives et parfois le sentiment de découragement éprouvé
        devant des traitements perçus comme insuffisamment efficaces.
      </p>
      <div className="my-2">
        <div>
          <b>Préparation magistrales</b> (non remboursée)
        </div>
        <div className="my-1 ml-4">
          <div className="ml-6 italic">- Kératolytique et virucide</div>
          <div className="ml-6 italic">
            - Acide salicylique : 45% et Teinture de thuya : 10%
          </div>
          <div className="ml-4 my-1">
            Acide salicylique 10g
            <br />
            Teinture de thuya 2g
            <br />
            <b>Codexial® Pommade 10g</b>
            <br />
            <span className="italic text-sm text-justify">
              La préparation doit être appliquée sur la verrue sous pansement
              occlusif après avoir protégé le contour avec un vernis ou un
              pansement.
            </span>
          </div>
        </div>
      </div>
    </div>
  ),
  Contraception: (
    <div>
      <ul className="list-disc ml-4">
        <li>Pilule progestative</li>
        <li className="ml-2">SLINDA</li>
        <li className="ml-4">meilleure tolérance que OPTIMIZETTE</li>
        <li className="ml-4 italic">non remboursé</li>
        <li>Spotting</li>
        <li className="ml-2">IBUPROFENE 400 mg</li>
        <li className="ml-4">1 cp matin, midi et soir pendant 7 jours</li>
      </ul>
    </div>
  ),
  Dysménorrhée: (
    <div>
      <ul className="list-disc ml-4">
        <li>ANTADYS</li>
        <li className="ml-2">1 cp matin et soir pendant le repas si douleur</li>
        <li>Si supérieur à 2 années:</li>
        <li className="ml-2">
          essaie (si possible) pilule oestro-progestative
        </li>
        <li>Si échec:</li>
        <li className="ml-2">élimination de l’endométriose</li>
      </ul>
    </div>
  ),
  Césarienne: (
    <div>
      <p className="text-justify">
        Donner des probiotiques car n’ont pas reçu ceux de la filière génitale:
      </p>
      <ul className="list-disc ml-4">
        <li>BIOGAIA</li>
        <li className="ml-4">Au moins 10 gouttes / jour</li>
        <li className="ml-4 italic">Non remboursé</li>
      </ul>
    </div>
  ),
  "Montée de lait": (
    <div>
      <div>
        <div className="my-2 font-semibold text-xl underline">
          Stimulation de la lactation:
        </div>
        <ul className="list-disc ml-4">
          <li>MOTILIUM</li>
          <li className="ml-4">
            1 comprimé (10 mg) par la bouche 3 fois par jour pendant 7 jours
          </li>
        </ul>
        <div className="italic text-sm text-justify">
          A 1 mois, phase creuse avec diminution du lait pendant +/- 7 jours
        </div>
      </div>
      <div>
        <div className="my-2 font-semibold text-xl underline">
          Arrêt de la lactation:
        </div>
        <div className="italic text-sm text-justify">Homéopathie:</div>
        <ul className="list-disc ml-4">
          <li>BELLADONNA 9 CH (si inflammatoire)</li>
          <li className="ml-4">
            3 granules toutes les heures pendant 15 jours (si besoin)
          </li>
          <li className="ml-4 italic">
            Si seins rouges puis espacer les prises dés amélioration
          </li>
          <li>RICINUS COMMUNIS 30 CH</li>
          <li className="ml-4">1 granule / jour pendant 3 jours</li>
          <li className="ml-4 italic">
            A débuter le plus tôt possible après l’accouchement
          </li>
          <li>APIS MELLIFICA 9 CH</li>
          <li className="ml-4">
            3 granules matin, midi et soir pendant 15 jours
          </li>
          <li className="ml-4 italic">
            A distance des repas et un intervalle d’au moins 4 heures avec les
            autres prises, le nombre de prises peut être augmenté - espacer les
            prises dés amélioration
          </li>
          <li>BRYONIA ALBA 9 CH</li>
          <li className="ml-4">
            3 granules matin, midi et soir pendant 15 jours
          </li>
          <li className="ml-4 italic">
            A distance des repas et un intervalle d’au moins 4 heures avec les
            autres prises, le nombre de prises peut être augmenté - espacer les
            prises dés amélioration
          </li>
          <li>LAC CANINUM 30 CH</li>
          <li className="ml-4">
            3 granules matin, midi et soir pendant 15 jours
          </li>
          <li className="ml-4 italic">
            A distance des repas et un intervalle d’au moins 4 heures avec les
            autres prises, le nombre de prises peut être augmenté - espacer les
            prises dés amélioration
          </li>
        </ul>
      </div>
    </div>
  ),
};
