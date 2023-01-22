const Answer = {
  POSITIVE: 'yes',
  NEGATIVE: 'no',
  EXIT: 'exit',
};

function isAvaliableAnswer(answer) {
  return Object.values(Answer).includes(answer);
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
  Answer, isAvaliableAnswer, reverseAnswer, isExit,
};
