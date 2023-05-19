import { FC, useState } from 'react';

const validateExpression = (str: string): boolean => {
  const pattern = /^\d+(\.\d+)?[-+*/]\d+(\.\d+)?$/;
  return pattern.test(str);
};

const evaluateExpression = (expression: string): string => {
  // ищем оператор
  const regex = /(\d+)([-+*/])(\d+)/;

  // разделяем 2 операнда
  const matches = expression.match(regex);

  if (!matches) {
    return expression;
  }

  const num1 = parseInt(matches[1], 10);
  const operator = matches[2];
  const num2 = parseInt(matches[3], 10);

  let result: number;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      throw new Error('Invalid operator');
  }

  return result.toString();
};

const Calculator: FC = () => {
  const [input, setInput] = useState('');
  const operators = ['*', '/', '+', '-'];
  const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'DEL', 'CLEAR'];

  const handleButtonClick = (value: string) => {
    if (value === 'DEL') {
      setInput((prevInput) => prevInput.slice(0, -1));
    } else if (value === 'CLEAR') {
      setInput('');
    } else if (value === '=') {
      try {
        const result = evaluateExpression(input);
        setInput(result);
      } catch (error) {
        setInput('Error');
      }
    } else {
      if (operators.includes(value)) {
        if (input.search(/[*/\-+]/) === -1) {
          setInput((prevInput) => prevInput + value);
        } else {
          if (validateExpression(input)) {
            const result = evaluateExpression(input);
            setInput(result + value);
          } else {
            setInput((prevInput) => prevInput.slice(0, -1) + value);
          }
        }
      } else {
        setInput((prevInput) => prevInput + value);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <input type="text" className="w-full p-2 bg-gray-100" value={input} readOnly />
      <div className="grid grid-cols-4 gap-2">
        {buttons.map((button) => (
          <button
            key={button}
            type={'button'}
            className={`${button === '=' ? 'col-span-2' : ''} bg-gray-300 p-2`}
            onClick={() => handleButtonClick(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
