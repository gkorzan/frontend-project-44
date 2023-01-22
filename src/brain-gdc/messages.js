function rulesMessage() {
  console.log('Find the greatest common divisor of given numbers.');
}

function askQuestion(firstArgument, secondArgument) {
  console.log(`Question: ${firstArgument} ${secondArgument}`);
}

function incorrectAnswerMessage() {
  console.log('Looks like you have entered invalid answer!');
}
export {
  rulesMessage,
  askQuestion,
  incorrectAnswerMessage,
};
