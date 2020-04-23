import generateNumber from '../number-generator.js';

const isEven = (number) => number % 2 === 0;

const ANSWER_YES = 'yes';
const ANSWER_NO = 'no';

export const gameDescription = () => 'Answer "yes" if the number is even, otherwise answer "no".';

export const generateQuestionItem = () => {
  const randomNumber = generateNumber(-100, 100);
  const answer = isEven(randomNumber);
  const humanReadableAnswer = answer ? ANSWER_YES : ANSWER_NO;
  return {
    question: randomNumber,
    answer: humanReadableAnswer,
  };
};
