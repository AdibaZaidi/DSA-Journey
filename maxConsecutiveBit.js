/**
 * Max Consecutive Bit
 * Given an array arr[] consisting of only 0’s and 1’s, 
 * return count of the maximum number of consecutive 1’s or 0’s present in the array.
 *
 * Examples:
 * Input: arr = [0, 1, 0, 1, 1, 1, 1]
 * Output: 4
 * Explanation: The maximum number of consecutive 1’s is 4 (from index 3 to 6).
 *
 * Input: arr = [0, 0, 1, 0, 1, 0]
 * Output: 2
 * Explanation: The maximum number of consecutive 0’s is 2 (from index 0 to 1).
 * Constraints:
 * 1 ≤ arr.length ≤ 10^5
 * 0 ≤ arr[i] ≤ 1
 */

class Solution {
    /**
     * @param {number[]} arr
     * @returns {number}
     */
    maxConsecBits(arr) {
        let count0 = 0, count1 = 0;
        let max0 = 0, max1 = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 1) {
                count1++;
                count0 = 0;
                max1 = Math.max(max1, count1);
            } else {
                count0++;
                count1 = 0;
                max0 = Math.max(max0, count0);
            }
        }

        return Math.max(max0, max1);
    }
}

// Example usage
const sol = new Solution();
console.log(sol.maxConsecBits([0, 1, 0, 1, 1, 1, 1])); // 4
console.log(sol.maxConsecBits([0, 0, 1, 0, 1, 0]));   // 2
console.log(sol.maxConsecBits([0, 0, 0, 0]));         // 4
