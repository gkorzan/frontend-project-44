
function rulesMessage() {
  console.log('What number is missing in the progression?');
}

function askQuestion(array) {
  console.log(`Riddle me this! \n [${array.toString().split(',').join(' ')}]`);
}

function incorrectAnswerMessage() {
  console.log('Looks like you have entered invalid answer!');
}
export {
  rulesMessage,
  askQuestion,
  incorrectAnswerMessage,
};

