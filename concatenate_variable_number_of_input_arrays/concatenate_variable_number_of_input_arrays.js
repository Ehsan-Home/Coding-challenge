// Link: https://edabit.com/challenge/Hs4TpDHX57Rqegmgg

function concat(...args) {
  let res = [];
  for (item of args) {
    for (innerItem of item) {
      res.push(innerItem);
    }
  }

  return res;
}
