/*
 * 이 테스트를 기반으로 뺄셈 함수 모듈을 작성합니다.
 */
describe('빼기 연산에 대한 테스트', () => {
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

  it('빼기 연산1 - 정수와 정수', () => {
    expect(getSubtraction(operand1, operand2)).toEqual(10 - 5);
  });

  it('빼기 연산2 - 정수와 실수', () => {
    expect(getSubtraction(operand1, operand3)).toEqual(10 - 1.5);
  });

  it('빼기 연산3 - 실수와 실수', () => {
    expect(getSubtraction(operand3, operand3)).toEqual(1.5 - 0.2);
  });
});
