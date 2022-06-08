/*
 * 이 곳에 사칙연산에 관한 함수 모듈들을 작성합니다.
 */
const getSubtraction = (operand1, operand2) => {
    let minus = operand1 - operand2;
  
    return minus;
  };
  
  const getDivision = (operand1, operand2) => {
    if(operand2 == 0){
      window.alert("0으로 나누면 안됍니다.");
    } else{
      let div = operand1 / operand2;
      return div;
    }
  };