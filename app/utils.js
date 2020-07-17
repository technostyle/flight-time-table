export const randomInteger = (min, max) => {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const arrayFromOneToN = N => Array.from(Array(N).keys());
