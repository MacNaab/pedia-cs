"use client";
import { nanoid } from "nanoid";
import { useState } from "react";
import InputDate from "@/components/form/inputdate";
import Input from "@/components/form/input";
import { calculateExactAge } from "./utils";

function calculerAgeCorrige(
  ageChronologique: string,
  semainesAmenorrhees: string
): {
  anCorrige: number;
  moisCorrige: number;
  joursCorrige: number;
} {
  const regexAge = /(\d+)\s*an(?:s)?\s*(\d+)\s*mois\s*(\d+)\s*jour(?:s)?/;
  const matchAge = ageChronologique.match(regexAge);

  if (!matchAge) {
    throw new Error("Format d'âge chronologique invalide");
  }

  const ageAn = parseInt(matchAge[1]);
  const ageMois = parseInt(matchAge[2]);
  const ageJour = parseInt(matchAge[3]);

  const matchSemaine = semainesAmenorrhees.split("+");
  const semaines = Number(matchSemaine[0]);

  let totalJoursPrematurite = (40 - semaines) * 7;
  if (matchSemaine.length > 1) {
    totalJoursPrematurite -= Number(matchSemaine[1]);
  }

  let totalJoursChronologique = ageAn * 365 + ageMois * 30 + ageJour;
  let totalJoursCorrige = totalJoursChronologique - totalJoursPrematurite;

  if (totalJoursCorrige < 0) {
    let anCorrige = 0;
    let moisCorrige = -Math.floor(-totalJoursCorrige / 30);
    let joursCorrige = 0;
    if (totalJoursCorrige < -365) {
      anCorrige = Math.floor(totalJoursCorrige / 365);
    }
    if (totalJoursCorrige < -30) {
      totalJoursCorrige += -moisCorrige * 30;
    }
    if (totalJoursCorrige > -30) {
      joursCorrige = totalJoursCorrige;
    }
    return { anCorrige, moisCorrige, joursCorrige };
  }

  const anCorrige = Math.floor(totalJoursCorrige / 365);
  totalJoursCorrige %= 365;
  const moisCorrige = Math.floor(totalJoursCorrige / 30);
  const joursCorrige = totalJoursCorrige % 30;

  return { anCorrige, moisCorrige, joursCorrige };
}

export default function Age({setGlobalAge}: any) {
  const [age, setAge] = useState("");
  const [ageC, setAgeC] = useState("");

  const handleChange = (e: any) => {
    const birthdate = new Date(e.target.value);
    const { years, months, days } = calculateExactAge(birthdate);
    setGlobalAge(12*years + months);
    setAge(
      `${years} an${years > 1 ? "s" : ""} ${months} mois ${days} jour${
        days > 1 ? "s" : ""
      }`
    );
  };

  const handleSAChange = (e: any) => {
    const { anCorrige, moisCorrige, joursCorrige } = calculerAgeCorrige(
      age,
      e.target.value
    );
    if(anCorrige >= 0 && moisCorrige >= 0){
      setGlobalAge(12*anCorrige + moisCorrige);
    }
    setAgeC(
      `${anCorrige} an${
        anCorrige > 1 ? "s" : ""
      } ${moisCorrige} mois ${joursCorrige} jour${joursCorrige > 1 ? "s" : ""}`
    );
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 my-2">
      <InputDate
        label="Date de naissance"
        name="Birthdate"
        onChange={handleChange}
      />
      <Input
        label="Terme en SA"
        name="Terme"
        placeholder="35+5"
        onChange={handleSAChange}
      />
      <div className="text-center">
        {age ? (
          <>
            <span>Âge civil :</span>
            <input className="ml-2 bg-transparent" value={age} name="AgeReel" readOnly />
          </>
        ) : null}
      </div>
      <div className="text-center">
        {ageC ? (
          <>
            <span>Âge Corrigé :</span>
            <input className="ml-2 bg-transparent" value={ageC} name="AgeCorrige" readOnly />
          </>
        ) : null}
      </div>
    </div>
  );
}
