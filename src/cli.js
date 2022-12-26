import readlineSync from 'readline-sync';
import { Answer } from './brain-even/answers.js';

function greet() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

function requestAnswer() {
  return readlineSync.question(`(${Answer.POSITIVE}/${Answer.NEGATIVE}): `);
}

function requestRoundNumber(name) {
  return readlineSync.question(`${name}, how many rounds you would like to play? `);
}

export { greet, requestAnswer, requestRoundNumber };
