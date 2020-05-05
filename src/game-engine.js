import readlineSync from 'readline-sync';

const greetAndAskName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const startGame = (getGameDescription, generateGameStepData, attemptCount = 3) => {
  const userName = greetAndAskName();

  const performGameCycle = (remainingAttemptCount) => {
    if (remainingAttemptCount === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const questionItem = generateGameStepData();
    console.log(`Question: ${questionItem.question}`);

    const userAnswer = readlineSync.question('Your answer: ').trim();
    const isAnswerCorrect = (userAnswer === questionItem.answer);

    if (!isAnswerCorrect) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${questionItem.answer}"`);
      return;
    }
    console.log('Correct!');
    performGameCycle(remainingAttemptCount - 1);
  };

  console.log(getGameDescription);
  performGameCycle(attemptCount);
};

export default startGame;
