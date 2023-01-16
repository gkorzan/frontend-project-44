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

import { generateExpression } from "./expression.js";
import { getGenerator } from '../utils/generate-number.js';


const generator = getGenerator(5)
const generateNumber = () => 5 + generator()

export default function startGame() {
    const name = greet();
    rulesMessage();

  const numberOfRounds = validateRoundNumber(requestRoundNumber(name));
  let correctAnswersNumber = 0;

  for (let i = 0; i < numberOfRounds; i += 1) {
    const expressionLength = generateNumber()
    const currentExpression = generateExpression(expressionLength)
    askQuestion(
     currentExpression.hiddenArray
    );
    let currentAnswer = Number.NaN;
    while (Number.isNaN(currentAnswer)) {
      currentAnswer = parseInt(requestAnswerSimple(), 10);
      if (Number.isNaN(currentAnswer)) {
        incorrectAnswerMessage();
      }
    }
    if (currentExpression.hiddenNumber === currentAnswer) {
      correctAnswersNumber += 1;
      correctMessage();
    } else {
      wrongAnswerMessage(name, currentExpression.hiddenNumber, currentAnswer);
    }
  }

  finalScore(correctAnswersNumber, numberOfRounds, name);
  bye();
    
}