/**
 * Problem: Print Elements of Array
 * Given an array arr[], print all its elements space-separated.
 * Example:
 * Input:  arr = [1, 2, 3, 4, 5]
 * Output: 1 2 3 4 5
 * 
 * Constraints:
 * 1 <= arr.length <= 10^6
 * 1 <= arr[i] <= 10^8
 */

class Solution {
    printArray(arr) {
        let output = '';
        for (let i = 0; i < arr.length; i++) {
            output += arr[i] + ' ';
        }
        console.log(output.trim()); // Trim to remove trailing space
    }
}

// Example usage
const solution = new Solution();
solution.printArray([1, 2, 3, 4, 5]);  // Output: 1 2 3 4 5
solution.printArray([2, 3, 5, 5]);     // Output: 2 3 5 5
