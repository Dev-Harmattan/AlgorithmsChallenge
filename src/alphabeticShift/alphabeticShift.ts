export function alphabeticShift(inputString: string): string {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  const tempInputString = inputString.split('');
  for (let i = 0; i < tempInputString.length; i++) {
    if (alphabets.indexOf(inputString[i]) + 1 !== alphabets.length) {
      tempInputString[i] = alphabets[alphabets.indexOf(inputString[i]) + 1];
    } else {
      tempInputString[i] = alphabets[0];
    }
  }
  return tempInputString.join('');
}

console.log(alphabeticShift('crazy'));
