/*
 * 이 부분은 main이 되는 index.js입니다.
 * 이 함수에서 DOM 요소들을 취득하고, 연산에 대한 함수를 호출합니다.
 */
import {getAddition, getDivision, getMultiplication, getSubtraction} from './arithmeticOperations.js';

document.addEventListener('DOMContentLoaded', () => {
  let submitButton = document.getElementById('submit-btn');

  submitButton.addEventListener('click', () => {
    let operand1 = document.getElementById('operand1').value;
    let operand2 = document.getElementById('operand2').value;
    let operators = document.getElementById('operator').options;
    let operator;
    let result = document.getElementById('result');

    for (let i = 0; i < operators.length; i++) {
      let option = operators.item(i);

      if (option.selected) {
        operator = option.value;
      }
    }

    operand1 = Number(operand1);
    operand2 = Number(operand2);

    switch (operator) {
      case 'plus':
        result.value = getAddition(operand1, operand2);
        break;
      case 'minus':
        result.value = getSubtraction(operand1, operand2);
        break;
      case 'mul':
        result.value = getMultiplication(operand1, operand2);
        break;
      case 'div':
        result.value = getDivision(operand1, operand2);
        break;
    }
  });
});
