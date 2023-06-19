/**
 * * 26. Remove Duplicates from Sorted Array
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
 * The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
 *
 * Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
 *
 * Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially.
 * ? The remaining elements of nums are not important as well as the size of nums.
 * ? Return k.
 */

/**
 * * First Solution
 * ? Its two pointer method
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
};

/**
 * * Second Solution
 * ? Set structure with two pointers
 * @param {nums[]} nums 
 * @returns {num}
 */

var removeDuplicates2 = function (nums) {
  let set = new Set();
  let i,
    j = 0;

  while (j < nums.length) {
    if (!set.has(nums[j])) {
      set.add(nums[j]);
      nums[i] = nums[j];
      i++;
    }
    j++;
  }

  return i;
};


/**
 * * Third Solution
 * ? Single pointer
 */

function removeDuplicates3 (nums){
     let count= 0;
     for(let i=0;i<nums.length; i++){
          if(nums[i] !== nums[count]){
               count++;
               nums[count] = nums[i]
          }
     }

     return count+1;
}


/**
 * * Fourth Solution
 * ? Set data stucture
 */

function removeDuplicates4(nums){
     let uniqueNums = [...new Set(nums)];
     nums.length = uniqueNums.length;

     for(let i=0;i<uniqueNums.length; i++){
          nums[i] = uniqueNums[i];
     }

     return uniqueNums.length;
}

/**
 * * Fifth solution
 * ? Array slice mehtod
 */

function removeDuplicates5(nums){
     
}