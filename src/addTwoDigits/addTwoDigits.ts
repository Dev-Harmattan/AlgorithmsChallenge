export function addTwoDigits(n: any): number {
  const numbers = n.toString().split('');
  return numbers.reduce((total: number, digit: any) => total + +digit, 0);
}

// console.log(addTwoDigits(29));
