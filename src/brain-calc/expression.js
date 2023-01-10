import { getGenerator } from '../utils/generate-number.js';

function plus(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
const ALLOWED_OPERAND_LIST = ['+', '-', '*'];
const OPERAND_APPLYER = {
  '+': plus,
  '-': minus,
  '*': multiply,
};

export default function generateExpression() {
  const generator = getGenerator(10);
  const firstArgument = generator();
  const secondArgument = generator();
  const operand = ALLOWED_OPERAND_LIST[Math.floor(Math.random() * ALLOWED_OPERAND_LIST.length)];

  const resut = OPERAND_APPLYER[operand](firstArgument, secondArgument);

  return {
    firstArgument, secondArgument, operand, resut,
  };
}
