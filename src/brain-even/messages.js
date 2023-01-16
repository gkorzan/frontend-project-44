import { Answer } from '../utils/answers.js';

function rulesMessage() {
  console.log(`Answer "${Answer.POSITIVE}" if the number is even, otherwise answer "${Answer.NEGATIVE}".\nType "${Answer.EXIT}" to leave.`);
}

function askQuestion(number) {
  console.log(`Is [${number}] an even number?`);
}

export {
  rulesMessage,
  askQuestion,
};
