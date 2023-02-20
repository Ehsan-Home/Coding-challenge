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

// flat combines all inner arrays into a single array
console.log(args.flat(Infinity));
