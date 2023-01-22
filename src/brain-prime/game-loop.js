import {
  greet, requestAnswerSimple, wrongAnswerMessage,
  correctMessage,
  winMessage,
  letsTryAgain,
} from '../cli.js';
import {
  rulesMessage,
  askQuestion,

} from './messages.js';
import {
  reverseAnswer,
} from '../utils/answers.js';
import isCorrectAnswer from './isCorrectAnswer.js';
import { generateNumber } from '../utils/generate-number.js';

export default function startGame() {
  const name = greet();
  rulesMessage();

  for (let i = 0; i < 3; i += 1) {
    const currentNumber = generateNumber();
    askQuestion(currentNumber.number);

    const currentAnswer = requestAnswerSimple();

    if (isCorrectAnswer(currentAnswer, currentNumber.number)) {
      correctMessage();
    } else {
      wrongAnswerMessage(name, reverseAnswer(currentAnswer), currentAnswer);
      letsTryAgain(name);
      return;
    }
  }
  winMessage(name);
}
