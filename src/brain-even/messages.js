import { Answer } from '../utils/answers.js';

function rulesMessage() {
  console.log(`Answer "${Answer.POSITIVE}" if the number is even, otherwise answer "${Answer.NEGATIVE}".`);
}

function askQuestion(number) {
  console.log(`Question: ${number}`);
}

export {
  rulesMessage,
  askQuestion,
};
