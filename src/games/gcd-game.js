import generateNumber from '../number-generator.js';
import launchGame from '../game-engine.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, (a % b));
};

const generateQuestionItem = () => {
  const number = generateNumber(1, 10);
  const firstMultiplier = generateNumber(1, 10);
  const secondMultiplier = generateNumber(1, 10);

  const firstNumber = number * firstMultiplier;
  const secondNumber = number * secondMultiplier;
  const greatestCommonDivisor = gcd(firstNumber, secondNumber);

  return {
    question: `${firstNumber} ${secondNumber}`,
    answer: greatestCommonDivisor.toString(),
  };
};

export default () => launchGame(gameDescription, generateQuestionItem);
