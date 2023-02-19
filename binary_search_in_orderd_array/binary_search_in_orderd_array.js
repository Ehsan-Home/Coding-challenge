function binarySearch(list, item) {
  if (list.length == 0) {
    return false;
  }

  let middleIndex = Math.floor(list.length / 2);
  let middleItem = list[middleIndex];

  if (middleItem == item) {
    return true;
  } else if (item > middleItem) {
    return binarySearch(list.slice(middleIndex + 1), item);
  } else if (item < middleItem) {
    return binarySearch(list.slice(0, middleIndex), item);
  }
}

const res = binarySearch([1, 6, 8, 10, 20], 6);
console.log(res);
