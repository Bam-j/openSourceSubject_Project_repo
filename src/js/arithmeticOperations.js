/*
 * 이 곳에 사칙연산에 관한 함수 모듈들을 작성합니다.
 */
export const getAddition = (operand1, operand2) => operand1 + operand2;

export const getSubtraction = (operand1, operand2) => operand1 - operand2;

export const getMultiplication = (operand1, operand2) => operand1 * operand2;

export const getDivision = (operand1, operand2) => {
  if (!operand2) {
    window.alert('0으로 나눌 수 없습니다.');

    document.getElementById('operand1').value = null;
    document.getElementById('operand2').value = null;
    document.getElementById('result').value = ' ';

    return;
  }

  return operand1 / operand2;
};
