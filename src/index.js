import readlineSync from 'readline-sync';

export const questionGenerator = (GameType, gameTitle) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameTitle);
  let counterAnswers = 0;
  while (true) {
    const selectedGame = new GameType();
    console.log('Question:', selectedGame.getQuestion());
    const answer = readlineSync.question('Your answer: ');
    if (answer === selectedGame.getResult()) {
      counterAnswers += 1;
      console.log('Correct!');
      if (counterAnswers === 3) {
        console.log(`Congratulations, ${name}!`);
        break;
      }
    } else {
      GameType.getError(selectedGame.getResult(), answer, name);
      break;
    }
  }
};
