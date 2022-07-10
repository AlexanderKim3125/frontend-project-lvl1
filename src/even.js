import readlineSync from 'readline-sync';

const consoleGenerator = (str) => console.log(str);

export const even = () => {
  consoleGenerator('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  consoleGenerator(`Hello, ${name}!`);
  consoleGenerator('Welcome to the Brain Games!');
  consoleGenerator('Answer "yes" if the number is even, otherwise answer "no".');
  let counterAnswers = 0;
  let resultAnswer;
  while (true) {
    const randomNumber = Math.floor(Math.random() * 100);
    consoleGenerator(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (randomNumber % 2 === 0) {
      resultAnswer = 'yes';
      if (answer === resultAnswer) {
        counterAnswers += 1;
        consoleGenerator('Correct!');
        if (counterAnswers === 3) {
          consoleGenerator(`Congratulations, ${name}!`);
          break;
        }
      } else {
        break;
      }
    } else if (randomNumber % 2 !== 0) {
      resultAnswer = 'no';
      if (answer === resultAnswer) {
        counterAnswers += 1;
        consoleGenerator('Correct!');
        if (counterAnswers === 3) {
          consoleGenerator(`Congratulations, ${name}!`);
          break;
        }
      } else {
        break;
      }
    }
  }
};
