import React, { useState } from 'react';
import './App.css';

function convertToDigigts(number) {
  let digits = [];

  const negative = number < 0;
  number = negative ? -number : number;
  while (number) {
    const digit = number % 10;
    number = (number - digit) / 10;
    digits.push(digit);
  }
  digits = digits.reverse();

  if (negative)
    digits[0] = digits[0] * -1;

  return digits;
}

function App(props) {
  const [number, setNumber] = useState(0);
  const digits = convertToDigigts(number);

  function handleChange(event) {
    setNumber(event.target.value);
  }

  return (
    <div className='container'>
      <p>Insert a number:</p>
      <input
        type='number'
        onChange={handleChange}
      />
      {
        digits.length > 0 &&
        <p>The digits are:</p>
      }
      {
        digits.map((value, index) => {
          const add = (index === digits.length - 1) ? '' : ' , ';
          return `${value}${add}`;
        })
      }
    </div>
  );
}

export default App;
