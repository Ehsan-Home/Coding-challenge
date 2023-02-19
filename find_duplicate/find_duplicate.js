// Question by myself

function findDuplicate(arr) {
  // You can use either map or obj
  const map = new Map();
  for (let item of arr) {
    if (map.has(item)) {
      map.set(item, true);
    } else {
      map.set(item, false);
    }
  }

  map.forEach((value, key) => {
    if (value == true) {
      console.log(key);
    }
  });
}

findDuplicate([1, 3, 4, 3, 1, 3, 4, 5, 6, 1, 2, 2]);
