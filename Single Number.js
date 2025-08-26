/**
 * Given an array arr[] of positive integers where every element appears even times 
 * except for one. Find that number occurring an odd number of times.
 *
 * Examples:
 * Input: arr = [1, 1, 2, 2, 2]
 * Output: 2
 * Explanation: In the given array all elements appear twice except 2, which appears thrice.
 *
 * Input: arr = [8, 8, 7, 7, 6, 6, 1]
 * Output: 1
 * Explanation: In the given array all elements appear twice except 1, which appears once.
 *
 * Constraints:
 * 1 ≤ arr.length ≤ 10^6
 * 0 ≤ arr[i] ≤ 10^5
 *
 * Expected Time Complexity: O(n)
 * Expected Auxiliary Space: O(1)
 */

class Solution {
    getSingle(arr) {
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            result ^= arr[i]; // XOR cancels out pairs and leaves the odd one
        }
        return result;
    }
}

// Example usage
const sol = new Solution();
console.log(sol.getSingle([1, 1, 2, 2, 2]));       // 2
console.log(sol.getSingle([8, 8, 7, 7, 6, 6, 1])); // 1
