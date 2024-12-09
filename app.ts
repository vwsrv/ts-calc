function sum(
  digitOne: string | number,
  digitTwo: string | number,
  condition: 10 | 2 | 16
): string {
  const numberOne = parseInt(digitOne.toString(), condition);
  const numberTwo = parseInt(digitTwo.toString(), condition);
  const result = numberOne + numberTwo;

  return result.toString(condition);
}

function subtraction(
  digitOne: string | number,
  digitTwo: string | number,
  condition: 10 | 2 | 16
): string {
  const numberOne = parseInt(digitOne.toString(), condition);
  const numberTwo = parseInt(digitTwo.toString(), condition);
  const result = numberOne - numberTwo;

  return result.toString(condition);
}

function multipy(
    digitOne: string | number,
    digitTwo: string | number,
    condition: 10 | 2 | 16
): string {
    const numberOne = parseInt(digitOne.toString(), condition);
    const numberTwo = parseInt(digitTwo.toString(), condition);
    const result = numberOne * numberTwo;
  
    return result.toString(condition);
}

function devide(
    digitOne: string | number,
    digitTwo: string | number,
    condition: 10 | 2 | 16
): string {
    const numberOne = parseInt(digitOne.toString(), condition);
    const numberTwo = parseInt(digitTwo.toString(), condition);
    
    if (numberTwo === 0) {
        console.log(numberTwo, '- переменная не может быть равна нулю!');
        
    }

    const result = numberOne / numberTwo;
  
    return result.toString(condition);
}