import generateNumber from './number-generator.js';

export default () => {
  const operations = {
    add: {
      symbol: '+',
      fn: (a, b) => a + b,
    },
    sub: {
      symbol: '-',
      fn: (a, b) => a - b,
    },
    mul: {
      symbol: '*',
      fn: (a, b) => a * b,
    },
  };
  const operationNames = Object.keys(operations);
  const operationsCount = operationNames.length;
  const randomOperationPosition = generateNumber(0, operationsCount);
  return operations[operationNames[randomOperationPosition]];
};
