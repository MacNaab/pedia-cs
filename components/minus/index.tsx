"use client";
import Heading from "@/components/typographie/heading";
import Antropometrie from "@/components/form/antropometrie";
import Age from "@/components/minus/age";
import Denver from "@/components/minus/denver";
import Toast from "@/components/toast";
import { FormEvent, useState } from "react";
import { createRoot } from "react-dom/client";

import denver from "@/data/denver.json";

export default function Index() {
  const [age, setAge] = useState<number>(0);
  const [copy, setCopy] = useState("");
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const entries = Object.fromEntries(formData.entries());
    console.log(entries);
    const psychomoteur: any = {
      "retard": []
    };
    const keys = Object.keys(denver);
    keys.map((key) => {
      psychomoteur[key] = {
        "fait": [],
        "neFaitPas": [],
      };
      denver[key as keyof typeof denver].map((e) => {
        if(entries[e.nom]){
          // si le nom est présent dans le formData
          if(entries[e.nom] == "0"){
            // coché NON
            psychomoteur[key].neFaitPas.push(e.nom);
            // savoir si retard ou non !
            if(Number((e.année*12+e.mois)) <= Number(age)){
              psychomoteur.retard.push(e.nom);
            }
          }else{
            // coché OUI
            psychomoteur[key].fait.push(e.nom);
          }
        }
      });
    });
    const myText = (
`Résumé d'observation:
Examen du ${age}e mois. ${entries.AgeReel ? `Âge civil ${entries.AgeReel}. ` : ""} ${entries.AgeCorrige ? `Âge corrigé ${entries.AgeCorrige}. ` : ""}
Constantes: poids ${entries.Poids} kg, taille ${entries.Taille} cm (IMC ${entries.IMC}), PC ${entries.PC} cm
Développement psycho-moteur:
- ${keys[0]}:${ psychomoteur[keys[0]].neFaitPas.length > 0 ? (psychomoteur[keys[0]].neFaitPas.map((e:any) => ` ${e} (ne fait pas)`)) : " RAS" }
- ${keys[1]}:${ psychomoteur[keys[1]].neFaitPas.length > 0 ? (psychomoteur[keys[1]].neFaitPas.map((e:any) => ` ${e} (ne fait pas)`)) : " RAS" }
- ${keys[2]}:${ psychomoteur[keys[2]].neFaitPas.length > 0 ? (psychomoteur[keys[2]].neFaitPas.map((e:any) => ` ${e} (ne fait pas)`)) : " RAS" }
- ${keys[3]}:${ psychomoteur[keys[3]].neFaitPas.length > 0 ? (psychomoteur[keys[3]].neFaitPas.map((e:any) => ` ${e} (ne fait pas)`)) : " RAS" }

${psychomoteur.retard.length > 0 ? (psychomoteur.retard.map((e:any) => ` ${e} (RETARD PSYCHOMOTEUR)`)) : ""}
`
    );
    // copier dans le presse papier myText
    navigator.clipboard.writeText(myText);
    setCopy(myText);
    createRoot(document.getElementById("toast_root")!).render(
      <Toast style={{ position: "fixed", top: "1%", right: "1%" }}>
        <span className="block sm:inline">
          Le texte a été copié dans le presse-papier.
        </span>
      </Toast>
    );
  };
  return (
    <form onSubmit={handleSubmit}>
            <div id="toast_root" />
      <Heading level={2}>Examen du nourrisson et de l&apos;enfant</Heading>
      <div className="ml-4 italic">
        <Heading level={3}>de moins de 6 ans</Heading>
      </div>
      <div className="flex flex-col justify-center">
        <Antropometrie nourrisson={true} />
        <Age setGlobalAge={setAge} />
      </div>
      <div className="italic">{`Examen du ${age}e mois`}</div>
      <Denver age={age} />
      <div className="flex justify-center">
        <button type="submit">Valider</button>
      </div>
      <div className="flex">
        <textarea className="w-full h-fit" rows={10} value={copy} disabled />
      </div>
    </form>
  );
}
