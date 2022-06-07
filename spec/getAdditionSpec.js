/*
 * 이 테스트를 기반으로 덧셈 함수 모듈을 작성합니다.
 */
describe('더하기 연산에 대한 테스트', () => {
  let operand1;
  let operand2;
  let operand3;
  let operand4;

  beforeEach(() => {
    operand1 = 10;
    operand2 = 5;
    operand3 = 1.5;
    operand4 = 0.2;
  });

  /*
  * getAddition이라는 함수를 만들고, 이하의 테스트들이 통과하도록 제작해주세요.
  * 나머지 뺄셈, 곱셈, 나눗셈에 대해서도 마찬가지입니다.
   */
  it('더하기 연산1 - 정수와 정수', () => {
    expect(getAddition(operand1, operand2)).toEqual(10 + 5);
  });

  it('더하기 연산2 - 정수와 실수', () => {
    expect(getAddition(operand1, operand3)).toEqual(10 + 1.5);
  });

  it('더하기 연산3 - 실수와 실수', () => {
    expect(getAddition(operand3, operand4)).toEqual(1.5 + 0.2);
  });
});
