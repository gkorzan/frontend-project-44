import { getGenerator, isEven } from '../utils/generate-number.js';

function findGdc(_firstArgument, _secondArgument) {
  let firstArgument = parseInt(_firstArgument, 10);
  let secondArgument = parseInt(_secondArgument, 10);
  if (Number.isNaN(firstArgument) || Number.isNaN(secondArgument)) return null;

  if (firstArgument === secondArgument) return firstArgument;
  if (firstArgument === 0) return secondArgument;
  if (secondArgument === 0) return firstArgument;
  if (firstArgument === 1 || secondArgument === 1) return 1;

  let firstEvenCounter = 0;
  let secondEvenCounter = 0;
  let multiplyer = 0;
  while (isEven(firstArgument)) {
    firstArgument /= 2;
    firstEvenCounter += 1;
  }
  while (isEven(secondArgument)) {
    secondArgument /= 2;
    secondEvenCounter += 1;
  }
  const module = Math.abs(firstEvenCounter - secondEvenCounter);
  const minEvenCounter = Math.min(firstEvenCounter, secondEvenCounter);
  if (module === 0) multiplyer = firstEvenCounter;
  if (module > 0) multiplyer = minEvenCounter;

  const argumentModule = Math.abs(firstArgument - secondArgument);
  const minArgument = Math.min(firstArgument, secondArgument);

  if (argumentModule === 0) return firstArgument;
  return (2 ** multiplyer) * findGdc((argumentModule / 2), minArgument);
}

function generateExpression() {
  const generator = getGenerator(100);
  const firstArgument = generator();
  const secondArgument = generator();
  const gcdResult = findGdc(firstArgument, secondArgument);

  return { firstArgument, secondArgument, result: gcdResult };
}

export { findGdc, generateExpression };
