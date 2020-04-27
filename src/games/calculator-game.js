import generateNumber from '../number-generator.js';
import generateMathOperation from '../math-operation-generator.js';
import launchGame from '../game-engine.js';

const gameDescription = 'What is the result of the expression?';

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
