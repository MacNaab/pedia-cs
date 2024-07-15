"use client";
import { useState } from "react";
import Input from "@/components/form/input";

export default function Antropometrie({
  nourrisson = false,
}: {
  nourrisson: boolean;
}) {
  const [imc, setIMC] = useState<any>();
  const [poids, setP] = useState<number>();
  const [taille, setT] = useState<number>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const nombre = Number(value);
    if (name === "Poids") {
      setP(nombre);
      setIMC((nombre / (Number(taille) * Number(taille))).toFixed(2));
    } else {
      setT(nombre / 100);
      setIMC((Number(poids) / (nombre / 100) ** 2).toFixed(2));
    }
  };

  return (
    <div className="flex gap-4 m-2 items-center justify-center">
      <Input
        label="Poids (en kg)"
        name="Poids"
        placeholder="en kg"
        onChange={handleChange}
      />
      <Input
        label="Taille (en cm)"
        name="Taille"
        placeholder="en cm"
        onChange={handleChange}
      />
      {nourrisson ? (
        <Input
          label="Périmètre crânien (en cm)"
          name="PC"
          placeholder="en cm"
          onChange={null}
        />
      ) : null}
      <div className="mb-6">
        <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          IMC
        </div>
        <input className="bg-transparent max-w-12 text-center" type="text" value={imc} name="IMC" readOnly />
      </div>
    </div>
  );
}
