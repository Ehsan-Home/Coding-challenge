// Link: https://edabit.com/challenge/pPNAs5PvB3WvnDwDM

function toArray(obj) {
  let res = [];

  for (let key in obj) {
    let temp = [];
    temp.push(key);
    temp.push(obj[key]);
    res.push(temp);
  }

  return res;
}

// Shorter approach
// function toArray(obj) {
// 	return Object.entries(obj);
// }
