import generateNumber from '../number-generator.js';
import convertBooleanToYesNo from '../yes-no-bool-converter.js';

export const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const root = Math.sqrt(num);
  for (let i = 2; i <= root; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

export const generateQuestionItem = () => {
  const randomNumber = generateNumber(0, 1000);
  const answer = isPrime(randomNumber);
  const humanReadableAnswer = convertBooleanToYesNo(answer);
  return {
    question: randomNumber,
    answer: humanReadableAnswer,
  };
};
