import readlineSync from 'readline-sync';

export default function greet() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}!`);
}
