/*
 * 이 부분은 main이 되는 index.js입니다.
 * 이 함수에서 DOM 요소들을 취득하고, 연산에 대한 함수를 호출합니다.
 */
document.addEventListener('DOMContentLoaded', () => {
  let submitButton = document.getElementById('submit-btn');

  submitButton.addEventListener('click', () => {
    let operand1 = document.getElementById('operand1');
    let operand2 = document.getElementById('operand2');
    let operators = document.getElementById('operator').options;
    let operator;

    for (let i = 0; i < operators.length; i++) {
      let option = operators.item(i);

      if (option.selected) {
        operator = option.value;
      }
    }

    switch (operator) {
      case 'plus':
        break;
      case 'minus':
        break;
      case 'mul':
        break;
      case 'div':
        break;
      default:
        break;
    }
  });
});
