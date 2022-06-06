describe('+ 연산에 대한 테스트', () => {
    let operand1;
    let operand2;
    let operand3;

    beforeEach(() => {
       operand1 = 10;
       operand2 = 5;
       operand3 = 1.5;
    });

    it('더하기 연산1 - 정수와 정수', () => {
        expect(getPlusOperationResult(operand1, operand2)).toEqual(10 + 5);
    });

    it('더하기 연산2 - 정수와 실수', () => {
        expect(getPlusOperationResult(operand1, operand3)).toEqual(10 + 1.5);
    });
});