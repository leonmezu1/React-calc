import calculate from '../logic/calculate';

test('it stores a number when the data object is empty', () => {
  const data = { total: null, next: null, operator: null };
  const result = calculate(data, '1');
  expect(result).toMatchObject({ total: null, next: '1', operator: null });
});

test('if a number is typed after another this results in concatenation', () => {
  const data = { total: null, next: '1', operator: null };
  const result = calculate(data, '1');
  expect(result).toMatchObject({ total: null, next: '11', operator: null });
});

test('it stores the operator +', () => {
  const data = { total: '0', next: '1', operator: null };
  const result = calculate(data, '+');
  expect(result).toMatchObject({ total: '1', next: '', operator: '+' });
});

test('it stores the operator -', () => {
  const data = { total: '0', next: '1', operator: null };
  const result = calculate(data, '-');
  expect(result).toMatchObject({ total: '1', next: '', operator: '-' });
});

test('it stores the operator ÷', () => {
  const data = { total: '0', next: '1', operator: null };
  const result = calculate(data, '÷');
  expect(result).toMatchObject({ total: '1', next: '', operator: '÷' });
});

test('it stores the operator ×', () => {
  const data = { total: '0', next: '1', operator: null };
  const result = calculate(data, '×');
  expect(result).toMatchObject({ total: '1', next: '', operator: '×' });
});

test('it stores the operator %', () => {
  const data = { total: '0', next: '1', operator: null };
  const result = calculate(data, '%');
  expect(result).toMatchObject({ total: '1', next: '', operator: '%' });
});

test('it clears values', () => {
  const data = { total: '1', next: '1', operator: '+' };
  const result = calculate(data, 'AC');
  expect(result).toMatchObject({ total: '0', next: '0', operator: null });
});

test('it alloes dot operator', () => {
  const data = { total: null, next: '1', operator: '.' };
  const result = calculate(data, '.');
  expect(result).toMatchObject({ total: null, next: '1.', operator: '.' });
});

test('it allows negative sign operator', () => {
  const data = { total: '1', next: '1', operator: '+' };
  const result = calculate(data, '±');
  expect(result).toMatchObject({ total: '-1', next: '-1', operator: '+' });
});

test('it performs the operation when the = operator is used', () => {
  const data = { total: '1', next: '1', operator: '+' };
  const result = calculate(data, '=');
  expect(result).toMatchObject({ total: '0', next: '2', operator: null });
});
