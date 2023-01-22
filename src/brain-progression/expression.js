import { getGenerator } from '../utils/generate-number.js';

const MAX_NUMBER = 10;

const generator = getGenerator(MAX_NUMBER);

function ArithmeticProgression(a, d) {
  /**
     * @param {Number} a - first number of progression secuence to start
     * @param {Number} d - common difference of progression
     */
  return {
    firstNumber: a,
    difference: d,
  };
}

/**
     *
     * @param {Number} n - number of element in progression to calc
     */
function getNthTerm(n, firstNumber, difference) {
  return firstNumber + (n - 1) * difference;
}

/**
     *
     * @param {Number} n - number of element until need to calc sum
     */
function getSumOfFirstNElements(n, firstNumber) {
  return (n * (firstNumber + getNthTerm(n))) / 2;
}

function* progressionGeneratorInfinite(firstNumber, difference) {
  for (let i = 0; i < 1000; i += 1) {
    yield firstNumber + i * difference;
  }
}

function* progressionGenerator(numberOfElements, firstNumber, difference) {
  for (let i = 0; i < numberOfElements; i += 1) {
    yield firstNumber + i * difference;
  }
}

function printInfo(firstNumber, difference) {
  console.log(`First element: ${firstNumber}, difference: ${difference}`);
}

function generateRandomProgression() {
  const randomFirstElement = generator();
  const randomDifference = generator();

  const arithmeticProgression = ArithmeticProgression(randomFirstElement, randomDifference);

  return arithmeticProgression;
}

function generateExpression(length = 6) {
  const arithmeticProgression = generateRandomProgression();
  const progressionArrayLenght = length;
  const progressionArray = [
    ...progressionGenerator(
      progressionArrayLenght,
      arithmeticProgression.firstNumber,
      arithmeticProgression.difference,
    ),
  ];
  const generatorLocal = getGenerator(progressionArrayLenght);
  const numberToHideIndex = generatorLocal();
  const hiddenNumber = progressionArray[numberToHideIndex];
  const hiddenArray = progressionArray.map((value, index) => {
    if (index === numberToHideIndex) {
      return '..';
    }
    return value;
  });

  return { hiddenArray, hiddenNumber };
}

export {
  ArithmeticProgression,
  generateExpression,
  printInfo,
  progressionGenerator,
  progressionGeneratorInfinite,
  getSumOfFirstNElements,
};
