import generateNumber from '../number-generator.js';
import convertBooleanToYesNo from '../yes-no-bool-converter.js';

const isEven = (number) => number % 2 === 0;

export const gameDescription = () => 'Answer "yes" if the number is even, otherwise answer "no".';

export const generateQuestionItem = () => {
  const randomNumber = generateNumber(-100, 100);
  const answer = isEven(randomNumber);
  const humanReadableAnswer = convertBooleanToYesNo(answer);
  return {
    question: randomNumber,
    answer: humanReadableAnswer,
  };
};
