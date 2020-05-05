import generateNumber from '../number-generator.js';
import launchGame from '../game-engine.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateGameStepData = () => {
  const question = generateNumber(-100, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return {
    question,
    answer,
  };
};

export default () => launchGame(gameDescription, generateGameStepData);
