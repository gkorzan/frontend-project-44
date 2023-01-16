import { generateExpression } from './expression.js';
import {
  greet,
  requestAnswerSimple, requestRoundNumber, finalScore, bye, wrongAnswerMessage, correctMessage,
} from '../cli.js';
import {
  rulesMessage,
  askQuestion,
  incorrectAnswerMessage,
} from './messages.js';
import validateRoundNumber from '../utils/validate-round-number.js';

export default function startGame() {

  const name = greet();
  rulesMessage();

  const numberOfRounds = validateRoundNumber(requestRoundNumber(name));
  let correctAnswersNumber = 0;

  for (let i = 0; i < numberOfRounds; i += 1) {
    const currentExpression = generateExpression();
    askQuestion(
      currentExpression.firstArgument,
      currentExpression.secondArgument,
    );
    let currentAnswer = Number.NaN;
    while (Number.isNaN(currentAnswer)) {
      currentAnswer = parseInt(requestAnswerSimple(), 10);
      if (Number.isNaN(currentAnswer)) {
        incorrectAnswerMessage();
      }
    }
    if (currentExpression.result === currentAnswer) {
      correctAnswersNumber += 1;
      correctMessage();
    } else {
      wrongAnswerMessage(name, currentExpression.result, currentAnswer);
    }
  }

  finalScore(correctAnswersNumber, numberOfRounds, name);
  bye();
}
