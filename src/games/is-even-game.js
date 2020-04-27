import generateNumber from '../number-generator.js';
import convertBooleanToYesNo from '../yes-no-bool-converter.js';
import launchGame from '../game-engine.js';

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

export const generateQuestionItem = () => {
  const randomNumber = generateNumber(-100, 100);
  const answer = isEven(randomNumber);
  const humanReadableAnswer = convertBooleanToYesNo(answer);
  return {
    question: randomNumber,
    answer: humanReadableAnswer,
  };
};

export default () => launchGame(gameDescription, generateQuestionItem);
