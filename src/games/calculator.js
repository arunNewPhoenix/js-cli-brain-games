import generateNumber from '../number-generator.js';
import launchGame from '../game-engine.js';

const gameDescription = 'What is the result of the expression?';


const generateMathOperation = () => {
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
  const randomOperationPosition = generateNumber(0, operationsCount);
  return operations[operationNames[randomOperationPosition]];
};

const generateQuestionItem = () => {
  const firstNumber = generateNumber(1, 100);
  const secondNumber = generateNumber(1, 100);
  const operation = generateMathOperation();
  const answer = operation.fn(firstNumber, secondNumber).toString();
  return {
    question: `${firstNumber} ${operation.symbol} ${secondNumber}`,
    answer,
  };
};

export default () => launchGame(gameDescription, generateQuestionItem);
