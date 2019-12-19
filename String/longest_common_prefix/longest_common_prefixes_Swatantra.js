// // Write a function to find the longest common prefix string amongst an array of strings.
// // If there is no common prefix, return an empty string "".

// // Input: ["flower","flow","flight"]
// // Output: "fl"

// const input = ["flower", "flow", "flight"];

// // Method 1
// function getCommonPrefix(arr) {
//   if (arr.length === 0) {
//     return "";
//   }

//   if (arr.length === 1) {
//     return arr;
//   }

//   arr = arr.sort((a, b) => (a.toUpperCase() > b.toUpperCase() ? 1 : -1));

//   const length = arr.length;
//   const minSearchLength = Math.min(arr[0].length, arr[length - 1].length);
//   const first = arr[0];
//   const last = arr[length - 1];

//   let i = 0;

//   while (i < minSearchLength && first[i] == last[i]) {
//     i++;
//   }

//   return first.slice(0, i);
// }

// // console.log(getCommonPrefix(input));

// // Complexity for this problem >>> O(MinSearchLength * n * logn)

// //***************** Method 2 --- Devide and Conqure **********************

// function commonPrefixUtil(str1, str2) {
//   let result = [];
//   let l1 = str1.length;
//   let l2 = str2.length;

//   for (let i = 0, j = 0; i <= l1 - 1 && j <= l2 - 1; i++, j++) {
//     if (str1[i] != str2[j]) break;
//     result.push(str1[i]);
//   }

//   return result;
// }

// function commonPrefix(arr, low, high) {
//   if (low === high) return arr[low];

//   if (high > low) {
//     let mid = Math.floor(low + (high - low) / 2);
//     let str1 = commonPrefix(arr, low, mid);
//     let str2 = commonPrefix(arr, mid + 1, high);

//     return commonPrefixUtil(str1, str2);
//   }
// }

// const ans = commonPrefix(input, 0, 2);

// if (ans.length) {
//   console.log("Longest Common Prefix is = ", ans.join(""));
// } else {
//   console.log("There No Longest Common Prefix");
// }

const input = ["swatantra", "swapnil", "swastik"];

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

      low = mid;
    } else {
      high = mid - 1;
    }
  }

  return lcp;
}

console.log(lcp(input));
