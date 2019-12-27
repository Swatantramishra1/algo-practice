// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

nums = [5, 7, 7, 8, 8, 10];
target = 8;

function getIndexFromArray(arr, t) {
  arr = arr;

  console.log([
    getFirst(arr, 0, arr.length - 1, t),
    getLast(arr, 0, arr.length - 1, t)
  ]);
}

function getFirst(arr, min, max, num) {
  if (max >= min) {
    const mid = Math.floor(min + (max - min) / 2);
    if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
      return mid;
    }

    if (arr[mid] < num) {
      return getFirst(arr, mid + 1, max, num);
    }
    return getFirst(arr, min, mid - 1, num);
  }

  return -1;
}

function getLast(arr, min, max, num) {
  if (max >= min) {
    const mid = Math.floor(min + (max - min) / 2);

    if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
      return mid;
    }

    if (arr[mid] > num) {
      return getLast(arr, min, mid - 1, num);
    }

    return getLast(arr, mid + 1, max, num);
  }

  return -1;
}

getIndexFromArray(nums, target);
