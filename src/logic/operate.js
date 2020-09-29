import Big from 'big.js';

const operate = (numberOne, numberTwo, operator) => {
  const first = Big(numberOne);
  const second = Big(numberTwo);

  let result = 0;

  switch (operator) {
    case '+':
      result = first.plus(second);
      break;
    case '-':
      result = first.minus(second);
      break;
    case '×':
      result = first.times(second);
      break;
    case '÷':
      result = second !== 0 ? first.div(second) : 0;
      break;
    case '%':
      result = first.div(second).times(100);
      break;
    default:
      result = 0;
  }
  return result.toString();
};

export default operate;
