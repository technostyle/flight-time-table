export const AIRPORTS = [
  { id: 1, city: "Moscow", airport: "Sheremetyevo", abbr: "SVO" },
  { id: 2, city: "Moscow", airport: "Domodedovo", abbr: "DME" },
  { id: 3, city: "Moscow", airport: "Vnukovo", abbr: "VKO" },
  { id: 4, city: "Minsk", abbr: "MSQ" },
  { id: 5, city: "Kiev", abbr: "IEV" }
];

const GATEWAYS_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const GATEWAYS_LETTERS = ["A", "B", "C", "D", "E", "F"];
export const GATEWAYS = GATEWAYS_NUMBERS.map(number =>
  GATEWAYS_LETTERS.map(letter => `${number}${letter}`)
).flat();

export const CURRENT_DATE = (currentTime => ({
  YEAR: currentTime.getFullYear(),
  MONTH: currentTime.getMonth() + 1,
  DAY: currentTime.getDate()
}))(new Date());
