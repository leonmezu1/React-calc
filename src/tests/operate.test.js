import operate from '../logic/operate';

test('it adds', () => {
  const result = operate('2', '5', '+');
  expect(result).toBe('7');
});

test('it subtracts', () => {
  const result = operate('2', '5', '-');
  expect(result).toBe('-3');
});

test('it multiplies', () => {
  const result = operate('2', '5', '×');
  expect(result).toBe('10');
});

test('it divides', () => {
  const result = operate('5', '2', '÷');
  expect(result).toBe('2.5');
});
