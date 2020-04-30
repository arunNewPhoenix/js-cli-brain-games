import generateNumber from '../number-generator.js';
import launchGame from '../game-engine.js';

const gameDescription = 'What number is missing in the progression?';

const generateRandomProgression = (length) => {
  const randomStartNumber = generateNumber(1, 10);
  const randomModifier = generateNumber(2, 5);
  return [...Array(length).keys()]
    .map((i) => randomStartNumber + (i * randomModifier));
};

const generateQuestionItem = () => {
  const progressionLength = 10;
  const numbers = generateRandomProgression(progressionLength);
  const randomPositionToExclude = generateNumber(0, progressionLength - 1);
  const numberToExclude = numbers[randomPositionToExclude];
  return {
    question: numbers.join(' ').replace(numberToExclude.toString(), '..'),
    answer: numberToExclude.toString(),
  };
};

export default () => launchGame(gameDescription, generateQuestionItem);
