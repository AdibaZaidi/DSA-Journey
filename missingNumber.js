/**
 * Missing Number
 * Given an array nums containing n distinct numbers in the range [0, n], 
 * return the only number in the range that is missing from the array.
 *
 * Examples:
 * Input: nums = [3, 0, 1]
 * Output: 2
 * Explanation: n = 3, all numbers in range [0,3]. 2 is missing.
 *
 * Input: nums = [0, 1]
 * Output: 2
 * Explanation: n = 2, all numbers in range [0,2]. 2 is missing.
 *
 * Constraints:
 * 1 ≤ nums.length ≤ 10^5
 * 0 ≤ nums[i] ≤ n
 */

class Solution {
    missingNumber(nums) {
        const n = nums.length;
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += nums[i];
        }
        const expectedSum = (n * (n + 1)) / 2;
        return expectedSum - sum;
    }
}

// Example usage
const sol = new Solution();
console.log(sol.missingNumber([3, 0, 1])); // 2
console.log(sol.missingNumber([0, 1]));    // 2
console.log(sol.missingNumber([9,6,4,2,3,5,7,0,1])); // 8
