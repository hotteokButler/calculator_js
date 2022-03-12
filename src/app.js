/*
 * 진행 : jisoo.Y(개인)
 * eval()을 활용한 사칙연산 계산기
 * input box를 통해 값을 받아와 계산
 * button click을통한 값을 받아와 계산
 */

import Calculator from './calculator.js';

const calculator = new Calculator();

calculator.getValues((value) => {
  const formula = calculator.userData.value;
  if (value !== '=' && value !== 'C') {
    calculator.userData.value += value;
  } else if (value === '=' || value === 'C') {
    if (value === '=') {
      calculator.userData.value = eval(formula);
      throw new Error("Can't calculate");
    } else if (value === 'C') {
      calculator.userData.value = '';
    }
  }
});