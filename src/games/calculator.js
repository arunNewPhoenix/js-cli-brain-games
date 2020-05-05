import generateNumber from '../number-generator.js';
import launchGame from '../game-engine.js';

const gameDescription = 'What is the result of the expression?';


const generateMathOperation = () => {
  const operations = {
    add: {
      sign: '+',
      fn: (a, b) => a + b,
    },
    sub: {
      sign: '-',
      fn: (a, b) => a - b,
    },
    mul: {
      sign: '*',
      fn: (a, b) => a * b,
    },
  };
  const operationNames = Object.keys(operations);
  const operationsCount = operationNames.length;
  const randomOperationPosition = generateNumber(0, operationsCount);
  return operations[operationNames[randomOperationPosition]];
};

const generateGameStepData = () => {
  const firstNumber = generateNumber(1, 100);
  const secondNumber = generateNumber(1, 100);
  const operation = generateMathOperation();
  const answer = operation.fn(firstNumber, secondNumber).toString();
  return {
    question: `${firstNumber} ${operation.sign} ${secondNumber}`,
    answer,
  };
};

export default () => launchGame(gameDescription, generateGameStepData);
