// Link: https://edabit.com/challenge/GLbuMfTtDWwDv2F73

function countTrue(arr) {
  let count = 0;
  for (let item of arr) {
    if (item === true) {
      count++;
    }
  }

  return count;
}
