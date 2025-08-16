/**
 * Problem: Move Zeroes
 * Given an integer array nums, move all 0's to the end of it while maintaining 
 * the relative order of the non-zero elements.
 * 
 * Note: You must do this in-place without making a copy of the array.
 * 
 * Example 1:
 * Input:  nums = [0, 1, 0, 3, 12]
 * Output: [1, 3, 12, 0, 0]
 * Constraints:
 * 1 <= nums.length <= 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 */

class Solution {
    moveZeroes(nums) {
        let nums1 = [];
        let count = 0;

        // Step 1: Collect non-zero elements
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0) {
                nums1.push(nums[i]);
            } else {
                count++;
            }
        }

        // Step 2: Add zeroes at the end
        while (count > 0) {
            nums1.push(0);
            count--;
        }

        // Step 3: Copy back to original array
        for (let i = 0; i < nums.length; i++) {
            nums[i] = nums1[i];
        }
    }
}

// Example usage
const solution = new Solution();
let nums1 = [0, 1, 0, 3, 12];
solution.moveZeroes(nums1);
console.log(nums1); // Output: [1, 3, 12, 0, 0]

let nums2 = [0];
solution.moveZeroes(nums2);
console.log(nums2); // Output: [0]
