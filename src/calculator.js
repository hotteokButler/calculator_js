'use strict';

const Key = Object.freeze({
  numberOnClickClass: 'calculator__number--onClick',
  operatorOnClickClass: 'calculator__operator--onClick',
});

export default class Calculator {
  constructor() {
    this.userInput = document.querySelector('.calculator__form');
    this.userData = this.userInput.querySelector('.calculator__input');
    this.pads = document.querySelector('.calculator__pads');
    this.value = undefined;
    this.userInput.addEventListener('submit', (event) => {
      event.preventDefault();
      this.getInput(event);
    });

    this.pads.addEventListener('mousedown', (event) => {
      const target = event.target;
      this.onPadStyle(target);
    });

    this.pads.addEventListener('mouseup', (event) => {
      const target = event.target;
      this.offPadStyle(target);
      this.getButton(target);
      this.value && this.getValues();
    });
  }

  getButton(target) {
    const targetValue = target.value;
    if (targetValue && targetValue !== undefined) {
      this.value = targetValue;
    } else {
      return;
    }
  }

  getValues() {
    const value = this.value;
    if (value !== '=' && value !== 'C') {
      this.userData.value += value;
    } else if (value === '=') {
      if (value === '=') {
        this.userData.value = eval(this.userData.value);
      }
    } else if (value === 'C') {
      this.userData.value = '';
    }
  }

  getInput(event) {
    const inputValue = event.target.querySelector('input').value;
    if (inputValue) {
      event.target.querySelector('input').value = eval(inputValue);
    } else {
      return;
    }
  }

  onPadStyle(target) {
    if (target.classList.contains('calculator__number')) {
      target.classList.add(Key.numberOnClickClass);
    } else if (target.classList.contains('calculator__operator')) {
      target.classList.add(Key.operatorOnClickClass);
    }
  }
  offPadStyle(target) {
    if (target.classList.contains(Key.numberOnClickClass)) {
      target.classList.remove(Key.numberOnClickClass);
    } else if (target.classList.contains(Key.operatorOnClickClass)) {
      target.classList.remove(Key.operatorOnClickClass);
    }
  }
}
