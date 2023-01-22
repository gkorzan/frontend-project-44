import {
  greet,
  requestAnswerSimple, wrongAnswerMessage, correctMessage, letsTryAgain, winMessage,
} from '../cli.js';
import generateExpression from './expression.js';
import {
  rulesMessage,
  askQuestion,
} from './messages.js';

export default function startGame() {
  const name = greet();
  rulesMessage();

  for (let i = 0; i < 3; i += 1) {
    const currentExpression = generateExpression();
    askQuestion(
      currentExpression.firstArgument,
      currentExpression.secondArgument,
      currentExpression.operand,
    );
    const currentAnswer = parseInt(requestAnswerSimple(), 10);

    if (currentExpression.resut === currentAnswer) {
      correctMessage();
    } else {
      wrongAnswerMessage(name, currentExpression.resut, currentAnswer);
      letsTryAgain(name);
      return;
    }
  }
  winMessage(name);
}
