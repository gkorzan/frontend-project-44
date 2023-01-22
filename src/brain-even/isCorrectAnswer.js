import { Answer } from '../utils/answers.js';

function isCorrectAnswer(answer, isEven) {
  if (Answer.POSITIVE === answer && isEven) return true;
  if (Answer.NEGATIVE === answer && !isEven) return true;

  return false;
}

export default isCorrectAnswer;
