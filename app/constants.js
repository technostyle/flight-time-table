export const AIRPORTS = [
  { id: 0, city: "Moscow", abbr: "MOW" },
  { id: 1, city: "Moscow", airport: "Sheremetyevo", abbr: "SVO" },
  { id: 2, city: "Moscow", airport: "Domodedovo", abbr: "DME" },
  { id: 3, city: "Moscow", airport: "Vnukovo", abbr: "VKO" },
  { id: 4, city: "Minsk", abbr: "MSQ" },
  { id: 5, city: "Kiev", abbr: "IEV" },
  { id: 6, city: "Berlin", abbr: "BER" },
  { id: 7, city: "Berlin", airport: "Schoenefeld", abbr: "SXF" },
  { id: 8, city: "Berlin", airport: "Tegel", abbr: "TXL" },
  { id: 9, city: "Berlin", airport: "Tempelhof", abbr: "THF" },
  { id: 10, city: "Paris", abbr: "PAR" },
  { id: 11, city: "Paris", airport: "Charles de Gaulle", abbr: "CDG" },
  { id: 12, city: "Paris", airport: "Le Bourget", abbr: "LBG" },
  { id: 13, city: "Paris", airport: "Orly", abbr: "ORY" },
  { id: 14, city: "London", abbr: "LON" },
  { id: 15, city: "London", airport: "Gatwick", abbr: "LGW" },
  { id: 16, city: "London", airport: "City Airport", abbr: "LCY" },
  { id: 17, city: "London", airport: "Luton", abbr: "LTN" },
  { id: 18, city: "London", airport: "Stansted", abbr: "STN" },
  { id: 19, city: "Madrid", airport: "Barajas Airport", abbr: "MAD" },
  { id: 20, city: "Lisbon", abbr: "LIS" },
  { id: 21, city: "Rome", abbr: "ROM" },
  { id: 22, city: "Rome", airport: "Ciampino", abbr: "CIA" },
  { id: 23, city: "Rome", airport: "Fuimicino", abbr: "FCO" }
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
