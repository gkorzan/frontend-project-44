import {
  greet,
  requestAnswerSimple, requestRoundNumber, finalScore, bye, wrongAnswerMessage, correctMessage, winMessage, letsTryAgain,
} from '../cli.js';
import {
  rulesMessage,
  askQuestion,
} from './messages.js';

import { generateExpression } from "./expression.js";
import { getGenerator } from '../utils/generate-number.js';


const generator = getGenerator(5)
const generateNumber = () => 5 + generator()

export default function startGame() {
    const name = greet();
    rulesMessage();

  for (let i = 0; i < 3; i += 1) {
    const expressionLength = generateNumber()
    const currentExpression = generateExpression(expressionLength)
    askQuestion(
     currentExpression.hiddenArray
    );
    const currentAnswer = parseInt(requestAnswerSimple(), 10);
      
    
    if (currentExpression.hiddenNumber === currentAnswer) {
      correctMessage();
    } else {
      wrongAnswerMessage(name, currentExpression.hiddenNumber, currentAnswer);
      letsTryAgain(name)
      return
    }
  }

  winMessage(name)
    
}