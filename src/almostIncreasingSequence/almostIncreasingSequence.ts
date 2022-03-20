export function almostIncreasingSequence(sequence: number[]): boolean {
  sequence.pop();
  let isSeques = false;
  for (let i = 0; i < sequence.length - 1; i++) {
    if (sequence[i] < sequence[i + 1]) {
      isSeques = true;
    } else {
      isSeques = false;
    }
  }
  return isSeques;
}

// console.log(almostIncreasingSequence([1, 3, 2, 1]))
// console.log(almostIncreasingSequence([1, 3, 2]))
