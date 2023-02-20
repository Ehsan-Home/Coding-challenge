// Link: https://edabit.com/challenge/Ra85gzkCTtXrNyCag

// add_ly = add_suffix("ly")
// add_ly("hopeless") ➞ "hopelessly"
// add_ly("total") ➞ "totally"
function add_suffix(suffix) {
  return function (word) {
    return word + suffix;
  };
}
