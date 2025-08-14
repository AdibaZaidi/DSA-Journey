/**
 * Problem: Second Largest Element in Array
 * Given an array of positive integers, return the second largest element.
 * If the second largest element doesn't exist, return -1.
 * 
 * Note: The second largest element must not be equal to the largest element.
 * 
 * Example:
 * Input:  arr = [12, 35, 1, 10, 34, 1]
 * Output: 34
 * 
 * Constraints:
 * 2 <= arr.length <= 10^5
 * 1 <= arr[i] <= 10^5
 */

class Solution {
    getSecondLargest(arr) {
        let n = arr.length;
        let largest = -1;
        let secondLargest = -1;

        // Step 1: Find the largest element
        for (let i = 0; i < n; i++) {
            if (arr[i] > largest) {
                largest = arr[i];
            }
        }

        // Step 2: Find the second largest element
        for (let i = 0; i < n; i++) {
            if (arr[i] > secondLargest && arr[i] !== largest) {
                secondLargest = arr[i];
            }
        }

        return secondLargest;
    }
}

// Example usage
const solution = new Solution();
console.log(solution.getSecondLargest([12, 35, 1, 10, 34, 1])); // Output: 34
console.log(solution.getSecondLargest([10, 5, 10]));           // Output: 5
console.log(solution.getSecondLargest([10, 10, 10]));          // Output: -1
