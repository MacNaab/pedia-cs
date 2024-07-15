"use client";
import { FormEvent, useState } from "react";
import Heading from "@/components/typographie/heading";
import InputDate from "@/components/form/inputdate";
import Antropometrie from "@/components/form/antropometrie";
import JsonToText from "@/components/plus/jsontotext";
import { calculateExactAge } from "@/components/minus/utils";
import myJson from "@/data/plus.json";
import Toast from "../toast";
import { createRoot } from "react-dom/client";

export default function Index() {
  const [age, setAge] = useState("");
  const [copy, setCopy] = useState("");
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const entries = Object.fromEntries(formData.entries());
    console.log(entries);
    const myText = `${Object.keys(entries).map(
      (key) => `\n${key}: ${entries[key]}`
    )}`;
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

  const handleChange = (e: any) => {
    const birthdate = new Date(e.target.value);
    const { years, months, days } = calculateExactAge(birthdate);
    setAge(
      `${years} an${years > 1 ? "s" : ""} ${months} mois ${days} jour${
        days > 1 ? "s" : ""
      }`
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <div id="toast_root" />
      <Heading level={2}>Examen de l&apos;enfant et adoslescent</Heading>
      <div className="ml-4 italic">
        <Heading level={3}>de plus de 6 ans</Heading>
      </div>
      <div className="flex flex-wrap justify-center gap-8 items-center">
        <InputDate
          label="Date de naissance"
          name="birthdate"
          onChange={handleChange}
        />
        <div className="align-middle">
          <input
            className="ml-2 text-center bg-transparent max-w-44"
            value={age}
            name="Age"
            readOnly
          />
        </div>
        <Antropometrie nourrisson={false} />
      </div>
      <JsonToText json={myJson} />
      <div className="flex justify-center">
        <button type="submit">Valider</button>
      </div>
      <div className="flex">
        <textarea className="w-full h-fit" rows={10} value={copy} disabled />
      </div>
    </form>
  );
}
