function isPrime(num) {
    if (num == 2 || num == 3)
      return true;
    if (num <= 1 || num % 2 == 0 || num % 3 == 0)
      return false;  
    for (let i = 5; i * i <= num ; i+=6)
      if (num % i == 0 || num % (i + 2) == 0)
        return false;
    return true;
}

import { Answer } from "../utils/answers.js";

function isCorrectAnswer(answer, number) {
    if (Answer.POSITIVE === answer && isPrime(number)) return true;
    if (Answer.NEGATIVE === answer && !isPrime(number)) return true;
  
    return false;
  }

  export {isCorrectAnswer}