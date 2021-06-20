import React, { ChangeEvent, useState } from 'react';

export const replaceCamelWithSpaces = (str: string) =>
  str.replace(/\B([A-Z])\B/g, ' $1'); // \B 단어 경계가 아닌 부분에 대응, $1 첫 번째 괄호 값

const Button = () => {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [check, setCheck] = useState(true);
  const newButtonColor =
    buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <>
      <button
        onClick={() => setButtonColor(newButtonColor)}
        style={{ backgroundColor: check ? 'gray' : buttonColor }}
        disabled={check}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <input
        type="checkbox"
        id="checkbox-button"
        defaultChecked={check}
        aria-checked={check}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setCheck(e.target.checked)
        }
      />
      <label htmlFor="checkbox-button">Disable button</label>
    </>
  );
};

export default Button;
