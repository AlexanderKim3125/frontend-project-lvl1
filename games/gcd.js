import { questionGenerator } from '../src/index.js';
import { randomNumberGenerator } from '../src/utilites.js';

export const gcd = () => {
  class FindGcd {
    constructor() {
      this.firstOperand = randomNumberGenerator(100);
      this.secondOperand = randomNumberGenerator(100);
    }

    getQuestion() {
      return `${this.firstOperand} ${this.secondOperand}`;
    }

    static getError(result, answer, name) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${name}!`);
    }

    getResult() {
      let a = Math.abs(this.firstOperand);
      let b = Math.abs(this.secondOperand);
      if (b > a) { const temp = a; a = b; b = temp; }
      while (true) {
        if (b === 0) return a.toString();
        a %= b;
        if (a === 0) return b.toString();
        b %= a;
      }
    }
  }
  questionGenerator(FindGcd, 'Find the greatest common divisor of given numbers.');
};
