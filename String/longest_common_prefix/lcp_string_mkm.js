// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Input: ["flower","flow","flight"]
// Output: "fl"

/**
 * Using binary Search
 * Time Complexity: O(NMLoogM) n=> no of strings m=>length of first string
 * Auxilary space: O(M)
 */
const input = ["flower", "flow", "flight"];

function allContainsPrefix(pre, arr) {
  let bool = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(pre) === -1) {
      bool = false;
      break;
    }
  }

  return bool;
}

function lcp(arr) {
  let arrLength = arr.length;
  if (arrLength === 0) return "";
  if (arrLength === 1) return arr[0];

  let low = 0;
  let high = arr[0].length - 1;

  let lcp = "";

  while (low < high) {
    let mid = low + (high - low) / 2;
    let isPresent = allContainsPrefix(arr[0].slice(low, mid), arr);
    if (isPresent) {
      lcp = lcp + arr[0].slice(low, mid);

      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return lcp;
}

console.log(lcp(input));
