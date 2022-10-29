// Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.

const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

const containsA = (names) => {
  let totalA = 0;
  names.forEach((name) => {
    let word = name.split("").reduce((totalLeaters, leaters) => {
      if (leaters === "A" || leaters === "a") {
      return  totalLeaters += 1;
      }
      return totalLeaters;
    }, 0)
    totalA += word;
  });
  return totalA
};
console.log(containsA(names));
