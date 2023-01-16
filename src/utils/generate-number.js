const MAX_NUMBER = 100;

function isEven(number) {
  return !(number % 2);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getGenerator(max = MAX_NUMBER) {
  return () => getRandomInt(max);
}

export default function generateNumber(max) {
  const number = getRandomInt(max || MAX_NUMBER);
  return { number, isEven: !(number % 2) };
}

export { getRandomInt, generateNumber, getGenerator, isEven };
