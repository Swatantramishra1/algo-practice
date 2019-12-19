// Given an unsorted integer array, find the smallest missing positive integer.

// Input: [1,2,0]
// Output: 3

//Input: [3,4,-1,1]
// Output: 2

// Input: [7,8,9,11,12]
// Output: 1

// Your algorithm should run in O(n) time and uses constant extra space.

input = [7, 8, 9, 11, 12];

function getFirstPositiveNumber(arr) {
  const l = arr.length,
    exists = [];

  exists[l + 1] = false;

  for (let i = 0; i < l; i++) {
    if (arr[i] > 0 && arr[i] <= l) {
      exists[arr[i]] = true;
    }
  }

  for (let i = 1; i <= l; i++) {
    if (!exists[i]) {
      return i;
    }
  }

  return l + 1;
}

console.log(getFirstPositiveNumber(input));
