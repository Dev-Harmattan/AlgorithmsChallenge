export function allLongestStrings(inputArray: string[]): string[] {
  let maxStringIndex = 0;
  let maxStringLength = 0;
  let maxsStringsArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > maxStringLength) {
      maxStringLength = inputArray[i].length;
    }
  }

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length === maxStringLength) {
      maxsStringsArray.push(inputArray[i]);
    }
  }

  return maxsStringsArray;
}

console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd']));
