const MAX_NUMBER = 100;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getGenerator(max = MAX_NUMBER) {
  return () => getRandomInt(max);
}

export default function generateNumber() {
  const number = getRandomInt(MAX_NUMBER);
  return { number, isEven: !(number % 2) };
}

export { getRandomInt, generateNumber, getGenerator };
