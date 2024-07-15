"use client";
import { nanoid } from "nanoid";
import { FormEvent, useState } from "react";
import myJSON from "@/data/IHReS.json";
import { createRoot } from "react-dom/client";

function LocalRadio({
  data,
  name,
}: {
  data: any;
  // {    label: string;    exemple?: string;    value?: number;  }
  name: string;
}) {
  const id1 = nanoid();
  const id2 = nanoid();
  return (
    <div className="grid grid-cols-2 gap-2 py-2">
      <div className="">
        <div className="font-bold">{data.label}</div>
        <div className="italic text-sm">{data.exemple}</div>
      </div>
      <div className="flex">
        <div className="flex items-center me-4">
          <input
            id={id1}
            type="radio"
            value={data.value ? data.value : 1}
            name={name}
            required
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
            name={name}
            required
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

function FormA({ setStep }: { setStep: any }) {
  const [aff, setAff] = useState(<div></div>);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const entries = Object.fromEntries(formData.entries());
    let score = 0;
    for (const [key, value] of Object.entries(entries)) {
      if (value === "1") {
        score++;
      }
    }
    if (score > 0) {
      setAff(
        <div className="text-center">
          <div className="font-semibold">{`Score : ${score}`}</div>
          <div className="text-red-800">
            SI AU MOINS UNE DE CES SITUATIONS EST COCHÉE « OUI »,
          </div>
          <div className="text-red-800">
            VEUILLEZ ADRESSER VOTRE PATIENT À UN{" "}
            <a
              className="underline"
              href="https://expertslocatorihres.com/"
              target="_blank"
            >
              CENTRE EXPERT
            </a>
            .
          </div>
        </div>
      );
    } else {
      setStep(1);
    }
  };
  return (
    <form className="p-2" onSubmit={handleSubmit}>
      <h3 className="text-3xl underline font-bold dark:text-white">Partie A</h3>
      <div>
        {myJSON.PartieA.map((data: any, index: number) => {
          return (
            <div key={nanoid()}>
              <LocalRadio data={data} name={`partieA_${index}`} />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="font-bold text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
        >
          Suivant
        </button>
      </div>
      <div>{aff}</div>
    </form>
  );
}

function FormB() {
  const [aff, setAff] = useState(<div></div>);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const entries = Object.fromEntries(formData.entries());
    let score = 0;
    const params: any = {
      "0": 0,
      "1": 0,
      "2": 0,
    };
    for (const [key, value] of Object.entries(entries)) {
      let split = key.split("_");
      if (params[split[1]] < Number(value)) {
        params[split[1]] = Number(value);
      }
    }
    for (const [key, value] of Object.entries(params)) {
      score += Number(value);
    }
    if (score >= 4) {
      setAff(
        <div className="text-center">
          <div className="font-semibold">{`Score : ${score}`}</div>
          <div className="text-red-800">SI SCORE ≥ 4,</div>
          <div className="text-red-800">
            VEUILLEZ ADRESSER VOTRE PATIENT À UN{" "}
            <a
              className="underline"
              href="https://expertslocatorihres.com/"
              target="_blank"
            >
              CENTRE EXPERT
            </a>
            .
          </div>
        </div>
      );
    } else {
      setAff(
        <div className="text-center">
          <div className="font-semibold">{`Score : ${score}`}</div>
          <div className="text-green-800">{`SI SCORE < 4,`}</div>
          <div className="text-green-800">
            LE PATIENT NE DOIT PAS ÊTRE ADRESSÉ. IL DOIT ÊTRE SUIVI ET LE SCORE
            DOIT ÊTRE RÉALISÉ À CHAQUE VISITE.
          </div>
        </div>
      );
    }
  };
  return (
    <form className="p-2" onSubmit={handleSubmit}>
      <h3 className="text-3xl underline font-bold dark:text-white">Partie B</h3>
      <div>
        {Object.keys(myJSON.PartieB).map((key: string, index: number) => {
          return (
            <div key={nanoid()}>
              <div className="font-bold underline">{key}</div>
              {myJSON.PartieB[key as keyof typeof myJSON.PartieB].map(
                (data: any, i: number) => {
                  return (
                    <div key={nanoid()}>
                      <LocalRadio data={data} name={`partieB_${index}_${i}`} />
                    </div>
                  );
                }
              )}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="font-bold text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
        >
          Terminer
        </button>
      </div>
      <div>{aff}</div>
    </form>
  );
}

export default function Form() {
  const [step, setStep] = useState(0);
  return (
    <div>
      {step == 0 ? <FormA setStep={setStep} /> : <FormB />}
      <div className="text-sm italic text-center">
        <span className="underline">Remarque:</span> en cas d&apos;hémangiomes
        infantiles multiples, le score doit être calculé pour chaque hémangiome.
      </div>
      <div className="text-sm italic text-center">
        La décision finale de référer le patient à un centre expert est à la
        discrétion du médecin et des parents.
      </div>
    </div>
  );
}
