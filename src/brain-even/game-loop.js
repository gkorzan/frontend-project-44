import {
  greet, requestAnswerBinary, requestRoundNumber, finalScore, bye, wrongAnswerMessage,
  correctMessage,
} from '../cli.js';
import {
  rulesMessage,
  askQuestion,

} from './messages.js';
import {
  isAvaliableAnswer, isCorrectAnswer, isExit, reverseAnswer,
} from './answers.js';
import { generateNumber } from '../utils/generate-number.js';
import validateRoundNumber from '../utils/validate-round-number.js';

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
      currentAnswer = requestAnswerBinary();
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
