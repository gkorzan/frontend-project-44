function rulesMessage() {
  console.log('What is the result of the expression?');
}

function askQuestion(firstArgument, secondArgument, operand) {
  console.log(`Question: ${firstArgument} ${operand} ${secondArgument}`);
}

function incorrectAnswerMessage() {
  console.log('Looks like you have entered invalid answer!');
}
export { rulesMessage, askQuestion, incorrectAnswerMessage };
