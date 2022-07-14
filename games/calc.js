import { randomNumberGenerator, randomOperationCalc } from '../src/utilites.js';
import { questionGenerator } from '../src/index.js';

export const calc = () => {
  class CalcGame {
    constructor() {
      this.randomOperator = randomOperationCalc();
      this.firstOperand = randomNumberGenerator(100);
      this.secondOperand = randomNumberGenerator(100);
      this.randomExpression = `${this.firstOperand} ${this.randomOperator} ${this.secondOperand}`;
    }

    getQuestion() {
      return this.randomExpression;
    }

    static getError(result, answer, name) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${name}!`);
    }

    getResult() {
      switch (this.randomOperator) {
        case '-': {
          this.result = this.firstOperand - this.secondOperand;
          return this.result.toString();
        }
        case '+': {
          this.result = this.firstOperand + this.secondOperand;
          return this.result.toString();
        }
        case '*': {
          this.result = this.firstOperand * this.secondOperand;
          return this.result.toString();
        }
        default:
          return false;
      }
    }
  }
  questionGenerator(CalcGame, 'What is the result of the expression?');
};
