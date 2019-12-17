// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Input: ["flower","flow","flight"]
// Output: "fl"

const input = ["flower", "flow", "flight"];

// Method 1
function getCommonPrefix(arr) {
  if (arr.length === 0) {
    return "";
  }

  if (arr.length === 1) {
    return arr;
  }

  arr = arr.sort((a, b) => (a.toUpperCase() > b.toUpperCase() ? 1 : -1));

  const length = arr.length;
  const minSearchLength = Math.min(arr[0].length, arr[length - 1].length);
  const first = arr[0];
  const last = arr[length - 1];
  let i = 0;
  while (i < minSearchLength && first[i] == last[i]) {
    i++;
  }

  return first.slice(0, i);
}

console.log(getCommonPrefix(input));

// Complexity for this problem >>> O(MinSearchLength * n * logn)
