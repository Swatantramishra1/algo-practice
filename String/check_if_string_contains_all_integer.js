// Given a string str consisting of alphanumeric characters, the task is to check whether the string contains all the digits from 1 to 9.

// Input: str = “Geeks12345for69708”
// Output: Yes
// All the digits from 0 to 9 are
// present in the given string.

function isInteger(value) {
  return isNaN(value) ? false : true;
}

function isAllIntegerContains(str) {
  const intObj = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    0: false
  };

  for (let i = 0; i < str.length; i++) {
    if (isInteger(str[i])) {
      if (intObj.hasOwnProperty(+str[i])) {
        intObj[+str[i]] = true;
      }
    }
  }

  for (const key in intObj) {
    if (intObj.hasOwnProperty(key)) {
      if (!intObj[key]) {
        return false;
      }
    }
  }

  return true;
}

console.log(isAllIntegerContains("Geeks12345for708"));
