// Link: https://edabit.com/challenge/zRCyxKBBmr4F2x4Bv

function tetra(n) {
  // 1: 1 = 1
  // 2: 2 + 1 = 3
  // 3: 3 + 2 + 1 = 6
  // 4: 4 + 3 + 2 + 1 = 10
  // 5 : 5 + 4 + 3 + 2 + 1 = 15
  let res = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      res += j;
    }
  }

  return res;
}
