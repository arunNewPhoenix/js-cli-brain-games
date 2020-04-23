import readlineSync from 'readline-sync';

import greetAndAskName from './greetings.js';

const startGame = (getGameDescription, generateQuestionItem, attempts = 3) => {
  const userName = greetAndAskName();

  const performGameCycle = (remainingAttempts) => {
    if (remainingAttempts === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const questionItem = generateQuestionItem();
    console.log(`Question: ${questionItem.question}`);

    const userAnswer = readlineSync.question('Your answer: ').trim();
    const isAnswerCorrect = (userAnswer === questionItem.answer);

    if (!isAnswerCorrect) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${questionItem.answer}"`);
      return;
    }
    console.log('Correct!');
    performGameCycle(remainingAttempts - 1);
  };

  console.log(getGameDescription());
  performGameCycle(attempts);
};

export default startGame;
