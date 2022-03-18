/*
 * 진행 : jisoo.Y(개인)
 * eval()을 활용한 사칙연산 계산기
 * input box를 통해 값을 받아와 계산
 * button click을통한 값을 받아와 계산
 */

import Calculator from './calculator.js';

const calculator = new Calculator();

window.addEventListener('click', (e) => {
  const targetValue = e.target.value;
  if (targetValue === '=') {
    checkInputCharactorAvailable(calculator.userData.value);
  } else {
    return;
  }
});

window.addEventListener('keyup', (event) => {
  const inputData = calculator.userData.value;

  if (event.key === 'Enter') {
    checkInputCharactorAvailable(inputData);
    if (inputData.length > 20) {
      alert("It's too long too calculate.");
      calculator.userData.value = '';
    }
  }
});

function checkInputCharactorAvailable(data) {
  const available = /[-+/*=()0-9]/;
  const available02 = /[-+/*=()]/;

  if (available.test(data) === false) {
    alert('Please Input Number And Operator(+,-,/,*)');
    calculator.userData.value = '';
    return;
  } else if (available02.test(data)) {
    alert('Please Input Number too');
    calculator.userData.value = '';
    return;
  } else {
    return;
  }
}
