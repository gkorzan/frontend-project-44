import {
  greet,
  requestAnswerSimple, requestRoundNumber, finalScore, bye, wrongAnswerMessage, correctMessage,
} from '../cli.js';
import generateExpression from './expression.js';
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
      currentExpression.operand,
    );
    let currentAnswer = Number.NaN;
    while (Number.isNaN(currentAnswer)) {
      currentAnswer = parseInt(requestAnswerSimple(), 10);
      if (Number.isNaN(currentAnswer)) {
        incorrectAnswerMessage();
      }
    }
    if (currentExpression.resut === currentAnswer) {
      correctAnswersNumber += 1;
      correctMessage();
    } else {
      wrongAnswerMessage(name, currentExpression.resut, currentAnswer);
    }
  }

  finalScore(correctAnswersNumber, numberOfRounds, name);
  bye();
}
