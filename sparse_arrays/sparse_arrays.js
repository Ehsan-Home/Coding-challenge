// Link: https://www.hackerrank.com/challenges/sparse-arrays/submissions/code/315327458

function matchingStrings(stringList, queries) {
  let res = [];
  for (let query of queries) {
    let count = 0;
    for (let item of stringList) {
      if (query === item) {
        count++;
      }
    }
    res.push(count);
  }

  return res;
}
