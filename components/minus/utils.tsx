export function convertirEnMois(phrase: string): number {
  let mois = 0;
  const regexAn = /(\d+(\.\d+)?)\s*an(s)?/;
  const regexMois = /(\d+)\s*mois/;

  const matchAn = phrase.match(regexAn);
  const matchMois = phrase.match(regexMois);

  if (matchAn) {
    mois += parseFloat(matchAn[1]) * 12;
  }

  if (matchMois) {
    mois += parseInt(matchMois[1]);
  }

  return mois;
}

export function calculateExactAge(
  birthDate: Date,
  currentDate: Date = new Date()
): {
  years: number;
  months: number;
  days: number;
} {
  let years = currentDate.getFullYear() - birthDate.getFullYear();
  let months = currentDate.getMonth() - birthDate.getMonth();
  let days = currentDate.getDate() - birthDate.getDate();

  // Adjust the years, months, and days if needed
  if (days < 0) {
    months -= 1;
    days += new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
}
