import readlineSync from 'readline-sync';
import { Answer } from './utils/answers.js';

function greet() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

function requestAnswerBinary() {
  return readlineSync.question(`(${Answer.POSITIVE}/${Answer.NEGATIVE}): `);
}

function requestAnswerSimple() {
  return readlineSync.question('Your answer: ');
}

function requestRoundNumber(name) {
  return readlineSync.question(`${name}, how many rounds you would like to play? `);
}

function wrongAnswerMessage(name, requiredAnswer, userAnswer) {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${requiredAnswer}'.`);
}

function incorrectRoundNumber(fallback) {
  console.log('Looks like you have entered incorrect number of rounds');
  console.log(`Let's play ${fallback} times!`);
}

function winMessage(name) {
  console.log(`Congratulations, ${name}!`);
}

function letsTryAgain(name) {
  console.log(`Let's try again, ${name}!`);
}

function finalScore(numberOfPoints, numberOfQuestions, name) {
  console.log(`Your score is ${numberOfPoints}\\${numberOfQuestions}`);
  if (numberOfPoints === 0) {
    letsTryAgain(name);
    return;
  }
  const score = numberOfQuestions / numberOfPoints;
  if (score > 0.95) {
    console.log('Great!');
    winMessage(name);
    return;
  }
  if (score > 0.75) {
    console.log('Good!');
    winMessage(name);
    return;
  }
  if (score > 0.5) {
    console.log('Not bad!');
    winMessage(name);
    return;
  }
  letsTryAgain(name);
}

function correctMessage() {
  console.log('Correct!');
}

function bye() {
  console.log('Goodbye!');
}

export {
  greet,
  requestAnswerBinary,
  requestAnswerSimple,
  requestRoundNumber,
  incorrectRoundNumber,
  finalScore,
  bye,
  wrongAnswerMessage,
  correctMessage,
  letsTryAgain,
  winMessage
};
