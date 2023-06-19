/**
 * * 27. Remove Element
 *  Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
 *  The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
 *  Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
 *  Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
 * The remaining elements of nums are not important as well as the size of nums.
 * ! Return k.
 */

/**
 * * Solution-1
 */
const removeElement1 = function (nums, val) {
  let i = 0;
  let n = nums.length;

  while (i < n) {
    if (nums[i] === val) {
      nums[i] = nums[n - 1];
      n--;
    } else {
      i++;
    }
  }

  return n;
};

/**
 * * Solution-2
 */

const removeElement2 = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

/**
 * * Solution-3
 */

const removeElement3 = (nums, val) => {
  let k = 0; // variable to keep track of the number of elements not equal to val

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      continue; // Skip this iteration if element is equal to val
    }

    nums[k] = nums[i];
    k++;
  }

  return k;
};

let nums = [3, 2, 2, 3];
let val = 3;

let result = removeElement3(nums, val);
console.log(result);
