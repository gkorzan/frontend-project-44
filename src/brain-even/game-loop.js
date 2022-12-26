import { greet, requestAnswer, requestRoundNumber } from '../cli.js';
import {
  rulesMessage,
  wrongAnswerMessage,
  correctMessage,
  askQuestion, bye, incorrectRoundNumber,
  finalScore,
} from './messages.js';
import {
  isAvaliableAnswer, isCorrectAnswer, isExit, reverseAnswer,
} from './answers.js';
import generateNumber from './generate-number.js';

const FALLBACK_ROUND_NUMBER = 5;

function validateRoundNumber(requestedNumberOfRounds) {
  if (Number.isInteger(parseInt(requestedNumberOfRounds, 10))
    && requestedNumberOfRounds > 0
    && requestedNumberOfRounds <= 20
  ) return requestedNumberOfRounds;

  incorrectRoundNumber(FALLBACK_ROUND_NUMBER);
  return FALLBACK_ROUND_NUMBER;
}

export default function startGame() {
  const name = greet();
  rulesMessage();

  const numberOfRounds = validateRoundNumber(requestRoundNumber(name));
  let correctAnswersNumber = 0;

  for (let i = 0; i < numberOfRounds; i += 1) {
    const currentNumber = generateNumber();
    askQuestion(currentNumber.number);

    let currentAnswer = '';
    while (!isAvaliableAnswer(currentAnswer)) {
      currentAnswer = requestAnswer();
      if (!isAvaliableAnswer(currentAnswer)) {
        rulesMessage();
      }
    }

    if (isExit(currentAnswer)) {
      bye();
      return;
    }

    if (isCorrectAnswer(currentAnswer, currentNumber.isEven)) {
      correctMessage();
      correctAnswersNumber += 1;
    } else {
      wrongAnswerMessage(name, reverseAnswer(currentAnswer), currentAnswer);
    }
  }
  finalScore(correctAnswersNumber, numberOfRounds, name);
  bye();
}
