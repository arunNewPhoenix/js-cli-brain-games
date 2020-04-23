import generateNumber from './number-generator.js';

const generateOperation = () => {
  const operations = {
    add: {
      symbol: '+',
      fn: (a, b) => a + b,
    },
    sub: {
      symbol: '-',
      fn: (a, b) => a - b,
    },
    mul: {
      symbol: '*',
      fn: (a, b) => a * b,
    },
  };
  const operationNames = Object.keys(operations);
  const operationsCount = operationNames.length;
  const randomOperation = generateNumber(0, operationsCount - 1);
  return operations[operationNames[randomOperation]];
};

export const generateQuestionItem = () => {
  const firstNumber = generateNumber(1, 99);
  const secondNumber = generateNumber(1, 99);
  const operation = generateOperation();
  const answer = operation.fn(firstNumber, secondNumber).toString();
  return {
    question: `${firstNumber} ${operation.symbol} ${secondNumber}`,
    answer,
  };
};

export const gameDescription = () => 'What is the result of the expression?';
