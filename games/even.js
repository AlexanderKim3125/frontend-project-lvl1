import { questionGenerator } from '../src/index.js';
import { randomNumberGenerator } from '../src/utilites.js';

export const even = () => {
  class findEven {
    constructor() {
      this.randomNumber = randomNumberGenerator(100);
    }

    getQuestion() {
      return this.randomNumber;
    }

    static getError(result, answer, name) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${name}!`);
    }

    getResult() {
      if (this.randomNumber % 2 === 0) {
        return 'yes';
      }
      return 'no';
    }
  }
  questionGenerator(findEven, 'Answer "yes" if the number is even, otherwise answer "no".');
};
