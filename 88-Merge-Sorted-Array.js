/**
 * ? You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n,
 * ? representing the number of elements in nums1 and nums2 respectively.
 * ? Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * ? The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
 * ? To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
 * ? and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */

/**
 * * Approach One or Method One
 */
const merge1 = (nums1, m, nums2, n) => {
  let last = m + n - 1; //last of total sorted array
  let i = m - 1; //last index of first array
  let j = n - 1; // last index of second array

  //   ? we are filling our array from the last
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[last] = nums1[i];
      i--;
    } else {
      nums2[last] = nums2[j];
      j--;
    }
    last--;
  }

  // ? fill the left element in nums2 array to nums1
  // ? If there are remaining elements in nums2, copy them to nums1
  if (j >= 0) {
    nums2[last] = nums2[j];
    j--;
    last--;
  }
};

/**
 *  * Approach Two
 */

const merge2 = (nums1, m, nums2, n) => {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
};

/**
 * * Approach Theree
 */

const merg3 = (nums1, m, nums2, n) => {
  let nums1Copy = nums1.slice(0, m);

  let i = 0;
  let j = 0;
  let k = 0;

  // Merge elements from nums1Copy and nums2 into nums1
  while (i < m && j < n) {
    if (nums1Copy[i] <= nums2[j]) {
      nums1[k] = nums1Copy[i];
      i++;
    } else {
      nums1[k] = nums2[j];
      j++;
    }
    k++;
  }

  // Copy remaining elements from nums1Copy, if any
  while (i < m) {
    nums1[k] = nums1Copy[i];
    i++;
    k++;
  }

  // Copy remaining elements from nums2, if any
  while (j < n) {
    nums1[k] = nums2[j];
    j++;
    k++;
  }
};

/**
 * * Approach Four
 */

function merge4(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  for (; i >= 0 && j >= 0; k--) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
  }

  // Copy remaining elements from nums2, if any
  for (; j >= 0; j--, k--) {
    nums1[k] = nums2[j];
  }
}