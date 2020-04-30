import generateNumber from '../number-generator.js';
import launchGame from '../game-engine.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const firstPrime = 2;
  if (num < firstPrime) return false;
  const root = Math.sqrt(num);
  for (let i = firstPrime; i <= root; i += 1) {
    if (num % i === 0) return false;
  }
  return false;
};

const generateQuestionItem = () => {
  const randomNumber = generateNumber(0, 1000);
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  return {
    question: randomNumber,
    answer,
  };
};

export default () => launchGame(gameDescription, generateQuestionItem);
