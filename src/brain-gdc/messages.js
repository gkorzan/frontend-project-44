
function rulesMessage() {
  console.log('Find the greatest common divisor of given numbers.');
}

function askQuestion(firstArgument, secondArgument) {
  console.log(`Riddle me this! \n [${firstArgument} ${secondArgument}]`);
}

function incorrectAnswerMessage() {
  console.log('Looks like you have entered invalid answer!');
}
export {
  rulesMessage,
  askQuestion,
  incorrectAnswerMessage,
};

