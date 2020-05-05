import generateNumber from '../number-generator.js';
import launchGame from '../game-engine.js';

const gameDescription = 'What number is missing in the progression?';

const generateRandomProgression = (length, startNumber, step) => ([...Array(length).keys()]
  .map((i) => startNumber + (i * step))
);

const generateGameStepData = () => {
  const progressionLength = 10;
  const startNumber = generateNumber(1, 10);
  const progressionStep = generateNumber(-10, 10);
  const progression = generateRandomProgression(progressionLength, startNumber, progressionStep);
  const randomPositionToExclude = generateNumber(0, progressionLength - 1);
  const numberToExclude = progression[randomPositionToExclude];
  return {
    question: progression.join(' ').replace(numberToExclude.toString(), '..'),
    answer: numberToExclude.toString(),
  };
};

export default () => launchGame(gameDescription, generateGameStepData);
