/**
 * Find All Numbers Disappeared in an Array
 * Given an array nums of n integers where nums[i] is in the range [1, n],
 * return an array of all the integers in the range [1, n] that do not appear in nums.
 *
 * Examples:
 * Input: nums = [4,3,2,7,8,2,3,1]
 * Output: [5,6]
 *
 * Input: nums = [1,1]
 * Output: [2]
 *
 * Constraints:
 * n == nums.length
 * 1 <= n <= 10^5
 * 1 <= nums[i] <= n
 */

class Solution {
    findDisappearedNumbers(nums) {
        const n = nums.length;
        const result = [];
        const numSet = new Set(nums);
        
        for (let i = 1; i <= n; i++) {
            if (!numSet.has(i)) {
                result.push(i);
            }
        }
        return result;
    }
}

// Example usage
const sol = new Solution();
console.log(sol.findDisappearedNumbers([4,3,2,7,8,2,3,1])); // [5,6]
console.log(sol.findDisappearedNumbers([1,1]));             // [2]
console.log(sol.findDisappearedNumbers([1,2,3,4]));         // []
