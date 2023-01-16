import { Answer } from '../utils/answers.js';

function rulesMessage() {
  console.log(`Answer "${Answer.POSITIVE}" if the number is prime, otherwise answer "${Answer.NEGATIVE}".\nType "${Answer.EXIT}" to leave.`);
}

function askQuestion(number) {
  console.log(`Is [${number}] an prime number?`);
}

export {
  rulesMessage,
  askQuestion,
};
