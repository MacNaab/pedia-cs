import denver from "@/data/denver.json";
import { useState } from "react";
import { nanoid } from "nanoid";
import Heading from "../typographie/heading";
import { convertirEnMois } from "./utils";

interface DenverItem {
  nom: string;
  année: number;
  mois: number;
  début: string;
}

function LocalRadio({
  data,
  aff,
  age,
}: {
  data: DenverItem;
  aff: boolean;
  age: number;
}) {
  const [no, setNo] = useState<boolean>();
  const id1 = nanoid();
  const id2 = nanoid();
  const test = Number(age) > Number(data.année) * 12 + Number(data.mois);
  return (
    <div
      className="grid grid-cols-2 gap-2 py-2"
      style={{ display: aff ? "block" : "none" }}
    >
      <div>
        <div className="font-bold">{data.nom}</div>
        <div className="italic text-sm">{`Âge de début: ${data.début}`}</div>
        {no && test && <div className="text-red-800 text-center underline font-semibold">Retard de développement psycho-moteur !</div>}
      </div>
      <div className="flex">
        <div className="flex items-center me-4">
          <input
            id={id1}
            type="radio"
            value={1}
            name={data.nom}
            readOnly={!aff}
            onChange={(_e) => setNo(false)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor={id1}
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Oui
          </label>
        </div>
        <div className="flex items-center me-4">
          <input
            id={id2}
            type="radio"
            value={0}
            name={data.nom}
            readOnly={!aff}
            onChange={(_e) => setNo(true)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor={id2}
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Non
          </label>
        </div>
      </div>
    </div>
  );
}

export default function Denver({ age }: { age: number }) {
  return (
    <div>
      {Object.keys(denver).map((key) => (
        <div key={nanoid()}>
          <Heading level={3}>{key}</Heading>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {denver[key as keyof typeof denver].map((e: DenverItem) => {
              const minAge = convertirEnMois(e.début);
              return (
                <LocalRadio
                  key={nanoid()}
                  data={e}
                  aff={Number(minAge) <= Number(age)}
                  age={age}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
