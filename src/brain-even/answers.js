const Answer = {
  POSITIVE: 'yes',
  NEGATIVE: 'no',
  EXIT: 'exit',
};

function isAvaliableAnswer(answer) {
  return Object.values(Answer).includes(answer);
}

function isCorrectAnswer(answer, isEven) {
  if (Answer.POSITIVE === answer && isEven) return true;
  if (Answer.NEGATIVE === answer && !isEven) return true;

  return false;
}

function reverseAnswer(answer) {
  if (Answer.NEGATIVE === answer) return Answer.POSITIVE;
  return Answer.NEGATIVE;
}

function isExit(answer) {
  if (Answer.EXIT === answer) return true;
  return false;
}

export {
  Answer, isAvaliableAnswer, isCorrectAnswer, reverseAnswer, isExit,
};
