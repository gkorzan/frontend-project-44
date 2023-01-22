import { generateExpression } from './expression.js';
import {
  greet,
  requestAnswerSimple, wrongAnswerMessage, correctMessage, winMessage, letsTryAgain,
} from '../cli.js';
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
    );
    const currentAnswer = parseInt(requestAnswerSimple(), 10);
    
    if (currentExpression.result === currentAnswer) {
      correctMessage();
    } else {
      wrongAnswerMessage(name, currentExpression.result, currentAnswer);
      letsTryAgain(name)
      return
    }
  }
  winMessage(name)
}
