// Link: https://edabit.com/challenge/M6fbYyBkzJXMAu39G

function compact(arr) {
  let res = [];
  for (let item of arr) {
    if (item) {
      res.push(item);
    }
  }

  return res;
}
