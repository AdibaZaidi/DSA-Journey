/**
 * Sum of Natural Numbers
 * Given an integer n, compute the sum of all natural numbers from 1 to n (inclusive).
 * If n is 0, the sum should be 0.
 *
 * Examples:
 * Input: n = 3
 * Output: 6
 * Explanation: 1 + 2 + 3 = 6
 *
 * Input: n = 5
 * Output: 15
 * Explanation: 1 + 2 + 3 + 4 + 5 = 15
 *
 * Constraints:
 * 1 ≤ n ≤ 10^4
 *
 * Expected Time Complexity: O(n)   (recursive calls)
 * Expected Auxiliary Space: O(n)   (stack space for recursion)
 */

class Solution {
    findSum(n) {
        if (n === 1) {
            return 1;
        }
        return n + this.findSum(n - 1);
    }
}

// Example usage
const sol = new Solution();
console.log(sol.findSum(3)); // 6
console.log(sol.findSum(5)); // 15
