export function alphabetSubsequence(s: string): boolean {
  let lowestCharCode: number = s.charCodeAt(0);
  let isSubsequence =  false;
  for (let i = 1; i < s.length - 1; i++) {
    if (lowestCharCode < s.charCodeAt(i) && lowestCharCode !== s.charCodeAt(i)) {
      isSubsequence = true;
    } else {
      isSubsequence = false;
    }
    lowestCharCode = s.charCodeAt(i);
  }
  return isSubsequence;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
