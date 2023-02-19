function binarySearch(arr, item, low = 0, high = arr.length - 1) {
  if (low > high) {
    return -1;
  }

  const mid = Math.floor((low + high) / 2);
  const guess = arr[mid];

  if (guess === item) {
    return mid;
  } else if (guess > item) {
    return binarySearch(arr, item, low, mid - 1);
  } else {
    return binarySearch(arr, item, mid + 1, high);
  }
}

const res = binarySearch([1, 3, 4, 6], 16);
console.log(res);
