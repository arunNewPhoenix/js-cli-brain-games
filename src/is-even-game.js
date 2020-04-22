import readlineSync from 'readline-sync';

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const generateNumber = () => getRandomInteger(-500, 500);

const isEven = (number) => number % 2 === 0;

const ANSWER_YES = 'yes';
const ANSWER_NO = 'no';

const isAnswerEven = (answer) => answer === ANSWER_YES;

const convertAnswerToHumanReadable = (answer) => (answer ? ANSWER_YES : ANSWER_NO);

const startGame = (userName, attempts = 3) => {
  const performGameCycle = (remainingAttempts) => {
    if (remainingAttempts === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const numberForQuestion = generateNumber();
    console.log(`Question: ${numberForQuestion}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const isUserThinksEven = isAnswerEven(userAnswer);
    const realAnswer = isEven(numberForQuestion);

    if (realAnswer !== isUserThinksEven) {
      const humanReadableAnswer = convertAnswerToHumanReadable(realAnswer);
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${humanReadableAnswer}"`);
      return;
    }
    console.log('Correct!');
    performGameCycle(remainingAttempts - 1);
  };

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  performGameCycle(attempts);
};

export default startGame;
