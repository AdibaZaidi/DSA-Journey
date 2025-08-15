/**
 * Problem: Largest Element in Array
 * Given an array arr[], find the largest element and return it.
 * 
 * Example:
 * Input:  arr = [1, 8, 7, 56, 90]
 * Output: 90
 * 
 * Constraints:
 * 1 <= arr.length <= 10^6
 * 0 <= arr[i] <= 10^6
 */

class Solution {
    largest(arr) {
        let n = arr.length;
        let largest = arr[0];

        for (let i = 1; i < n; i++) {
            if (arr[i] > largest) {
                largest = arr[i];
            }
        }
        return largest;
    }
}

// Example usage
const solution = new Solution();
console.log(solution.largest([1, 8, 7, 56, 90])); // Output: 90
console.log(solution.largest([5, 5, 5, 5]));     // Output: 5
console.log(solution.largest([10]));            // Output: 10
