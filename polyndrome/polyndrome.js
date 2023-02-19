// abba
// cdc
// 3/2 = 1.5 = 1
// 4/2 = 2
// middleIndex = 2

function isPalindrome(str) {
  let middleIndex = Math.floor(str.length / 2);
  let length = str.length;

  for (let i = 0; i < middleIndex; i++) {
    if (str[i] !== str[length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("cda"));
