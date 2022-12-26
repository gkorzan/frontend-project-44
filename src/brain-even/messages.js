import { Answer } from './answers.js';

function rulesMessage() {
  console.log(`Answer "${Answer.POSITIVE}" if the number is even, otherwise answer "${Answer.NEGATIVE}".\nType "${Answer.EXIT}" to leave.`);
}

function letsTryAgain(name) {
  console.log(`Let's try again, ${name}!`);
}

function wrongAnswerMessage(name, requiredAnswer, userAnswer) {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${requiredAnswer}'.`);
}
function correctMessage() {
  console.log('Correct!');
}

function winMessage(name) {
  console.log(`Congratulations, ${name}!`);
}

function askQuestion(number) {
  console.log(`Is [${number}] an even number?`);
}

function incorrectRoundNumber(fallback) {
  console.log('Looks like you have entered incorrect number of rounds');
  console.log(`Let's play ${fallback} times!`);
}

function finalScore(numberOfPoints, numberOfQuestions, name) {
  console.log(`Your score is ${numberOfPoints}\\${numberOfQuestions}`);
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

function bye() {
  console.log('Goodbye!');
}

export {
  rulesMessage,
  wrongAnswerMessage,
  correctMessage,
  winMessage,
  askQuestion,
  bye,
  incorrectRoundNumber,
  finalScore,
};
