export function areSimilar(a: number[], b: number[]): boolean {
  let isSimilar: boolean;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if(a[i] === b[j]) {
        isSimilar = true;
      } else {
        isSimilar = false;
      }
    }
  }
  return isSimilar;
}

// console.log(areSimilar([1, 2, 3], [1, 2, 3]));
// console.log(areSimilar([1, 2, 3], [2, 1, 3]));
// console.log(areSimilar([1, 2, 2], [2, 1, 1]));
