import operate from './operate';

const calculate = (data, content) => {
  const { total, next, operator } = data;
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operators = ['÷', '×', '-', '+', '%'];

  if (operators.includes(content)) { return { total: next, next: '', operator: content }; }

  if (digits.includes(content)) { return { total, next: (next || '') + content, operator }; }

  switch (content) {
    case 'AC':
      return { total: '0', next: '0', operator: null };
    case '.':
      return { total, next: next.split('').includes('.') ? next : `${(next || 0)}.`, operator };
    case '±':
      return { total: (total * -1).toString(), next: (next * -1).toString(), operator };
    case '=':
      return { total: '0', next: operate(Number(total), Number(next), operator), operator: null };
    default:
      return { total, next, operator };
  }
};

export default calculate;
