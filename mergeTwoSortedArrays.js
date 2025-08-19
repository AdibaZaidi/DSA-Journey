// Merge Sorted Array
// ------------------------------------------------
// Problem:
// You are given two sorted arrays, nums1 and nums2, and two integers m and n.
// nums1 has a length of m+n, with the first m elements valid and the rest filled with 0.
// Merge nums2 into nums1 as one sorted array, in-place.
//
// Approach (Two Pointers from End):
// - Use 3 pointers: 
//   i → last valid element in nums1 (m-1)
//   j → last element in nums2 (n-1)
//   k → last index in nums1 (m+n-1)
// - Compare nums1[i] and nums2[j] from the back and place the larger one at nums1[k].
// - Continue until either array is exhausted.
// - If nums2 still has elements left, copy them into nums1.
// - Time: O(m+n), Space: O(1)
//
// Example:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;        // pointer for nums1 valid elements
    let j = n - 1;        // pointer for nums2
    let k = m + n - 1;    // pointer for placement in nums1

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // If nums2 still has elements left
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};

// --------------------
// Test Cases
// --------------------
let nums1, nums2;

nums1 = [1,2,3,0,0,0];
nums2 = [2,5,6];
merge(nums1, 3, nums2, 3);
console.log(nums1); // [1,2,2,3,5,6]

nums1 = [1];
nums2 = [];
merge(nums1, 1, nums2, 0);
console.log(nums1); // [1]

nums1 = [0];
nums2 = [1];
merge(nums1, 0, nums2, 1);
console.log(nums1); // [1]
