export const randomNumberGenerator = (num) => Math.floor(Math.random() * num);

export const randomOperationCalc = () => {
  const operators = ['+', '-', '*'];
  const selectRandomOperator = randomNumberGenerator(operators.length);
  return operators[selectRandomOperator];
};
