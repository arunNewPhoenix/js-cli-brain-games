import generateNumber from '../number-generator.js';
import convertBooleanToYesNo from '../yes-no-bool-converter.js';
import launchGame from '../game-engine.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateQuestionItem = () => {
  const randomNumber = generateNumber(-100, 100);
  const answer = convertBooleanToYesNo(isEven(randomNumber));
  return {
    question: randomNumber,
    answer,
  };
};

export default () => launchGame(gameDescription, generateQuestionItem);
